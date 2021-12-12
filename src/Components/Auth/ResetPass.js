import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Image,
  ImageBackground,
  AsyncStorage,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  model,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

import {FlatList} from 'react-navigation';

import Icons from 'react-native-vector-icons/FontAwesome5';

import Icon from 'react-native-vector-icons/AntDesign';

import {Colors} from '../Constants';

const {width, height} = Dimensions.get('window');

export default class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: true,
      secure: true,
      pass: '',
      eye2: true,
      secure2: true,
      pass2: '',

      //new
      isFocused: false,
      isFocused2: false,

      checkPass: 0,
      checkConfirmPass: 0,
    };
  }

  eye_fun() {
    this.setState({
      eye: !this.state.eye,
      secure: !this.state.secure,
    });
  }

  eye_fun2() {
    this.setState({
      eye2: !this.state.eye2,
      secure2: !this.state.secure2,
    });
  }

  confrim_fun() {
    let pass = this.state.pass.trim().toLowerCase();
    let pass2 = this.state.pass2.trim().toLowerCase();
    if (
      pass != pass2 ||
      (pass == '' && pass2 == '') ||
      (pass.length < 6 && pass.length < 6)
    ) {
      alert('برجاء ادخال كلمة المرور صحيحة ');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  // new
  handleFocus = () => this.setState({isFocused: true});

  handleBlur = () => this.setState({isFocused: false});

  handleFocus2 = () => this.setState({isFocused2: true});

  handleBlur2 = () => this.setState({isFocused2: false});

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
            كلمة مرور جديدة
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
        <View
          style={{
            backgroundColor: Colors.backgroundColor2,
            flex: 1,
            justifyContent: 'center',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingTop: 10}}>
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../Images/finish.png')}
                  style={{
                    width: 350,
                    height: 250,
                    marginRight: '3%',
                  }}
                />
              </View>
              <View
                style={{
                  width: '90%',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    marginLeft: '3%',
                  }}>
                  <View>
                    <Text style={styles.text_style}>إنشاء كلمة مرور جديدة</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        color: '#8a8a8a',
                        fontWeight: 'bold',
                        margin: 1,
                      }}>
                      يجب أن تكون كلمة مرورك الجديدة مختلفة عن
                    </Text>

                    <Text
                      style={{
                        fontSize: 16,
                        color: '#8a8a8a',
                        fontWeight: 'bold',
                      }}>
                      كلمة المرور المستخدمة سابقا
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    marginLeft: '3%',
                    marginTop: '5%',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.textColor,
                      marginTop: '2%',
                      fontWeight: 'bold',
                    }}>
                    كلمة المرور الجديدة
                  </Text>
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
                    borderColor: Colors.mainColor,
                    borderWidth: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // new
                    borderWidth: 1.5,
                    borderColor: this.state.isFocused
                      ? Colors.mainColor
                      : '#eee' && this.state.pass !== ''
                      ? Colors.mainColor
                      : '#eee',
                  }}>
                  <TextInput
                    placeholder="ادخال كلمة المرور"
                    placeholderTextColor="#756e6e"
                    secureTextEntry={this.state.secure}
                    onChangeText={value => {
                      this.setState({pass: value});
                      if (value == '') {
                        this.setState({checkPass: 0});
                      } else {
                        this.setState({checkPass: 1});
                      }
                    }}
                    // new
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={{
                      width: '82%',
                      fontSize: 16,
                      marginLeft: '4%',
                      textAlign: 'right',
                      color: Colors.textColor,
                      borderRadius: 20,
                      margin: 0,
                      padding: 0,
                    }}
                  />

                  <TouchableOpacity
                    onPress={() => this.eye_fun()}
                    style={{margin: 5}}>
                    <Icons
                      name={this.state.eye ? 'eye-slash' : 'eye'}
                      size={22}
                      style={{color: Colors.mainColor}}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '85%',
                    alignSelf: 'center',
                    marginLeft: '3%',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: Colors.textColor,
                      marginTop: '2%',
                      fontWeight: 'bold',
                    }}>
                    تأكيد كلمة المرور الجديدة
                  </Text>
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
                    borderColor: Colors.mainColor,
                    borderWidth: 2,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // new
                    borderWidth: 1.5,
                    borderColor: this.state.isFocused2
                      ? Colors.mainColor
                      : '#eee' && this.state.pass2 !== ''
                      ? Colors.mainColor
                      : '#eee',
                  }}>
                  <TextInput
                    placeholder="تأكيد كلمة  المرور"
                    placeholderTextColor="#756e6e"
                    secureTextEntry={this.state.secure2}
                    onChangeText={value2 => {
                      this.setState({pass2: value2});
                      if (value2 == '') {
                        this.setState({checkConfirmPass: 0});
                      } else {
                        this.setState({checkConfirmPass: 1});
                      }
                    }}
                    // new
                    onFocus={this.handleFocus2}
                    onBlur={this.handleBlur2}
                    style={{
                      width: '82%',
                      fontSize: 16,
                      color: Colors.textColor,
                      marginLeft: '4%',
                      textAlign: 'right',
                      borderRadius: 20,
                      margin: 0,
                      padding: 0,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => this.eye_fun2()}
                    style={{
                      margin: 5,
                    }}>
                    <Icons
                      name={this.state.eye2 ? 'eye-slash' : 'eye'}
                      size={22}
                      style={{color: Colors.mainColor}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  width: '90%',
                  marginTop: 3,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  disabled={
                    this.state.checkPass == 0 ||
                    this.state.checkConfirmPass == 0
                      ? true
                      : false
                  }
                  onPress={() => this.confrim_fun()}
                  style={{
                    width: '90%',
                    margin: '5%',
                    height: 50,
                    backgroundColor:
                      this.state.checkPass == 0 ||
                      this.state.checkConfirmPass == 0
                        ? '#888'
                        : Colors.mainColor,
                    alignSelf: 'center',
                    borderRadius: 30,
                    elevation: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: Colors.backgroundColor2,
                      fontSize: 24,
                      letterSpacing: 0.5,
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
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
    fontSize: 25,
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
