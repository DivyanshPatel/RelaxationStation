

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  TouchableOpacity,
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';

import QuoteScreen from './QuoteScreen' ; 

import StartScreen from './StartScreen';

const { quotes } = require('./Quotes.json');

const zenImage = require('./assets/zen.png');

export default class RelaxationStation extends Component {
  render() {

    const quote = quotes[1]

    return (
      

      <NavigationExperimental.Navigator
        initialRoute={{name: 'StartScreen'}}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'StartScreen':
              return <StartScreen onStartHandler={() => navigator.push({name: 'QuoteScreen'}) }/>
            case 'QuoteScreen':
              return <QuoteScreen text={quote.text} sourceText={quote.Source}/>
          }
        }}


      />

      
     
    );
  }
}



AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
