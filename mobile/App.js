import React from 'react';
import {StatusBar, YellowBox} from 'react-native';
import Routes from './src/routes'; 

YellowBox.ignoreWarnings(
  ['Unrecognized WebSocket']
); 

export default function App() {
  return (
    <>
    <Routes />
    <StatusBar barStyle="light-content"  backgroundColor = "#7D40E7"/> 
    </>
  );
}

