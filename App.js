/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import Splash from './src/screens/splashScreen';
import {createAppContainer, createStackNavigator} from 'react-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This Home Page.
        </Text>
      </View>
    );
  }
}


type Props = {};
class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{introduction}</Text>
      //   <Greeting name='I Made' />
      //   <Greeting name='Yoga' />
      //   <Greeting name='Aryasa' />
      // </View>
      <Splash></Splash>
    );
  }
}

const AppContainer = createStackNavigator ({
  Home: {
    screen: HomeScreen
  }
});

export default createAppContainer (AppContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  greeting: {
    fontWeight: '600',
    fontFamily: 'Times new roman',
    fontSize: 20,
  }
});
