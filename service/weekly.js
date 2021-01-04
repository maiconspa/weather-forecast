const getWeeklyForecast = ({ latitude, longitude }) => {
    const API_URL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly';
    const API_KEY = 'e02204a76f87c96d27746c33198e3b81';
    
    let url = API_URL+
    `?lat=${latitude}`+
    `&lon=${longitude}`+
    `&appid=${API_KEY}`+
    `&units=metric`

    return fetch(url, { method: 'GET' })
}

export default getWeeklyForecast