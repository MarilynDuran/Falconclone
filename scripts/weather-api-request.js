async function getWeather() {
    try {
        // Declaramos el ID de la ciudad y la API key
        const cityId = '524901';
        const apiKey = 'f7ba02b7fc7028e2167e37c8ceb14b87';

        // Fetch para obtener los datos de la API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiKey}`);
        const weatherData = await response.json();

        console.log(weatherData);

        // Obtenemos el div donde queremos añadir el elemento
        const containerDivL = document.getElementById('weather-text');
        const containerDivRightUp = document.getElementById('temp-blue-upper');
        const containerDivRightDown = document.getElementById('weather-temperature');

        if (weatherData.city.name) {
            // Creamos el elemento para meter el nombre de la ciudad
            const cityName = document.createElement('h6');
        
            // Decimos lo que queremos que vaya dentro del texto del h6
            cityName.textContent = weatherData.city.name;

            // Agregamos el elemento h6 al div
            containerDivL.appendChild(cityName);
        }



        if (weatherData.list[0].weather[0].description) {
            //creamos elemento para descripcion del tiempo
            const skyData = document.createElement('div');

            //metemos el texto dentro de el elemento creado
            skyData.textContent = weatherData.list[0].weather[0].description;

            //damos clase al elemento creado para que tenga estilo
            skyData.classList.add('orange-text');

            //como ya tenemos el div donde va ir este contenido de el nombre de la ciudad lo añadimos directamente
            containerDivL.appendChild(skyData);

        }
        

        //calculamos la precipitacion
        if (weatherData.list[0].rain && weatherData.list[0].rain["3h"]) {

            const precipitationData = document.createElement('div');

            let rawPrecipitationData = weatherData.list[0].rain["3h"];
            let percentagePrecipitation = rawPrecipitationData * 100;

            precipitationData.textContent = `Precipitation: ${percentagePrecipitation}%`;
            precipitationData.classList.add('grey-text-weather');

            containerDivL.appendChild(precipitationData);

        } else {

            const precipitationData = document.createElement('div');
            precipitationData.textContent = 'Precipitation: 0%'
            precipitationData.classList.add('grey-text-weather');
            containerDivL.appendChild(precipitationData);
        }
``
        if (weatherData.list[0].main.temp) {
            const temperatureData = document.createElement('span');
            
            let fahrenheitTemperature = weatherData.list[0].main.temp;
            let celsiusTemperature = (fahrenheitTemperature - 273.15).toFixed(1);

            temperatureData.textContent = `${celsiusTemperature}°`;
            containerDivRightUp.appendChild(temperatureData);
        }

        if (weatherData.list[0].main.temp_max && weatherData.list[0].main.temp_min){
            const maxAndMin = document.createElement('div');

            let rawMaxTemperature = weatherData.list[0].main.temp_max;
            let maxTemperature = (rawMaxTemperature - 273.15).toFixed(1);
            let rawMinTemperature = weatherData.list[0].main.temp_min;
            let minTemperature = (rawMinTemperature - 273.15).toFixed(1);

            let bothMaxAndMin = `${maxTemperature}° / ${minTemperature}°`;

            maxAndMin.textContent = bothMaxAndMin;
            maxAndMin.classList.add('temp-gray-down');

            containerDivRightDown.appendChild(maxAndMin);
        }
        
    } catch(error) {
        console.error('Error en la obtención de los datos:', error);
    }
}

getWeather();