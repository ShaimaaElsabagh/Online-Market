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

export default class EditEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value_email: '',
      emailError: '',
      //new
      isFocused: false,
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
      email2 = '';
      alert("سيتم ارسال كود التأكيد علي البريد الالكتروني الخاص بك")
      this.props.navigation.navigate('EnterCodeForChangeEmail', {
        input_value_email: this.state.input_value_email,
      });
      this.setState({input_value_email: ''});
    } else {
      email2 = 'برجاء ادخال البريد الالكتروني الصحيح';
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
              // backgroundColor: "#f0f",
              flexDirection: 'row',
              // borderBottomColor: '#ccc',
              // borderBottomWidth: 0.5,
              elevation: 2,
              backgroundColor: Colors.backgroundColor2,
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                //backgroundColor: '#0ff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.textColor,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                تغيير البريد الالكتروني
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
                  <Icon
                    name="right"
                    size={25}
                    color={Colors.iconsColor1}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
</View>



        <View style={{width:"100%", height:'100%' ,  backgroundColor: Colors.backgroundColor2}}>
          <ScrollView showsVerticalScrollIndicator={false}>
      
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
              }}>
                <TextInput
                  placeholder="  أدخل البريد الإلكتروني   "
                  placeholderTextColor="#756e6e"
                  style={{
                    width: '85%',
                    height: 50,
                    borderRadius: 10,
                    borderColor: Colors.mainColor,
                    borderWidth: 1,
                    backgroundColor: Colors.backgroundColor2,
                    color: Colors.textColor,
                    fontSize: 16,
                    paddingHorizontal: 10,
                    marginTop: 15,
                  }}
                  value={this.state.input_value_email}
                  onChangeText={value => {
                    this.setState({input_value_email: value});
                    if (this.validate(value)) {
                      this.setState({emailError: ''});
                    }
                  }}
                  //new
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />

               

              <Text style={{color: 'red', fontSize: 16}}>
                {this.state.emailError}
              </Text>

              <TouchableOpacity
                onPress={() => this.fun_email()}
                style={{
                  width: '90%',
                  margin: '3%',

                  backgroundColor: Colors.mainColor,
                  alignSelf: 'center',
                  borderRadius: 30,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 12,
                    color: Colors.textColor2,
                    fontSize: 24,
                    letterSpacing: 0.5,
                  }}>
                  إرسال{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </>
    )
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
