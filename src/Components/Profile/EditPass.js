import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { Colors } from '../Constants';

export default class EditPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpass: '',
      newPass: '',
      confirm_pass: '',
    };
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
            height: '100%',
            width: '100%',
            backgroundColor: Colors.backgroundColor2,
          }}>
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
                تغيير كلمة المرور
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
                  <AntDesign
                    name="right"
                    size={25}
                    color={Colors.iconsColor1}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>


          </View>

          <View
            style={{
              alignItems: 'center',
              width: '100%',
              height: '100%',
              backgroundColor: Colors.backgroundColor2,
            }}>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                height: 250,
                //backgroundColor: '#f00',
                justifyContent: 'center',
              }}>
              <TextInput
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
                multiline
                placeholderTextColor={Colors.textColor}
                placeholder="كلمة المرور القديمة"
                value={this.state.oldpass}
                onChangeText={value => {
                  this.setState({
                    oldpass: value,
                  });
                }}
              />

              <TextInput
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
                multiline
                placeholder="كلمة المرور الجديدة"
                placeholderTextColor={Colors.textColor}
                value={this.state.newPass}
                onChangeText={value => {
                  this.setState({
                    newPass: value,
                  });
                }}
              />

              <TextInput
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
                multiline
                placeholder="تأكيد كلمة المرور"
                placeholderTextColor={Colors.textColor}
                value={this.state.confirm_pass}
                onChangeText={value => {
                  this.setState({
                    confirm_pass: value,
                  });
                }}
              />

              <Text
                style={{
                  color: '#f33',
                  marginTop: 5,
                }}>
                {this.state.newPass != this.state.confirm_pass
                  ? 'غير مطابقة لكلمة المرور'
                  : ''}
              </Text>
            </View>

            <View
              style={{
                // backgroundColor:"#ff0",
                width: '100%',
                height: 60,
                justifyContent: 'space-around',
                flexDirection: 'row',
                // alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.mainColor,
                  width: '35%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <Text
                  style={{
                    color: Colors.textColor2,
                    fontSize: 20,
                  }}>
                  حفظ
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#f00',
                  width: '35%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.props.navigation.navigate('Profile');
                }}>
                <Text
                  style={{
                    color: Colors.textColor2,
                    fontSize: 20,
                  }}>
                  الغاء
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={{
              width: "50%",
              height: 30,
              ظظbackgroundColor: '#ff0',
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center"
            }}
              onPress={() => { this.props.navigation.navigate('ForgetPass'); }}
            >
              <Text style={{ fontSize: 16, color: Colors.mainColor }}>هل نسيت كلمة المرور ؟ </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
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
