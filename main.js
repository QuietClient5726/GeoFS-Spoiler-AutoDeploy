// ==UserScript==
// @name         GeoFS Auto Airbrakes on Touchdown
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically deploy airbrakes (spoilers) the moment the wheels touch down in GeoFS
// @match        https://www.geo-fs.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // Wait for GeoFS internals to be ready
  const wait = setInterval(() => {
    if (window.geofs?.aircraft?.instance && window.geofs?.api?.addFrameCallback && window.controls?.setters?.setAirbrakes) {
      clearInterval(wait);
      init();
    }
  }, 250);

  function init() {
    let wasOnGround = true; // start true in case you spawn on a runway

    geofs.api.addFrameCallback(() => {
      const ac = geofs.aircraft.instance;
      const onGround = !!ac.groundContact;

      // OPTIONAL: require gear down to trigger (uncomment next line)
      // const gearDown = ac.gearPosition > 0.5;

      // Touchdown detection: transition from airborne -> ground
      if (onGround && wasOnGround === false) {
        if (controls.airbrakes?.position === 0 /* && gearDown */) {
          // Deploy airbrakes
          controls.setters.setAirbrakes.set();
          console.log('[AutoAirbrakes] Deployed on touchdown');
        }
      }

      // Retract automatically after takeoff (ground -> airborne)
      if (!onGround && wasOnGround === true) {
        if (controls.airbrakes?.position > 0) {
          controls.setters.setAirbrakes.set();
          console.log('[AutoAirbrakes] Retracted after liftoff');
        }
      }

      wasOnGround = onGround;
    }, 'autoAirbrakesTouchdown');
  }
})();
