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

// import Header from "./Header"

import {Colors} from '../Constants';

const {width, height} = Dimensions.get('window');

export default class EnterCodeForChangeEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.getParam('input_value_email'),
      code: '',
      code2: '',
      con: '',
      code_error:""
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


  confirm(){
    let code2=this.state.code2
    if(code2==""){
     this.setState({code_error:'يرجاء ادخال كود التأكيد'})
    }else{
      this.setState({code_error:''})
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
           width:'100%',
           height:'100%',
            justifyContent: 'center',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <View
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
            </View> */}

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
            {/* <CodeInput
                        ref="codeInputRef1"
                        secureTextEntry
                        className={'border-b'}
                        space={5}
                        size={30}
                        inputPosition='left'
                        // onFulfill={(code) => this._onFulfill(code)}
                    />

                    <CodeInput
                        ref="codeInputRef2"
                        secureTextEntry
                        // compareWithCode='AsDW2'
                        activeColor='#ccc'
                        inactiveColor={Colors.textColor}
                        autoFocus={false}
                        ignoreCase={true}
                        inputPosition='center'
                        size={50}
                        // onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
                        containerStyle={{ marginTop: 30 , }}
                        codeInputStyle={{ borderWidth: 3  }}
                    />

                    <CodeInput
                        ref="codeInputRef2"
                        keyboardType="numeric"
                        codeLength={5}
                        className='border-circle'
                        // compareWithCode='12345'
                        autoFocus={false}
                        codeInputStyle={{ fontWeight: '800' }}
                        // onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
                    />
 */}

            {/* <View
              style={{
                width: '60%',
                alignItems: 'center',
                borderRadius: 5,
                alignSelf: 'center',
                backgroundColor: '#ccc',
              }}> */}
              <TextInput
                maxLength={6}
                placeholder="الكود.."
                placeholderTextColor="#333"
                value_code={this.state.code2}
                onChangeText={value_code => {
                  this.setState({code2: value_code});
                }}
                style={{
                  width: '85%',
                    height: 50,
                    borderRadius: 10,
                    borderColor: Colors.mainColor,
                    borderWidth: 1,
                    backgroundColor: Colors.backgroundColor2,
                    color: Colors.textColor,
                    fontSize: 20,
                    paddingHorizontal: 10,
                    marginTop: 15,
                    alignSelf:"center",
                    letterSpacing:10,
                    textAlign:"center"
                }}
              />
            {/* </View> */}

<Text style={{fontSize:16 , color:"#f00" , textAlign:"center"}}>{this.state.code_error}</Text>
            <View
              style={{
                //  backgroundColor:"#ff0",
                width: '100%',
                height: 100,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#999",
                  width: '35%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => this.random_fun()}>
                <Text
                  style={{
                    color: Colors.textColor2,
                    fontSize: 20,
                  }}>
                اعادة ارسال
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.mainColor,
                  width: '35%',
                  height: '50%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}
                onPress={() => {
                 this.confirm()
                }}>
                <Text
                  style={{
                    color: Colors.textColor2,
                    fontSize: 20,
                  }}>
               تأكيد
                </Text>
              </TouchableOpacity>
            </View>



            {/* <View
              style={{
                width: '100%',
                alignItems: 'center',
                alignSelf: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('EditEmail')}
                style={{
                  width: '40%',
                  margin: '5%',
                  // shadowColor: Colors.textColor,
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
                  تأكيد
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.random_fun()}
                style={{
                  width: '40%',
                  margin: '5%',
                  // shadowColor: Colors.textColor,
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
                  إعادة إرسال
                </Text>
              </TouchableOpacity>
            </View> */}
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
