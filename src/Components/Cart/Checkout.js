import * as React from 'react';
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
  TouchableNativeFeedback,
} from 'react-native';
import {Radio, Center, NativeBaseProvider, Checkbox} from 'native-base';

import {Colors} from '../Constants';

const {width, height} = Dimensions.get('window');

import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          selected: false,
          content: 'الدفع كاش عند الاستلام',
          color: 'green',
          value: 'cash',
        },
        {
          selected: false,
          content: 'الدفع ببطاقة الأتمان',
          color: 'green',
          value: 'visa',
        },
      ],
      address: '',
      addressError: '',
      phone: '',
      phoneError: '',

      checkAddress: 0,
      checkPhone: 0,

      radioValue: '',

      isFocused1: false,
      isFocused2: false,
    };
  }

  Confirm() {
    let errors = 0;

    if (this.state.address.trim() == '') {
      errors++;
      this.setState({addressError: 'يجب إدخال عنوان'});
    } else if (this.state.address.trim().length < 3) {
      errors++;
      this.setState({address: 'يجب أن يكون العنوان 3 أحرف أو أكثر'});
    } else {
      this.setState({addressError: ''});
    }

    if (this.state.phone == '') {
      errors++;
      this.setState({phoneError: 'يجب إدخال رقم الهاتف'});
    } else if (
      this.state.phone.length != 11 ||
      (!this.state.phone.startsWith('015') &&
        !this.state.phone.startsWith('010') &&
        !this.state.phone.startsWith('012') &&
        !this.state.phone.startsWith('011')) ||
      this.state.phone * 0 != 0
    ) {
      errors++;
      this.setState({phoneError: 'يجب إدخال رقم صحيح'});
    } else {
      this.setState({phoneError: ''});
    }

    if (this.state.radioValue == '') {
      errors++;
      alert('يجب اختيار طريقة الدفع!');
    }

    if (errors == 0) {
      alert('تم الطلب بنجاح');
    }
  }

  confirmAddress = address => {
    if (address.length >= 3) {
      this.setState({addressError: '', checkAddress: 1});
    } else {
      this.setState({checkAddress: 0});
    }
  };

  confirmPhone = phone => {
    if (
      phone * 0 == 0 &&
      phone.length == 11 &&
      (phone.startsWith('015') ||
        phone.startsWith('010') ||
        phone.startsWith('012') ||
        phone.startsWith('011'))
    ) {
      this.setState({phoneError: '', checkPhone: 1});
    } else {
      this.setState({phoneError: 'يجب إدخال رقم صحيح', checkPhone: 0});
    }
  };

  Change(index) {
    let list = this.state.list;
    if (list[index].selected == false) {
      for (let i = 0; i < list.length; i++) {
        list[i].selected = false;
        list[i].color = 'gray';
      }
      list[index].selected = true;
      list[index].color = 'green';
    } else {
      list[index].selected = false;
      list[index].color = 'gray';
    }
    this.setState({list});
  }

  handleFoucus1 = () => this.setState({isFocused1: true});
  handleBlur1 = () => this.setState({isFocused1: false});
  handleFoucus2 = () => this.setState({isFocused2: true});
  handleBlur2 = () => this.setState({isFocused2: false});

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: Colors.backgroundColor2,
          }}>
          <View
            style={{
              width: '100%',
              height: 70,
              backgroundColor: Colors.backgroundColor2,
              elevation: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: Colors.textColor,
                fontSize: height * 0.04,
                fontWeight: 'bold',
              }}>
              الدفع
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
                <AntDesign name="right" size={25} color={Colors.iconsColor1} />
              </View>
            </TouchableNativeFeedback>
          </View>

          <ScrollView>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: Colors.backgroundColor2,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 10,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    color: Colors.textColor,
                    fontSize: 20,
                  }}>
                  يرجي كتابة البيانات بالتفصيل و تأكد من صحتها :
                </Text>
              </View>

              <TextInput
                style={{
                  width: '85%',
                  height: 50,
                  marginTop: 10,
                  borderRadius: 10,
                  borderWidth:
                    this.state.isFocused1 || this.state.address.length
                      ? 1.5
                      : 1,
                  borderColor:
                    this.state.isFocused1 || this.state.address.length > 0
                      ? Colors.mainColor
                      : '#ccc',
                  fontSize: 16,
                  paddingLeft: 10,
                  color: Colors.textColor,
                }}
                placeholder="العنوان.."
                multiline
                placeholderTextColor="#999"
                value={this.state.address}
                onChangeText={value => {
                  this.setState({address: value});
                  this.confirmAddress(value.trim());
                }}
                onFocus={this.handleFoucus1}
                onBlur={this.handleBlur1}
                onEndEditing={this.handleBlur1}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: Colors.errorAndDeleteColor,
                  textAlign: 'center',
                  marginTop: 2,
                }}>
                {this.state.addressError}
              </Text>

              <TextInput
                style={{
                  width: '85%',
                  height: 50,
                  marginTop: 10,
                  borderRadius: 10,
                  borderWidth:
                    this.state.isFocused2 || this.state.phone.length ? 1.5 : 1,
                  borderColor:
                    this.state.isFocused2 || this.state.phone.length > 0
                      ? Colors.mainColor
                      : '#ccc',
                  fontSize: 16,
                  paddingLeft: 10,
                  color: Colors.textColor,
                }}
                placeholder="رقم الهاتف.."
                placeholderTextColor="#999"
                value={this.state.phone}
                onChangeText={value => {
                  this.setState({phone: value});
                  this.confirmPhone(value.trim());
                }}
                onFocus={this.handleFoucus2}
                onBlur={this.handleBlur2}
                onEndEditing={this.handleBlur2}
              />

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.errorAndDeleteColor,
                  textAlign: 'center',
                  marginTop: 2,
                }}>
                {this.state.phoneError}
              </Text>

              <View
                style={{
                  width: '100%',
                  height: 27,
                  paddingLeft: 10,
                  margin: 5,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: Colors.textColor,
                    fontSize: 22,
                  }}>
                  يرجي تحديد طريقة الدفع :
                </Text>
              </View>

              <View
                style={{
                  width: '100%',
                  height: 150,
                  paddingLeft: 10,
                }}>
                <Radio.Group
                  value={this.state.radioValue}
                  size="lg"
                  onChange={value => {
                    this.setState({radioValue: value});
                  }}>
                  {this.state.list.map((list, index) => (
                    <Radio
                      value={list.value}
                      colorScheme={list.color}
                      my={2}
                      key={index}>
                      {list.content}
                    </Radio>
                  ))}
                </Radio.Group>
              </View>

              <TouchableOpacity
                disabled={
                  this.state.checkAddress == 1 &&
                  this.state.checkPhone == 1 &&
                  this.state.radioValue != ''
                    ? false
                    : true
                }
                style={{
                  width: '85%',
                  backgroundColor:
                    this.state.checkAddress == 1 &&
                    this.state.checkPhone == 1 &&
                    this.state.radioValue != ''
                      ? Colors.mainColor
                      : '#888',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginBottom: 10,
                }}
                onPress={() => {
                  this.Confirm();
                }}>
                <Text
                  style={{
                    color: Colors.textColor2,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  تأكيد
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
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
