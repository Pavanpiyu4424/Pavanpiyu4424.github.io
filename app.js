const button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');
let humd = document.querySelector('.humd');
let wind = document.querySelector('.wind');
let display = document.querySelector('.display');


button.addEventListener('click',function(){
    if(inputValue.value==='')
    {
       alert('Please Enter a City!!');
    }
    else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=86b4c4a1910e01a7612031ce78990ea0&units=metric`)
    .then(response=>response.json())
    .then(data=>{
        let nameValue = data.name;
        let descValue = data.weather[0].description;
        let tempValue = `${data.main.temp}&#8451`;
        let humdValue = data.main.humidity;
        let windValue = data.wind.speed;
        display.classList.remove('hide');
        display.innerHTML = `
        <img src="img/weather.png" width="100px">
        <h3 class="name">${nameValue} <i class="fa-solid fa-location-dot"></i></h3>
        <p class="temp">${descValue} <i class="fa-solid fa-cloud"></i></p>
        <p class="desc">${tempValue} <i class="fa-solid fa-temperature-low"></i></p>
        <p class="humd">${humdValue}  <i class="fa-sharp fa-solid fa-droplet"></i></p>
        <p class="wind">${windValue} <i class="fa-solid fa-wind"></i></p>`;
    })
    .catch(err=> alert("Wrong City Name!!"));
}
    
});