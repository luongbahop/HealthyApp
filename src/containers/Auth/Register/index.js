import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View style={styles.LoginContainer}>
        <Text >
          Welcome to about!
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    LoginContainer: {
        backgroundColor: 'red'
    }
})
