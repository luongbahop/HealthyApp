import React, { Component } from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import configStore from './src/store/configStore'

import App from './src/app';
const store = configStore()

export default class HealthyApp extends Component {
  render() {
    return (
      <Provider store= {store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('HealthyApp', () => HealthyApp);