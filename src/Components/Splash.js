import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//! import Colors
import {Colors} from './Constants';

//! Image
var spalsh = require('./Images/Splash.jpeg');

export class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  SwitchNavFun = async () => {
    let SwitchNav = await AsyncStorage.getItem('Switch');

    setTimeout(() => {
      if (SwitchNav == null || SwitchNav == undefined) {
        this.props.navigation.navigate('IntroSlider');
      } else {
        if (SwitchNav == 'Auth') {
          this.props.navigation.navigate('Auth');
        } else if (SwitchNav == 'Tabs') {
          this.props.navigation.navigate('Tabs');
        }
      }
    }, 2000);
  };

  componentDidMount() {
    this.SwitchNavFun();
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />

        <View
          style={{
            backgroundColor: Colors.backgroundColor2,
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}>
          <Image
            source={spalsh}
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </View>
      </>
    );
  }
}

export default Splash;
