import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity 
} from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class Lauch extends Component {
  onGoHome(){
      Actions.Home
  }  
  render() {
    return (
      <ScrollView style={styles.LauchContainer}>
        <Image source={require('../../../assets/images/background-main.png')} style={styles.background} >
            <Image source={require('../../../assets/images/flower-top.png')} style={styles.headerFlowers} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/images/love-logo.png')} style={styles.logo} />
            </View>
            <Text style={styles.slogan} >Gift for love</Text>

            <TouchableOpacity style={styles.tapButton} onPress={Actions.home}  >
                   <Text style={styles.tapButtonText}>Hello</Text>
                   <Text style={styles.tapButtonText}>a Tap to give gift</Text>
            </TouchableOpacity>
            <View>
                <Text style={styles.textFooter}>
                    Make your love more happy
                </Text>
            </View>
        </Image>
    
        

      </ScrollView>
    );
  }
}
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    LauchContainer: {
        flex: 1,
        height: deviceHeight,
        resizeMode: 'cover',
        
    },
    headerFlowers: {
        height: 150, 
        width: deviceWidth,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width:249,
        height:187
    },
    slogan: {
        textAlign: 'center',
        paddingTop: 30,
        fontSize:30,
        color:'red',
        fontWeight:'bold'
    },
    tapButton: {
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        margin:50,
        marginTop:30,
        
    },
    tapButtonText: {
        color: 'red',
        fontSize:20,
        fontWeight:'bold'
    },
    textFooter: {
        textAlign: 'center',
        color: 'red',
        paddingTop: 50,
        fontWeight:'bold'
    }

})
