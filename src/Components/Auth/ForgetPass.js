import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  model,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from '../Constants';

export default class ForgetPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value_email: '',
      emailError: '',
      //new
      isFocused: false,

      checkEmail: 0,
    };
  }

  // email validation
  validate = email => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({user_name: email});
      return false;
    } else {
      this.setState({user_name: email});
      return true;
    }
  };

  fun_email() {
    let email = this.state.input_value_email.trim();
    let yah = '@yahoo.com';
    let ge = '@gmail.com';
    let email2 = this.state.emailError;

    if (this.validate(email)) {
      this.props.navigation.navigate('EnterCode', {
        input_value_email: this.state.input_value_email,
      });
      this.setState({input_value_email: ''});
    } else {
      email2 = 'برجاء ادخال البريد الالكتروني الصحيح ';
    }

    this.setState({emailError: email2});
  }

  // new
  handleFocus = () => this.setState({isFocused: true});

  handleBlur = () => this.setState({isFocused: false});

  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />

        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: Colors.backgroundColor2,
            flexDirection: 'row',
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{fontSize: 30, fontWeight: 'bold', color: Colors.textColor}}>
            ادخل الايميل
          </Text>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              Colors.rippleColor,
              false,
              22.5,
            )}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <View style={styles.backButton}>
              <Icon name="right" size={25} color={Colors.iconsColor1} />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={{flex: 1, backgroundColor: Colors.backgroundColor2}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
                backgroundColor: Colors.backgroundColor2,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../Images/message1.png')}
                  style={{
                    width: 400,
                    height: 250,
                    marginRight: '3%',
                  }}
                />
              </View>
            </View>
            <View
              style={{
                width: '90%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
              <View>
                <View style={{margin: '2%'}}>
                  <Text style={styles.text_style}>هل نسيت كلمة المرور</Text>
                </View>
                <View style={{margin: '2%'}}>
                  <Text style={{fontSize: 18}}>
                    تعليمات إعادة تعيين كلمة المرور أدخل بريدك الإلكتروني المسجل
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: '90%',
                  backgroundColor: '#eeee',
                  height: 50,
                  borderRadius: 50,
                  alignItems: 'center',
                  padding: 3,
                  marginTop: 10,
                  alignSelf: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  //new
                  borderWidth: 1.5,
                  borderColor: this.state.isFocused
                    ? Colors.mainColor
                    : '#eee' && this.state.input_value_email !== ''
                    ? Colors.mainColor
                    : '#eee',
                }}>
                <TextInput
                  placeholder="  أدخل البريد الإلكتروني   "
                  placeholderTextColor="#756e6e"
                  style={{
                    width: '85%',
                    fontSize: 16,
                    color: Colors.textColor,
                    fontWeight: '500',
                    borderRadius: 20,
                    margin: 0,
                    padding: 0,
                    paddingHorizontal: 5,
                  }}
                  textAlignVertical="center"
                  value={this.state.input_value_email}
                  onChangeText={value => {
                    this.setState({input_value_email: value});
                    if (value == '') {
                      this.setState({checkEmail: 0});
                    } else {
                      this.setState({checkEmail: 1});
                    }

                    if (this.validate(value)) {
                      this.setState({emailError: ''});
                    }
                  }}
                  //new
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />

                <Icon
                  name="mail"
                  size={22}
                  style={{color: '#aeaeae', marginRight: '3%'}}
                />
              </View>

              <Text style={{color: 'red', fontSize: 16}}>
                {this.state.emailError}
              </Text>

              <TouchableOpacity
                disabled={this.state.checkEmail == 0 ? true : false}
                onPress={() => this.fun_email()}
                style={{
                  width: '90%',
                  margin: '3%',
                  height: 50,
                  backgroundColor:
                    this.state.checkEmail == 0 ? '#888' : Colors.mainColor,
                  alignSelf: 'center',
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    // padding: 12,
                    color: Colors.textColor2,
                    fontSize: 24,
                    letterSpacing: 0.5,
                  }}>
                  إرسال
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  text_style: {
    fontWeight: 'bold',
    letterSpacing: 0.5,

    fontSize: 27,
  },
  backButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    position: 'absolute',
    left: 5,
  },
});
