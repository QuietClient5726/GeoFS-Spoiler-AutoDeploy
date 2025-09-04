# GeoFS Auto Airbrakes on Touchdown

A userscript for [GeoFS](https://www.geo-fs.com) that automatically deploys spoilers (airbrakes) when your aircraft touches down and retracts them after takeoff.  
This script is free to use, but **not intended for modification or redistribution**.  

---

## Features
- Automatically deploys spoilers on wheel touchdown (`groundContact` detection).  
- Automatically retracts spoilers after takeoff.  
- Works with all aircraft in GeoFS.  
- Lightweight and efficient, runs every frame without noticeable performance impact.  

---

## Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/) (or another userscript manager).  
2. Open this repository and click on [auto-airbrakes.js](./auto-airbrakes.js).  
3. Click the **Raw** button.  
4. Tampermonkey should prompt you to install the script. Confirm and save.  
5. Reload [GeoFS](https://www.geo-fs.com) and test it by taking off and landing.  

---

## Notes
- GeoFS internally calls spoilers “airbrakes,” so the script uses that control name.  
- Works in both free and Pro versions of GeoFS.  
- If you spawn already on the runway, the script will not auto-deploy until your first landing.  
- There is an optional check in the code to require landing gear to be down before deployment (commented out by default).  

---

## Demo
*(Optional: Add a GIF or screenshot here of the spoilers deploying automatically on touchdown)*  

---

## License
MIT License — free to use.  
This script is **not intended for modification or redistribution**.  
