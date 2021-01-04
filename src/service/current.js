const getCurrentForecast = ({ latitude, longitude }) => {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'e02204a76f87c96d27746c33198e3b81';
    
    let url = API_URL+
    `?lat=${latitude}`+
    `&lon=${longitude}`+
    `&appid=${API_KEY}`+
    `&units=metric`

    return fetch(url, { method: 'GET' })
}

export default getCurrentForecast