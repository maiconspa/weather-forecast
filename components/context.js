import React, { createContext, useContext } from 'react'

const ForecastContext = createContext({
    currentForecast: {},
    weeklyForecast: {}
})

export default ForecastContext