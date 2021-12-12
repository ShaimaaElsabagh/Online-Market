import * as React from 'react';
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
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {FlatList} from 'react-navigation';

import {Colors} from '../Constants';

const {width, height} = Dimensions.get('window');

export default class EnterCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.getParam('input_value_email'),
      code: '',
      code2: '',
      con: '',
    };
  }

  random_fun() {
    let con = this.state.con;
    let code = this.state.code;
    let arr = 'ABCDEFGHIJKLMNOPQRSTVWXYZ123456789';
    for (let i = 0; i < 6; i++) {
      code += arr.charAt(Math.floor(Math.random() * arr.length));
    }
    con == code;
    alert(code);
  }



  Confirm(){
    if (this.state.code2 !=''){
      this.props.navigation.navigate('ResetPass') 
    }else{
      alert("من فضلك اكتب الكود")
    }
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
            flex: 1,
            justifyContent: 'center',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: height * 0.1,
              }}>
              <Image
                source={require('../Images/sendcode.png')}
                style={{
                  width: 400,
                  height: 250,
                  marginRight: '3%',
                  marginTop: '2%',
                }}
              />
            </View>

            <View style={{margin: '5%'}}>
              <View style={{margin: '2%'}}>
                <Text style={styles.text_style}>
                  قم بتأكيد بريدك الألكتروني
                </Text>
              </View>
              <View style={{margin: '2%'}}>
                <Text style={{fontSize: 18}}>
                  الرجاء إدخال الرمز المكون من 6 أرقام المرسل إلى
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'left',
                    color: Colors.mainColor,
                    fontWeight: '700',
                  }}>
                  {this.state.email}
                </Text>
              </View>
            </View>
            

            <View
              style={{
                width: '60%',
                alignItems: 'center',
                borderRadius: 5,
                alignSelf: 'center',
                backgroundColor: '#ccc',
              }}>
              <TextInput
                maxLength={6}
                value_code={this.state.code2}
                onChangeText={value_code => {
                  this.setState({code2: value_code});
                }}
                style={{
                  width: '100%',
                  height: 55,
                  width: '90%',
                  fontSize: 25,
                  letterSpacing: 10,
                  color: Colors.textColor,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}
              />
            </View>

            <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => 
                  
                  this.Confirm()
                }
                style={{
                  width: '40%',
                  margin: '5%',
                  backgroundColor: Colors.mainColor,
                  alignSelf: 'center',
                  borderRadius: 30,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 8,
                    color: Colors.textColor2,
                    fontSize: 24,
                    letterSpacing: 0.5,
                  }}>
                  تأكيد
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.random_fun()}
                style={{
                  width: '40%',
                  margin: '5%',
                  backgroundColor: Colors.mainColor,
                  alignSelf: 'center',
                  borderRadius: 30,
                  elevation: 3,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: 8,
                    color: Colors.textColor2,
                    fontSize: 24,
                    letterSpacing: 0.5,
                  }}>
                  إعادة إرسال
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
});
