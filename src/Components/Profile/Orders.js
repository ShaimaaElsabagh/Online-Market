import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  Modal,
  AsyncStorage,
  StatusBar,
  TouchableNativeFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {Colors} from '../Constants';

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <View
          style={{flex: 1, alignItems: 'center', backgroundColor: '#ffffff'}}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={Colors.backgroundColor2}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              height: 70,
              // marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.backgroundColor2,
              elevation: 2,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: Colors.textColor,
                fontWeight: 'bold',
              }}>
              الطلبات
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
          <ScrollView style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginVertical: 20,
                // flexDirection: 'column-reverse',
              }}>
              <View style={styles.order_view}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: Colors.mainColor,
                    }}>
                    رقم الطلب : 102
                  </Text>
                  <Text style={{fontSize: 15, color: Colors.mainColor}}>
                    20 Aug, 21
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    العنوان :
                  </Text>
                  <Text style={{fontSize: 18, marginLeft: 20}}>
                    المحله الكبري /المنشيه الجديده /شارع 10{' '}
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    اجمالي السعر :
                  </Text>
                  <Text style={{fontSize: 18, marginLeft: 20}}>
                    200.50 جنيه{' '}
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    حاله الطلب :
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // justifyContent: 'space-between',
                      // width: 110,
                      marginLeft: 20,
                      // backgroundColor: '#ff0',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        marginRight: 5,
                        color: Colors.mainColor,
                      }}>
                      تم التوصيل
                    </Text>
                    <Icon2
                      name="check-circle"
                      color={Colors.mainColor}
                      size={18}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.order_view}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: Colors.mainColor,
                    }}>
                    رقم الطلب : 310
                  </Text>
                  <Text style={{fontSize: 15, color: Colors.mainColor}}>
                    26 Aug, 21
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    العنوان :
                  </Text>
                  <Text style={{fontSize: 18, marginLeft: 20}}>
                    المحله الكبري /المنشيه الجديده /شارع 10{' '}
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    اجمالي السعر :
                  </Text>
                  <Text style={{fontSize: 18, marginLeft: 20}}>
                    200.50 جنيه{' '}
                  </Text>
                </View>

                <View style={{width: '100%', marginBottom: 5}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    حاله الطلب :
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // justifyContent: 'space-between',
                      // width: 110,
                      marginLeft: 20,
                      // backgroundColor: '#ff0',
                    }}>
                    <Text style={{fontSize: 18, marginRight: 5, color: '#f00'}}>
                      انتظر الوصول
                    </Text>
                    <Icon2 name="spinner" color="#f00" size={18} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  order_view: {
    width: '90%',
    height: 250,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 15,
    // borderWidth: 0.5,
    elevation: 5,
    shadowColor: '#000',
    padding: 10,
  },
  outButton: {
    width: '40%',
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainColor,
    marginBottom: 10,
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
