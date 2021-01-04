import { View } from 'react-native';
import React, { useContext } from 'react';

import { Ionicons  } from '@expo/vector-icons'
import { Container, Address, ButtonContainer } from './styles';

import ForecastContext from '../context'

const Header = props => {
  const {currentForecast} = useContext(ForecastContext)
  
  return <Container>
    { 
      currentForecast && 
        <>
          <View>
            <Address>{currentForecast.name}</Address>
          </View>
          
          <View>
            <ButtonContainer onPress={() => props.handleUpdate(true)}>
              <Ionicons name="reload" size={32} color="black" /> 
            </ButtonContainer>
          </View>
        </>
    }
  </Container>;
}

export default Header;