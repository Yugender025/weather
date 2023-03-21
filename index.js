const conatiner = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const  error= document.querySelector('.error-page');
const weather = document.querySelector('.weather-box');
const weatherData = document.querySelector('.weather-details');
search.addEventListener('click',() =>{
     const APIKey ='d3718f5b1c0a1d9777d8c5309c53aca2';
     const city =document.querySelector('.search-box input').value;
      if (city==='')
      return;
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then
      (json=>{
        if(json.cod === '404'){
            conatiner.style.height='400px';
            weather.style.display='none';
            weatherData.style.display='none';
            error.style.display='block';
            error.classList.add('fadeIn');
            return;
        }
        error.style.display='none';
        error.classList.remove('fadeIn');
        const image= document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description =document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');
        switch(json.weather[0].main){
            case 'Clear':
                image.src="images/clear.png";
                break;
            case 'Rain':
                image.src="images/rain.png";
                break;
            case 'Snow':
                image.src="images/snow.png";
                break;
            case 'clouds':
                image.src="images/clouds.png";
                break;
            case 'Haze':
                image.src="images/haze.png";
                break;
            case 'Few clouds':
                    image.src="images/clouds.png";
                    break;
                default:
                    image.src='';
        }
         temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C </
         <span>`;
         description.innerHTML=`${json.weather[0].description}`;
         humidity.innerHTML=`${json.main.humidity}%`;
         wind.innerHTML=`${parseInt(json.wind.speed)}Km/hr`;

         weather.style.display='';
         weatherData.style.display='';
         weather.classList.add('fadeIn');
         weatherData.classList.add('fadeIn');
         conatiner.style.height='1000px';
      })
})