import * as React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  FlatList,
  TextInput,
  StatusBar,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from '../Constants';
// ***************************************************************************************************
export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secure: true,
      CheckBox: false,
      user_name: '',
      error_name: '',
      user_email: '',
      error_email: '',
      user_password: '',
      error_password: '',

      //new
      isFocused: false,
      isFocused2: false,
      isFocused3: false,

      checkName: 0,
      checkEmail: 0,
      checkPass: 0,
    };
  }

  // email validation
  validate = email => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({user_email: email});
      return false;
    } else {
      this.setState({user_email: email});
      return true;
    }
  };

  async SIGN_UP() {
    let name = this.state.user_name.trim();
    let email = this.state.user_email.trim();
    let Password = this.state.user_password;
    let name_error = '';
    let email_error = '';
    let password_error = '';
    let numOfErrors = 0;

    if (name == '') {
      name_error = 'من فضلك ادخل الاسم';
      numOfErrors++;
    } else if (name.trim().length < 3) {
      name_error = 'الاسم غير صحيح';
      numOfErrors++;
    } else {
      name_error = '';
    }

    if (email == '') {
      email_error = 'من فضلك ادخل البريد الالكترونى';
      numOfErrors++;
    } else if (!this.validate(email)) {
      email_error = 'البريد الالكترونى غير صحيح';
      numOfErrors++;
    } else {
      email_error = '';
    }

    if (Password == '') {
      password_error = 'من فضلك ادخل كلمه المرور';
      numOfErrors++;
    } else if (Password.length < 6) {
      password_error = ' كلمة المرور غير صحيحه';
      numOfErrors++;
    } else {
      password_error = '';
    }

    if (numOfErrors == 0) {
      this.props.navigation.navigate('Login');
    } else {
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }

    this.setState({
      error_name: name_error,
      error_email: email_error,
      error_password: password_error,
    });
  }

  change_secure() {
    let securety = this.state.secure;
    this.setState({secure: !securety});
  }

  change_checkbox() {
    let CheckBox = this.state.CheckBox;
    this.setState({CheckBox: !CheckBox});
  }

  // new
  handleFocus = () => this.setState({isFocused: true});

  handleBlur = () => this.setState({isFocused: false});

  handleFocus2 = () => this.setState({isFocused2: true});

  handleBlur2 = () => this.setState({isFocused2: false});

  handleFocus3 = () => this.setState({isFocused3: true});

  handleBlur3 = () => this.setState({isFocused3: false});

  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.mainColor}
        />
        <View style={styles.top}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderBottomRightRadius: 30,
              backgroundColor: Colors.mainColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: Colors.textColor2,
              }}>
              freshPick
            </Text>
            <Text style={{color: Colors.textColor2}}>only the fresh</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 30,
              backgroundColor: Colors.backgroundColor2,
              overflow: 'hidden',
              elevation: 2,
            }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
              <View style={{flex: 1, alignItems: 'center', paddingBottom: 20}}>
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    padding: 10,
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: '600',
                        color: Colors.textColor,
                        marginLeft: 25,
                        textAlign: 'left',
                      }}>
                      إنشاء حساب
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '95%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '90%',
                      height: 50,
                      backgroundColor: '#eeee',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 3,
                      borderRadius: 50,
                      // new
                      borderWidth: 1.5,
                      borderColor: this.state.isFocused
                        ? Colors.mainColor
                        : '#eee' && this.state.user_name !== ''
                        ? Colors.mainColor
                        : '#eee',
                    }}>
                    <View
                      style={{
                        width: '15%',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="user-alt"
                        size={17}
                        style={{color: '#aeaeae'}}
                      />
                    </View>

                    <TextInput
                      placeholder="اسم المستخدم"
                      color={Colors.textColor}
                      placeholderTextColor="#756e6e"
                      value={this.state.user_name}
                      onChangeText={value => {
                        this.setState({user_name: value});
                        setTimeout(() => {
                          if (value == '') {
                            this.setState({checkName: 0});
                          } else {
                            this.setState({checkName: 1});
                          }
                        }, 100);
                        if (value.length >= 3) {
                          this.setState({error_name: ''});
                        }
                      }}
                      // new
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                      style={{
                        width: '80%',
                        height: 50,
                        color: Colors.textColor,
                        fontWeight: 'bold',
                      }}></TextInput>
                  </View>

                  <Text style={{color: Colors.errorAndDeleteColor}}>
                    {this.state.error_name}
                  </Text>

                  <View
                    style={{
                      width: '90%',
                      height: 50,
                      backgroundColor: '#eeee',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 3,
                      borderRadius: 50,
                      // new
                      borderWidth: 1.5,
                      borderColor: this.state.isFocused2
                        ? Colors.mainColor
                        : '#eee' && this.state.user_email !== ''
                        ? Colors.mainColor
                        : '#eee',
                    }}>
                    <View
                      style={{
                        width: '15%',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon2
                        name="email"
                        size={17}
                        style={{color: '#aeaeae', marginLeft: 0}}
                      />
                    </View>

                    <TextInput
                      placeholder=" البريد الالكترونى"
                      color={Colors.textColor}
                      placeholderTextColor="#756e6e"
                      keyboardType="email-address"
                      value={this.state.user_email}
                      onChangeText={value => {
                        this.setState({user_email: value});
                        setTimeout(() => {
                          if (value == '') {
                            this.setState({checkEmail: 0});
                          } else {
                            this.setState({checkEmail: 1});
                          }
                        }, 100);
                        if (this.validate(value)) {
                          this.setState({error_name: ''});
                        }
                      }}
                      // new
                      onFocus={this.handleFocus2}
                      onBlur={this.handleBlur2}
                      style={{
                        width: '80%',
                        height: 50,
                        color: Colors.textColor,
                        fontWeight: 'bold',
                      }}></TextInput>
                  </View>

                  <Text style={{color: Colors.errorAndDeleteColor}}>
                    {this.state.error_email}
                  </Text>

                  <View
                    style={{
                      width: '90%',
                      height: 50,
                      backgroundColor: '#eeee',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 3,
                      borderColor: Colors.mainColor,
                      borderWidth: 2,
                      borderRadius: 50,
                      // new
                      borderWidth: 1.5,
                      borderColor: this.state.isFocused3
                        ? Colors.mainColor
                        : '#eee' && this.state.user_password !== ''
                        ? Colors.mainColor
                        : '#eee',
                    }}>
                    <View
                      style={{
                        width: '18%',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon3
                        name="locked"
                        size={17}
                        style={{color: '#aeaeae'}}
                      />
                    </View>

                    <TextInput
                      placeholder="كلمه المرور"
                      secureTextEntry={this.state.secure}
                      placeholderTextColor="#756e6e"
                      value={this.state.user_password}
                      onChangeText={value => {
                        this.setState({user_password: value});
                        setTimeout(() => {
                          if (value == '') {
                            this.setState({checkPass: 0});
                          } else {
                            this.setState({checkPass: 1});
                          }
                        }, 100);
                        if (value.length >= 6) {
                          this.setState({error_password: ''});
                        }
                      }}
                      // new
                      onFocus={this.handleFocus3}
                      onBlur={this.handleBlur3}
                      style={{
                        width: '65%',
                        height: 50,
                        color: Colors.textColor,
                        fontWeight: 'bold',
                        textAlign: 'right',
                        marginLeft: 0,
                      }}></TextInput>

                    <TouchableOpacity
                      onPress={() => {
                        this.change_secure();
                      }}
                      style={{
                        width: '15%',
                        height: 50,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name={this.state.secure ? 'eye-slash' : 'eye'}
                        size={18}
                        color={
                          this.state.secure
                            ? Colors.mainColor
                            : Colors.mainColor
                        }
                        style={{marginLeft: 10}}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={{color: Colors.errorAndDeleteColor}}>
                    {this.state.error_password}
                  </Text>

                  <TouchableOpacity
                    disabled={
                      this.state.checkName == 1 &&
                      this.state.checkEmail == 1 &&
                      this.state.checkPass == 1
                        ? false
                        : true
                    }
                    onPress={() => {
                      this.SIGN_UP();
                    }}
                    style={{
                      width: '90%',
                      height: 50,
                      backgroundColor:
                        this.state.checkName == 1 &&
                        this.state.checkEmail == 1 &&
                        this.state.checkPass == 1
                          ? Colors.mainColor
                          : '#888',
                      borderRadius: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: Colors.textColor2,
                      }}>
                      انشاء حساب
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '95%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '90%',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        width: '90%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.change_checkbox();
                        }}
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Icon2
                          name={
                            this.state.CheckBox
                              ? 'checkbox-marked'
                              : 'checkbox-blank-outline'
                          }
                          size={20}
                          style={{color: Colors.mainColor}}
                        />
                      </TouchableOpacity>
                      <View style={{paddingVertical: 10}}>
                        <Text style={{fontWeight: 'bold', color: '#bab8b8'}}>
                          أوافق على جميع{' '}
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: Colors.mainColor,
                            }}>
                            الشروط{' '}
                          </Text>
                          و{' '}
                          <Text
                            style={{
                              fontWeight: 'bold',
                              color: Colors.mainColor,
                            }}>
                            الاحكام
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      width: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#bab8b8', fontWeight: 'bold'}}>
                      هل لديك حساب؟
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate('Login');
                      }}
                      style={{
                        width: '95%',
                        height: 50,
                        backgroundColor: Colors.backgroundColor2,
                        borderRadius: 100,
                        marginTop: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: Colors.mainColor,
                        borderWidth: 2,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: Colors.mainColor,
                        }}>
                        تسجيل الدخول{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.mainColor,
  },
  top: {
    width: '100%',
    backgroundColor: Colors.backgroundColor2,
    height: 200,
  },

});


