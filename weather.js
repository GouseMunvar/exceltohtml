const languages = [
    'en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ko'
];

languages.forEach(la => {
    let lan = document.createElement("option");
    lan.innerText = `${la}`;
    document.getElementById("lang").appendChild(lan);
});

for (let i = -180; i <= 180; i++) {
    let op = document.createElement("option");
    op.innerText = `${i}`;
    document.getElementById("longitude").append(op);
}

for (let i = -90; i <= 90; i++) {
    let op1 = document.createElement("option");
    op1.innerText = `${i}`;
    document.getElementById("lattitude").append(op1);
}

const url = `https://weatherkit.apple.com/api/v1/weather/{language}/{latitude}/{longitude}`;

let Btn = document.getElementById("btn");

Btn.addEventListener("click", () => {
    const language = document.getElementById("lang").value;
    const latitude = document.getElementById("lattitude").value;
    const longitude = document.getElementById("longitude").value;
    const timezone = 'America/Los_Angeles'; // Example timezone
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    const apiUrl = url
        .replace('{language}', language)
        .replace('{latitude}', latitude)
        .replace('{longitude}', longitude)
        + `?timezone=${timezone}`;

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('screen').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
});
