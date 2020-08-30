/* eslint-disable no-undef */
import React, { Component } from 'react';
// eslint-disable-next-line prettier/prettier
import { View } from 'react-native';

import HomeScreen from './Screens/HomeScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <HomeScreen />
      </View>
    );
  }
}
