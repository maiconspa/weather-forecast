import React, { useContext } from 'react';
import { Deg, Max, Min } from './styled'

import ForecastContext from '../context'

const TodayContainer = () => {
  const { currentForecast } = useContext(ForecastContext)

  return (
    <Deg>
      { 
        currentForecast &&
          <>
            <Max> {Math.trunc(currentForecast.main.temp_max)} </Max>
            <Min>ºc</Min>
          </>
      }
    </Deg>
  )
}

export default TodayContainer;