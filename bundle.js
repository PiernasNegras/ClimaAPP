/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
class Store{
    constructor(){
        this.city;
        this.defaultCity = 'Buenos Aires Argentina';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
            localStorage.setItem('city', this.defaultCity);
        }else{
            this.city = localStorage.getItem('city');
        }
        
        return{
            city: this.city
        } 
        
    }

    setLocationData(city){
        localStorage.setItem('city',city);
    }

}

/***/ }),

/***/ 382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
class UI{

    constructor(){
        this.location = document.getElementById('weather-location');
        this.locationC = document.getElementById('weather-country');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
        this.vis = document.getElementById('weather-vis');
        this.up = document.getElementById('weather-up');
        this.feels = document.getElementById('weather-feelslike');
    }

    render(weather){
        
        const iconContainer = document.getElementById('weather-icon');
        iconContainer.innerHTML = ''; // Limpiar el contenido anterior
        const img = document.createElement('img');
        img.src = 'https:'+weather.current.condition.icon;
        iconContainer.appendChild(img);

        this.location.textContent = weather.location.name;
        this.locationC.textContent = weather.location.country;
        this.desc.textContent = weather.current.condition.text;
        this.string.textContent =  weather.current.temp_c  + ' ' + 'C°';
        this.feels.textContent = 'Sensacion Términca' + ' ' + weather.current.feelslike_c + ' ' + 'C°';
        this.humidity.textContent = 'Humedad:' + ' '+ weather.current.humidity + '%';
        this.wind.textContent = 'Viento:' + ' ' + weather.current.wind_kph + ' Km/h ' + 'Dirección: ' + weather.current.wind_dir;
        this.vis.textContent = 'Visibilidad: ' + ' ' + weather.current.vis_km + ' ' + 'Km';
        this.up.textContent = 'Ultima Actualización: ' + ' ' + weather.current.last_updated;
    }
}


/***/ }),

/***/ 783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Weather: () => (/* binding */ Weather)
/* harmony export */ });
class Weather{

    constructor(city){
        this.apikey = 'f48b0ef6a98144d5a7170429231107';
        this.city = city;
        
    }
    async   getWeather(){
        const URL = `https://api.weatherapi.com/v1/current.json?key=${this.apikey}&lang=es&q=${this.city}&aqi=no`
        const response = await   fetch(URL);
        const data = await response.json();
        return data;
    }

    changeLocation(city){
        this.city = city;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

const { Weather } = __webpack_require__(783);
const { UI } = __webpack_require__(382);
const { Store } = __webpack_require__(677);

//Instanciaciones
const store = new Store();
const {city} = store.getLocationData();
const ui = new UI();
const weather = new Weather('Buenos Aires Argentina');


async   function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    

    weather.changeLocation(city);
    store.setLocationData(city);
    fetchWeather();
    e.preventDefault();
});
})();

/******/ })()
;