import { useEffect, useRef } from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import React from 'react';
import { Routes } from './src/routes';

import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import './src/services/notificationsConfigs';



export default function App() {
  const getNotificationsListener = useRef<Subscription>()
  const responseNotificationsListener = useRef<Subscription>()

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  useEffect(() => {
    getPushNotificationToken();
  }, [])

  useEffect(() => {
    getNotificationsListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log()
    });

    getNotificationsListener.current = Notifications.addNotificationResponseReceivedListener(notification => {
      console.log()
    });

    return () => {
      if(getNotificationsListener.current && responseNotificationsListener.current) {
        Notifications.removeNotificationSubscription(getNotificationsListener.current)
        Notifications.removeNotificationSubscription(responseNotificationsListener.current)
      }
    }
  },[])

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
