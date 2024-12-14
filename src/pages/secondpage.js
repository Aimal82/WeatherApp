const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "5f5d5410b404553d601b0c9ffe0d565e";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter valid city name")
    }
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Cloud not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const {name: city,
          main: {temp, humidity}, 
          weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const discriptionDisplay = document.createElement("p");
    const ImageDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);

}
function getWeatherImage(WeatherId){

}

function displayError(message){
    const displayError = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    
}