import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  TouchableNativeFeedback,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {NavigationEvents} from 'react-navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Colors} from '../Constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          product_id: '1',
          product_category: 'الخضراوات',
          product_name: 'كرنب',
          product_quantity: '',
          product_price: 20,
          product_discount: 20,
          product_rate: 4.3,
          product_ratings: [],
          product_count: 1,
          product_description:
            'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
          product_images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADqW3rYY8OHqxzphjFSNzgh8Npz9o3Rk6d7h2pXf7hjakNRy-R5cOfAJxW5LMvV26L8c&usqp=CAU',
          ],
          visible: true,
          liked: false,
        },
      ],

      numOfItemsIsLiked: 0,

      barStyle: 'dark-content',
      backgroundColor: Colors.backgroundColor2,
    };
  }

  componentDidMount() {
    this.getlist();
    setTimeout(() => {
      this.checkIfIsLiked();
    }, 100);
  }

  async store(arr) {
    await AsyncStorage.setItem('list', JSON.stringify(arr));
  }

  async getlist() {
    let arr = await AsyncStorage.getItem('list');

    if (arr == null) {
      arr = [];
    } else {
      arr = JSON.parse(arr);
    }
    this.setState({items: arr});
  }

  delete(index) {
    let items = this.state.items;
    items[index].liked = false;
    this.setState({items});
    this.store(items);
    setTimeout(() => {
      this.checkIfIsLiked();
    }, 100);
    ToastAndroid.showWithGravity(
      'تم المسح!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
  }

  checkIfIsLiked() {
    let items = this.state.items,
      numOfItemsIsLiked = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].liked == true) {
        numOfItemsIsLiked++;
      }
    }

    this.setState({numOfItemsIsLiked});
  }


  render() {
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar
            barStyle={this.state.barStyle}
            backgroundColor={this.state.backgroundColor}
          />
          <NavigationEvents
            onDidFocus={() => {
              this.getlist();
              setTimeout(() => {
                this.checkIfIsLiked();
              }, 100);

              this.setState({
                barStyle: 'dark-content',
                backgroundColor: Colors.backgroundColor2,
              });
            }}
          />
          <View style={[styles.headerStyle]}>
            <Text style={[styles.headerText]}>المفضلة</Text>
            <Icon2 name={'heart'} size={28} color={'red'} />
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
                <Icon2 name="right" size={25} color={Colors.iconsColor1} />
              </View>
            </TouchableNativeFeedback>
          </View>

          {this.state.numOfItemsIsLiked != 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={[styles.containerStyle]}>
                <View
                  style={{height: '100%', width: '88%', alignItems: 'center'}}>
                  {this.state.items.map((item, index) =>
                    item.liked ? (
                      <View style={[styles.itemsStyle]} key={index}>
                        <View
                          style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                          
                          }}>
                          <Image
                            source={{uri: item.product_images[0]}}
                            style={{
                              width: '90%',
                              height: '90%',
                            }}
                            resizeMode="contain"
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            paddingLeft: 10,
                           
                          }}>
                          <Text style={{fontSize: 22}}>
                            {item.product_name}
                          </Text>
                          <Text style={{fontSize: 20, color: '#ffd400'}}>
                            {item.product_price} جنيه
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.deleteButton}
                          onPress={() => {
                            this.delete(index);
                          }}>
                          <Icon2
                            name="close"
                            size={20}
                            color={Colors.iconsColor2}
                          />
                        </TouchableOpacity>
                      </View>
                    ) : null,
                  )}
                </View>
              </View>
            </ScrollView>
          ) : (
            <View
              style={{
                height: '80%',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'data:image/png;base64,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',
                }}
                style={{
                  width: '85%',
                  height: 280,
                  marginBottom: 20,
                  resizeMode: 'contain',
                }}
              />
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                ليس لديك عناصر مفضلة{' '}
              </Text>
            </View>
          )}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor2,
    elevation: 2,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 5,
  },
  itemsStyle: {
    height: 130,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderColor: '#dadce0f3',
    borderWidth: 1.8,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 12,
    elevation: 1,

  },
  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.errorAndDeleteColor,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
    elevation: 2,
  },
  backButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    position: 'absolute',
    left: 10,
  },
});
