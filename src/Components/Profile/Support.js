import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  StatusBar,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';

import {NativeBaseProvider, Checkbox} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome5';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../Constants';

class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          checked: false,
          color: 'gray',
          content: 'مشاكل في الدفع',
        },
        {
          checked: false,
          color: 'gray',
          content: 'مشاكل في التوصيل',
        },
        {
          checked: false,
          color: 'gray',
          content: 'مشاكل في الاستلام',
        },
        {
          checked: false,
          color: 'gray',
          content: 'مشاكل في الدفع',
        },
      ],
    };
  }

  Change(index) {
    let list = this.state.list;
    if (list[index].checked == false) {
      list[index].checked = true;
      list[index].color = 'green';
    } else {
      list[index].checked = false;
      list[index].color = 'gray';
    }
    this.setState({list});
  }

  render() {
    return (
      <NativeBaseProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            // alignItems:"center"
          }}>
          <View
            style={{
              width: '100%',
              height: 70,
              // backgroundColor: "#f0f",

              // borderBottomColor: '#ccc',
              // borderBottomWidth: 0.5,
              elevation: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.backgroundColor2,
            }}>
            <Text
              style={{
                color: Colors.textColor,
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              الدعم الفني
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

          <View
            style={{
              flex: 1,
              backgroundColor: Colors.backgroundColor2,
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: '90%',
                  alignItems: 'flex-start',
                  marginVertical: 20,
                  // paddingLeft: 10,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 20,
                  }}>
                  هل تواجه اي من هذه المشاكل؟
                </Text>
              </View>

              {this.state.list.map((list, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    // backgroundColor: '#f00',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                  }}>
                  <Checkbox
                    isChecked={list.checked}
                    colorScheme={list.color}
                    onChange={() => {
                      this.Change(index);
                    }}
                    value={list.content}>
                    {list.content}
                  </Checkbox>

                  {/* <Text
                  style={{
                    color: '#333',
                    paddingRight: 10,
                    fontSize: 18,
                  }}>
                  {list.content}
                </Text> */}
                </View>
              ))}

              <TextInput
                style={{
                  width: '100%',
                  color: '#333',
                  padding: 15,
                  // backgroundColor: '#f00',
                  fontSize: 17,
                  height: 200,
                  borderRadius: 10,
                  borderColor: '#333',
                  borderWidth: 1,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: 20,
                }}
                placeholder="يمكنك كتابة تفاصيل المشكلة"
                placeholderTextColor="#ccc"
                multiline
                textAlign="right"
                textAlignVertical="top"
              />

              <View
                style={{
                  width: '90%',
                  alignSelf: 'center',
                  marginVertical: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: '40%',
                    height: 45,
                    backgroundColor: Colors.mainColor,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    alert('تم ارسال المشكلة و سيتم حلها في اسرع وقت');
                  }}>
                  <Text
                    style={{
                      color: Colors.textColor2,
                      fontSize: 19,
                    }}>
                    ارسال المشكلة
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '90%',
                  // alignItems: 'flex-start',
                  marginTop: 20,
                  alignSelf: 'center',
                  // backgroundColor: '#f00',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#333',
                    fontSize: 20,
                  }}>
                  يمكنك التواصل معنا عن طريق :
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  // height: 130,
                  backgroundColor: Colors.backgroundColor2,
                  marginVertical: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '40%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      // width: '15%',
                      height: 35,
                      //backgroundColor:'#f00',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginTop: 10,
                    }}
                    onPress={() => {
                      Linking.openURL(
                        'whatsapp://send?text=hello&phone=+2001029320080',
                      );
                    }}>
                    <Icon
                      name="whatsapp-square"
                      color={Colors.mainColor}
                      size={30}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      // width: '15%',
                      height: 35,
                      //backgroundColor:'#f00',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginTop: 10,
                    }}
                    onPress={() => {
                      Linking.openURL(
                        'https://www.facebook.com/ana.shimoo.3597',
                      );
                    }}>
                    <Icon name="facebook-square" color="#00f" size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      // width: '15%',
                      height: 35,
                      // backgroundColor:'#f00',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // marginTop: 10,
                    }}
                    onPress={() => Linking.openURL('tel:+2001029320080')}>
                    <Icon
                      name="phone-square"
                      color={Colors.mainColor}
                      size={30}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
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

export default Support;
