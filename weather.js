const apiKey = "657cbe184ee4cacb07343f458efb0d45";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const waetherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');
searchBtn.addEventListener('click',()=> {
    const city = cityInput.value;
    if(city){
        fetchWeather(city);
    }
})
async function fetchWeather(city){
    try{
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if(response.ok){
            displayWeather(data);
            errorMessage.innerHTML = '';
        }else{
            throw new Error(data.message);
        }
    }catch{
        errorMessage.innerHTML = `Error: ${error.message}`;
        waetherInfo.innerHTML = '';
        }
    }
function displayWeather(data){
    const {main, weather,wind,name} = data;
    waetherInfo.innerHTML = `
    <h2>${name}</h2>
    <p>Temprature: ${main.temp}</P>
    <p>Condition: ${weather[0].description}</p>
    <p>wind speed: ${wind.speed}m/s</p>
    <p>Humidity: ${main.humidity}%</p> `
   
}
