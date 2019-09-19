class Apicall {
    fetchWeatherDetails = async (city, callback) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0dee3ad64641dc88ea823ed96aaec61`);
        const weatherData = await response.json();
        callback(weatherData);
    }
}
export default new Apicall();
