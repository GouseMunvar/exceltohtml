
document.addEventListener('DOMContentLoaded', () => {
let Btnoftemperature = document.getElementById("temperature");
let Btnofwind = document.getElementById("wind"); 
let Btnofhumidity = document.getElementById("humidity"); 
let Sel = document.getElementById("select");
let dis = document.querySelector(".screen");

const cities = [
    "NY",
    "LA",
    "CHI",
    "HOU",
    "PHX",
    "PHL",
    "SAT",
    "SD",
    "DAL",
    "SJ"
];

    

cities.forEach(city => {
    const option = document.createElement('option');
    option.innerHTML = `<p>${city}</p>`;
    option.value = city;
    Sel.appendChild(option);
});

Btnoftemperature.addEventListener('click', () => {
    let selectvalue = Sel.value;
    fetch(`https://goweather.herokuapp.com/weather/${selectvalue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let div = document.createElement("div");
            div.textContent = `Temperature in ${selectvalue}: ${data.temperature}`;
            dis.innerHTML = '';
            dis.appendChild(div);
            
        })
        .catch(error => {
            console.error('Error fetching temperature data:', error);
            let errorDiv = document.createElement("div");
            errorDiv.textContent = 'Error fetching temperature data. Please try again later.';
            dis.innerHTML = '';
            dis.appendChild(errorDiv);
        });
});

Btnofwind.addEventListener('click', () => { 
    fetch(`https://goweather.herokuapp.com/weather/${selectvalue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let div = document.createElement("div");
            div.textContent = `Wind in ${selectvalue}: ${data.wind}`;
            dis.innerHTML = '';
            dis.appendChild(div);
        })
        .catch(error => {
            console.error('Error fetching wind data:', error);
            let errorDiv = document.createElement("div");
            errorDiv.textContent = 'Error fetching wind data. Please try again later.';
            dis.innerHTML = '';
            dis.appendChild(errorDiv);
            
        });
});

Btnofhumidity.addEventListener('click', () => { // Ensure Btnofhumidity is correctly referenced
    let selectvalue = Sel.value;
    fetch(`https://goweather.herokuapp.com/weather/${selectvalue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let div = document.createElement("div");
            div.textContent = `Humidity in ${selectvalue}: ${data.humidity}`;
            dis.innerHTML = '';
            dis.appendChild(div);
        })
        .catch(error => {
            console.error('Error fetching humidity data:', error);
            let errorDiv = document.createElement("div");
            errorDiv.textContent = 'Error fetching humidity data. Please try again later.';
            dis.innerHTML = '';
            dis.appendChild(errorDiv);
        });
});
})
    