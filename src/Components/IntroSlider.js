import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  Dimensions,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Swiper from 'react-native-web-swiper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');

import {Colors} from './Constants';

export class IntroSlider extends Component {
  onDone = async () => {
    await AsyncStorage.setItem('Switch', 'Auth');
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={Colors.backgroundColor}
          barStyle="dark-content"
        />

        <View
          style={{
            backgroundColor: Colors.backgroundColor,
            flex: 1,
          }}>
          <View style={styles.container}>
            <Swiper
              controlsProps={{
                nextTitleStyle: {
                  color: Colors.backgroundColor,
                },
                prevTitleStyle: {
                  color: Colors.backgroundColor,
                },
                dotActiveStyle: {
                  backgroundColor: Colors.mainColor,
                },
              }}>
              <View style={[styles.slideContainer, styles.slide1]}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: Colors.mainColor,
                    textAlign: 'center',
                    marginTop: width * 0.07,
                  }}>
                  F r e s h P i c k
                </Text>
                <Image
                  source={require('./Images/1.png')}
                  resizeMode="center"
                  style={{
                    width: width * 1,
                    height: height * 0.5,
                  }}
                />
                <Text
                  style={{
                    color: '#505050',
                    fontWeight: 'bold',
                    fontSize: 23,
                  }}>
                  مرحبا بك في Fresh Pick !
                </Text>
                <Text
                  style={{
                    color: '#505050',
                    fontWeight: 'bold',
                    fontSize: 23,
                    marginTop: width * 0.01,
                  }}>
                  {' '}
                  أصناف بقالة جيدة و متنوعة
                </Text>
              </View>

              <View style={[styles.slideContainer, styles.slide1]}>
                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: Colors.mainColor,
                    textAlign: 'center',
                    marginTop: width * 0.07,
                  }}>
                  F r e s h P i c k
                </Text>
                <Image
                  source={require('./Images/2.png')}
                  resizeMode="center"
                  style={{
                    width: width * 1,
                    height: height * 0.5,
                  }}
                />
                <Text
                  style={{
                    color: '#505050',
                    fontWeight: 'bold',
                    fontSize: 23,
                  }}>
                  تريد شراء احتياجاتك اليومية !
                </Text>
                {/* 
<Text style={{
            color:"#999",
            fontWeight:"normal",
            fontSize:18,
            marginTop: width*0.03
        }}>هنوصلك في اي مكان</Text> */}

                <TouchableOpacity
                  style={{
                    width: '75%',
                    height: 60,
                    borderRadius: 20,
                    backgroundColor: Colors.mainColor,
                    marginTop: width * 0.05,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.onDone();
                  }}>
                  <Text
                    style={{
                      color: Colors.backgroundColor,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    أبدأ
                  </Text>
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
  },
  slide1: {
    backgroundColor: Colors.backgroundColor,
  },
  slide2: {
    backgroundColor: Colors.backgroundColor,
  },
});

export default IntroSlider;
