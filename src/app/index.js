import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, NativeModules } from 'react-native';
import * as Location from 'expo-location';

import getCurrentForecast from '../service/current'
import getWeeklyForecast from '../service/weekly'
import ForecastContext from '../components/context';

import Card from '../components/Card';
import Header from '../components/Header';
import TodayContainer from '../components/TodayContainer';

const { StatusBarManager } = NativeModules;

export default function App() {
  const [updateForecast, setUpdateForecast] = useState(false)
  const [currentForecast, setCurrentForecast] = useState(null)
  const [weeklyForecast, setWeeklyForecast] = useState(null)

  const handleForecast = () => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      status !== 'granted'
        && console.error('Permission to access location was denied');

      let location = await Location.getCurrentPositionAsync({});
      
      getCurrentForecast(location.coords)
        .then(res => res.json().then(text => setCurrentForecast(text)))

      getWeeklyForecast(location.coords)
        .then(res => res.json().then(text => setWeeklyForecast(text)))
    })();
  }

  useEffect(() => {
    handleForecast()
  }, []);

  useEffect(() => {
    updateForecast
    && setUpdateForecast(false)
    && handleForecast()
  }, [updateForecast])
  
  return <ForecastContext.Provider value={{ currentForecast, weeklyForecast }}>
    <SafeAreaView style={styles.app}>
      <StatusBar backgroundColor='white'/>
      <Header handleUpdate={bool => setUpdateForecast(bool)}/>
      <TodayContainer />
      <Card />
    </SafeAreaView>
  </ForecastContext.Provider>
}

const styles = StyleSheet.create({
  app: {
    flexGrow: 1,
    justifyContent: 'center',
    fontFamily: 'Sans-serif',
    alignItems: 'center',
    marginTop: StatusBarManager.HEIGHT
  },
});
