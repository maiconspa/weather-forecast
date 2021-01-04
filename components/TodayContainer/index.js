import React, { useContext } from 'react';
import { Text } from 'react-native';

import ForecastContext from '../context'

// import { Container } from './styles';

const TodayContainer = props => {
  const context = useContext(ForecastContext)
  console.log('context: ', context)

  return <Text>Today</Text>;
}

export default TodayContainer;