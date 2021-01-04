const getWeeklyForecast = ({ latitude, longitude }) => {
    const API_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    const API_KEY = '20e395c956a9dec120b9d9e55efa6a97';

    let url = API_URL+
    `?lat=${latitude}`+
    `&lon=${longitude}`+
    `&appid=${API_KEY}`+
    `&units=metric`

    return fetch(url, { method: 'GET' })
}

export default getWeeklyForecast