const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const city = 'New York';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Display the weather data in the console
    // Handle data as needed for your application
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
    // Handle error case
  });
