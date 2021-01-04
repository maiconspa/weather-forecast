import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

import getCurrentForecast from './service/current'
import getWeeklyForecast from './service/weekly'
import ForecastContext from './components/context';

import Card from './components/Card';
import Header from './components/Header';
import TodayContainer from './components/TodayContainer';

export default function App() {
  const [location, setLocation] = useState('London')
  const [currentForecast, setCurrentForecast] = useState(null)
  const [weeklyForecast, setWeeklyForecast] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      getCurrentForecast(location.coords)
      .then(res => res.json().then(text => setCurrentForecast(text)))

      getWeeklyForecast(location.coords)
      .then(res => res.json().then(text => setWeeklyForecast(text)))
    })();
  }, []);

  useEffect(() => {
    console.log('current: ', currentForecast)
  }, [currentForecast])
  useEffect(() => {
    console.log('weekly: ', weeklyForecast)
  }, [weeklyForecast])

  return (
    <ForecastContext.Provider value={{currentForecast, weeklyForecast}}>
      <View style={styles.container}>
        <Header />
        <TodayContainer/>
        <Card/>
      </View>
    </ForecastContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
