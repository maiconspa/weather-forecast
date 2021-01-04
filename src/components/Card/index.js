import React, { useContext } from 'react';
import ForecastContext from '../context'

import { Container, CardContainer, Title, Deg, Max, Min } from './styles';

const Card = () => {
  const { currentForecast } = useContext(ForecastContext)
  let days = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  let weekNumber = new Date().getDay()

  return <Container>
    { 
      currentForecast &&
      <> 
        <CardContainer>
          <Title>Hoje</Title>
          <Deg>
            <Max>{Math.trunc(currentForecast.main.temp_max)}º</Max>
            <Min>/ {Math.trunc(currentForecast.main.temp_min)}º</Min>
          </Deg>
        </CardContainer>

        <CardContainer>
          <Title>Amanhã</Title>
          <Deg>
            <Max></Max>
            <Min>/</Min>
          </Deg>
        </CardContainer>

        <CardContainer>
          <Title>{days[weekNumber+2 > 6 ? weekNumber-5 : weekNumber+2]}</Title>
          <Deg>
            <Max></Max>
            <Min>/</Min>
          </Deg>
        </CardContainer>
      </>
    }
    
    
  </Container>
}

export default Card;