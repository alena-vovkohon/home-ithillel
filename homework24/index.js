let container = document.querySelector('.container')

let input = document.createElement('input')    
input.classList.add('create-input')

let buttonAdd = document.createElement('button')
buttonAdd.classList.add('add-button')
buttonAdd.innerText = 'Add'
let buttonClearn = document.createElement('button')
buttonClearn.classList.add('clearn-button')
buttonClearn.innerHTML='Clearn'
container.append(input, buttonAdd, buttonClearn)

let divWrap = document.createElement('div');
divWrap.classList.add('wrap');
container.appendChild(divWrap)
let boxInfo = document.createElement('div');
boxInfo.classList.add('box__info');
let boxWeather = document.createElement('div');
boxWeather.classList.add('box__weather');
divWrap.append(boxInfo, boxWeather);

let divError = document.createElement('div')
divError.classList.add('active') 
container.appendChild(divError)
     

let url = ''

buttonAdd.addEventListener('click', getWeather)
buttonClearn.addEventListener('click', () => {
    clearnInput()
})

function getWeather() {
    boxWeather.innerHTML = ''
    boxInfo.innerHTML = ''
    day()
   
    if (input.value === '') {
        if (localStorage.getItem('city') !== null) {
            city = localStorage.getItem('city')
            url = `http://api.openweathermap.org/data/2.5/weather?q=` + `${city}` + `&units=metric&APPID=5d066958a60d315387d9492393935c19`
        } else {
            localStorage.setItem('city', 'TORONTO')
            city = localStorage.getItem('city')
            url = `http://api.openweathermap.org/data/2.5/weather?q=` + `${city}` + `&units=metric&APPID=5d066958a60d315387d9492393935c19` 
        }
    } else {
        if (!validInput(input.value)) {
        infoText("use only standard alphanumerics")
            
        } else {
            divError.innerHTML=''
            divError.style.display = 'none'
            let city = input.value.toUpperCase()
            url = `http://api.openweathermap.org/data/2.5/weather?q=` + `${city}` + `&units=metric&APPID=5d066958a60d315387d9492393935c19` 
            
            localStorage.setItem('city', input.value.toUpperCase())
        }

     }
    clearnInput()

    fetch(url)
        .then(response => response.json())
        .then(json => {
        
            let divTemp = document.createElement('div');
            divTemp.classList.add('box-temp');
            boxWeather.appendChild(divTemp);

            //Name city
            let h1 = document.createElement('h1');
            h1.classList.add('city');
            h1.innerHTML = json.name;
            // boxWeather.appendChild(h1);
            // console.log('h1', json.name)
            
            // Weather
            let h2 = document.createElement('h2');
            h2.classList.add('temp');
            h2.innerHTML = json.main.temp;
            
            // Feeling Like
            let feelingLike = json.main.feels_like;
            // console.log(feelingLike);
            let p = document.createElement('p');
            p.classList.add('feeling-like');
            p.innerHTML = `Feeling Like: ${feelingLike}`;

            //description
            let description = json.weather[0].description;
            // console.log(description);
            let h3 = document.createElement('h3');
            h3.classList.add('description');
            h3.innerHTML = description;

            divTemp.append(h1, h2, p, h3);

            //icon        
            let icon = json.weather[0].icon;
            // console.log(icon);
            let iconImg = document.createElement('img');
            let divIcon = document.createElement('div');
            divIcon.classList.add('box__icon');
            boxWeather.appendChild(divIcon);
            divIcon.appendChild(iconImg);
            let newIconImg = `http://openweathermap.org/img/w/` + `${icon}` + `.png`;
            iconImg.setAttribute('src', newIconImg);

            //wind
            let windDeg = json.wind.deg;
            let windSpeed = json.wind.speed;
            // console.log(windSpeed);
            let divInformation = document.createElement('div');
            divInformation.classList.add('box__information');
            boxInfo.appendChild(divInformation);

            let pWind = document.createElement('p');
            pWind.classList.add('wind');
            pWind.innerHTML = 'Wind: ' + windSpeed + ' km/h ' + windDeg;
            
            //Humidity
            let humidity = json.main.humidity;
            // console.log(humidity);
            let pHumidity = document.createElement('p');
            pHumidity.classList.add('humidity');
            pHumidity.innerHTML = 'Humidity: ' + humidity + ' % ';

            //Pressure
            let pressure = json.main.pressure;
            // console.log(pressure);
            let pPressure = document.createElement('p');
            pPressure.classList.add('humidity');
            pPressure.innerHTML = 'Pressure: ' + pressure + ' hPa ';

            divInformation.append(pWind, pHumidity, pPressure);
        })
        .catch(error => {
            divError.innerHTML=""
            infoText("Сity not found.")
        })
}
getWeather()

function validInput(value) {
    if (value == ''){
        return true
    } else {
      return /^[a-zA-Z]+$/.test(value)  
    }
}

function clearnInput() {
    input.value = ''
}

function day() {
    let d = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let h2 = document.createElement('h2');
    let divDay = document.createElement('div');
    divDay.classList.add('box__day');
    boxInfo.appendChild(divDay);
    h2.classList.add('day');
    h2.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " - " + days[d.getDay()];

    divDay.appendChild(h2);
}

function infoText(text) { 
    divError.style.display = 'block'
    let p = document.createElement('p')
    divError.appendChild(p)
    p.innerHTML = text
}
