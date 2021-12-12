import React, {Fragment, Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  Dimensions,
  PermissionsAndroid,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  TouchableNativeFeedback,
  ToastAndroid,
} from 'react-native';

import {NavigationEvents} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';

import * as ImagePicker from 'react-native-image-picker';

import Icon2 from 'react-native-vector-icons/AntDesign';

import Icon3 from 'react-native-vector-icons/MaterialIcons';

import Icon4 from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';

import {ActionSheet} from 'react-native-cross-actionsheet';

import {Colors} from '../Constants';

import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Share from 'react-native-share';

import FilesBase64 from '../Base64/FilesBase64';

const {width, height} = Dimensions.get('screen');
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_uri:
        'https://yt3.ggpht.com/a/AATXAJxsqVRpN26p3hLHBXqBKCC_llV5oH6Cge-wwQ=s900-c-k-c0xffffffff-no-rj-mo',
      defaultPhoto_uri:
        'https://yt3.ggpht.com/a/AATXAJxsqVRpN26p3hLHBXqBKCC_llV5oH6Cge-wwQ=s900-c-k-c0xffffffff-no-rj-mo',
      photo_data: '',
      barStyle: 'light-content',
      backgroundColor: Colors.mainColor,

      email: 'shaimaa@gmail.com',
      V_uri: true,
      edit_email: '',

      options: [
        {
          text: 'التقط صورة',
          onPress: () => {
            this.launchCamera();
          },
        },
        {
          text: 'المعرض',
          onPress: () => {
            this.select_first_photo();
          },
        },
      ],
    };
  }

  open_Edititem() {
    this.setState({
      edit_email: this.state.email,
      alertView: true,
    });
  }

  Edit_email() {
    this.state.email = this.state.edit_email;
    this.setState({alertView: false});
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
        
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  async componentDidMount() {
    this.requestCameraPermission();
  }

  select_first_photo() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary({options, includeBase64: true}, res => {


      if (res.didCancel) {
       
      } else if (res.error) {
        alert('something failed: ', res.error)
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        if (this.state.photo_uri == this.state.defaultPhoto_uri) {
          this.state.options.push({
            text: 'مسح الصورة',
            destructive: true,
            onPress: () => {
              this.setState({
                photo_uri: this.state.defaultPhoto_uri,
                V_uri: false,
              });
              ToastAndroid.showWithGravity(
                'تم مسح صورة البروفايل',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
              );
              this.state.options.pop();
            },
          });
        }
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  }

  launchCamera = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    };
    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        if (this.state.photo_uri == this.state.defaultPhoto_uri) {
          this.state.options.push({
            text: 'مسح الصورة',
            destructive: true,
            onPress: () => {
              this.setState({
                photo_uri: this.state.defaultPhoto_uri,
                V_uri: false,
              });
              ToastAndroid.showWithGravity(
                'تم مسح صورة البروفايل',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
              );
              this.state.options.pop();
            },
          });
        }
        this.setState({
          photo_data: res.assets[0],
          photo_uri: res.assets[0].uri,
        });
      }
    });
  };

  shareTheApp = async () => {
    let shareOptions = {
      title: 'Market',
      message:
        "I'm using market app since a year, and I make more than 10 orders on it🤩🤩\n\n https://react-native-share.github.io/react-native-share/docs/share-open",
      url: FilesBase64.appImage,
    };

    try {
      const shareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(shareResponse));
    } catch (err) {
      console.log('Error ==>' + err);
    }
  };

  async logOut() {
    await AsyncStorage.setItem('Switch', 'Auth');
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle={this.state.barStyle}
          backgroundColor={this.state.backgroundColor}
        />

        <NavigationEvents
          onDidFocus={() => {
            this.requestCameraPermission();
            this.setState({
              barStyle: 'light-content',
              backgroundColor: Colors.mainColor,
            });
          }}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: Colors.backgroundColor2,
          }}>
          <View
            style={{
              width: '100%',
              height: 250,
              backgroundColor: Colors.mainColor,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              elevation: 1,
              overflow: 'hidden',
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                  Colors.rippleColor,
                  false,
                  22.5,
                )}
                onPress={() => {
                  this.props.navigation.navigate('EditUserAccount');
                }}>
                <View style={styles.editButton}>
                  <Icon name="user-edit" color={Colors.iconsColor2} size={22} />
                </View>
              </TouchableNativeFeedback>

              <Text
                style={{
                  color: Colors.backgroundColor2,
                  fontSize: 23,
                  fontWeight: 'bold',
                }}>
                الحساب
              </Text>
            </View>

            <View
              style={{
                width: '100%',
                height: 160,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.image_container}>
                <Image
                  source={{uri: this.state.photo_uri}}
                  style={styles.image_View}
                />

                <TouchableOpacity
                  activeOpacity={0.4}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: Colors.backgroundColor2,
                    position: 'absolute',
                    bottom: 0,
                    left: 5,
                    elevation: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.setState({V_uri: true});
                    ActionSheet.options({
                      options: this.state.options,
                      cancel: {
                        text: 'إلغاء',
                        onPress: () => this.setState({V_uri: false}),
                      },
                    });
                  }}>
                  <Icon name="camera" size={25} color="#888" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, paddingVertical: 15}}>
              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate('Orders');
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon name="shopping-cart" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%',
                    }}>
                    <View
                      style={{
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        طلباتي
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={() => {
                  this.shareTheApp();
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon name="share-alt-square" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%',
                    }}>
                    <View
                      style={{
                        width: '95%',
                        // backgroundColor: "#00f",
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        المشاركة مع الأصدقاء
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon name="thumbs-up" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%',
                    }}>
                    <View
                      style={{
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        فيدباك
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon2 name="star" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%',
                    }}>
                    <View
                      style={{
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        تقييم الأبلكيشن
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={() => {
                  this.props.navigation.navigate('Support');
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon3 name="support-agent" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%'
                    }}>
                    <View
                      style={{
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        الدعم الفنى
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>

              <TouchableNativeFeedback
                onPress={() => {
                  this.logOut();
                }}>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '15%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                    }}>
                    <Icon4 name="exit-outline" size={17} color="#999" />
                  </View>

                  <View
                    style={{
                      width: '85%',
                    }}>
                    <View
                      style={{
                        width: '95%',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        height: '100%',
                        paddingRight: 5,
                        borderBottomColor: '#999',
                        borderBottomWidth: 0.6,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor,
                          fontSize: 18,
                        }}>
                        تسجيل خروج
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableNativeFeedback>
            </View>
          </ScrollView>
        </View>

        {this.state.alertView ? (
          <>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.3)',

                position: 'absolute',
              }}>
              <View
                style={{
                  width: width,
                  height: height,
                }}>
                <Animatable.View
                  animation="fadeIn"
                  style={{
                    width: '70%',
                    height: '25%',
                    backgroundColor: Colors.backgroundColor2,
                    alignSelf: 'center',
                    marginTop: '65%',
                    borderRadius: 20,
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    elevation: 4,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#211E1E',
                      textAlign: 'center',
                      marginTop: width * 0.07,
                      fontSize: 18,
                      fontWeight: 'normal',
                    }}>
                    تغيير البريد الألكتروني
                  </Text>

                  <TextInput
                    style={{
                      width: '85%',
                      height: 45,
                      borderRadius: 10,
                      borderColor: '#999',
                      borderWidth: 0.5,
                      backgroundColor: Colors.backgroundColor2,
                      color: Colors.textColor,
                      fontSize: 16,
                      paddingRight: 5,
                      marginTop: 15,
                    }}
                    multiline
                    placeholderTextColor="#333"
                    placeholder="كلمة المرور القديمة"
                    value={this.state.edit_email}
                    onChangeText={value => {
                      this.setState({
                        edit_email: value,
                      });
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      width: '100%',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.Edit_email();
                      }}
                      style={{
                        width: width * 0.3,
                        height: width * 0.11,
                        backgroundColor: Colors.mainColor,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        borderRadius: 7,
                        marginTop: width * 0.02,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor2,
                          fontSize: 17,
                          textAlign: 'center',
                          fontWeight: 'normal',
                        }}>
                        تأكيد التغيير
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          alertView: false,
                        });
                      }}
                      style={{
                        width: width * 0.3,
                        height: width * 0.11,
                        backgroundColor: Colors.mainColor,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        borderRadius: 7,
                        marginTop: width * 0.02,
                      }}>
                      <Text
                        style={{
                          color: Colors.textColor2,
                          fontSize: 17,
                          textAlign: 'center',
                          fontWeight: 'normal',
                        }}>
                        إالغاء
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Animatable.View>
              </View>
            </View>
          </>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: 120,
    height: 120,
    backgroundColor: '#ccc',
    borderRadius: 60,
    borderColor: Colors.backgroundColor2,
    borderWidth: 0.9,
  },

  btnSection: {
    width: 225,
    height: 20,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 5,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cameraButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  editButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    position: 'absolute',
    left: 5,
  },
  emailEditButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  image_container: {
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01,
  },
  image_View: {
    height: width * 0.4,
    width: width * 0.4,
    borderRadius: (width * 0.4) / 2,
  },
});
