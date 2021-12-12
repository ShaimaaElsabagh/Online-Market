//! import React
import React, {Component} from 'react';

//! import Components
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  TouchableOpacity,
} from 'react-native';

//! import Colors
import {Colors} from '../Constants';

//! import Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationEvents} from 'react-navigation';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],

      totalPrice: 0,
      totalItemsLen: 0,
    };
  }

  componentDidMount() {
    this.getCartData();
  }

  //! store
  storeCartData = async data => {
    await AsyncStorage.setItem('cartData', JSON.stringify(data));
  };

  //! get
  getCartData = async () => {
    let cartData = await AsyncStorage.getItem('cartData');

    if (cartData == null) {
      cartData = [];
    } else {
      cartData = JSON.parse(cartData);
    }

    this.setState({cartData});
    this.getTotalPriceAndLen(cartData);
  };

  //! get total price and length
  getTotalPriceAndLen = cartData => {
    let products = cartData,
      totalPrice = 0,
      totalItemsLen = cartData.length;

    for (let i = 0; i < products.length; i++) {
      totalPrice += products[i].product_price * products[i].product_count;
    }

    this.setState({
      totalPrice,
      totalItemsLen,
    });
  };

  //! Add Fun
  add = index => {
    let cartData = this.state.cartData;

    cartData[index].product_count -= 0; // to make it number;

    cartData[index].product_count += 1;

    this.setState({
      cartData,
    });

    this.storeCartData(cartData);
    this.getTotalPriceAndLen(cartData);
  };

  //! Minus Fun
  minus = index => {
    let cartData = this.state.cartData;

    cartData[index].product_count -= 0; // to make it number;

    cartData[index].product_count > 1
      ? (cartData[index].product_count -= 1)
      : cartData[index].product_count;

    this.setState({
      cartData,
    });

    this.storeCartData(cartData);
    this.getTotalPriceAndLen(cartData);
  };

  //! delete fun
  delete = index => {
    let cartData = this.state.cartData;

    cartData.splice(index, 1);

    this.setState({cartData});

    this.storeCartData(cartData);
    this.getTotalPriceAndLen(cartData);
  };

  //! render function
  render() {
    //! cart data
    const cartData = this.state.cartData;

    return (
      <View style={styles.body}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />

        <NavigationEvents
          onDidFocus={() => {
            this.getCartData();
            this.getTotalPriceAndLen(this.state.cartData);
          }}
        />

        <View style={styles.header}>
          <View style={{position: 'absolute', left: 5}}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                Colors.rippleColor,
                false,
                22.5,
              )}
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <View style={styles.backButton}>
                <AntDesign name="right" size={25} color={Colors.iconsColor1} />
              </View>
            </TouchableNativeFeedback>
          </View>
          <View
            style={{
              maxWidth: '75%',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.title} numberOfLines={1}>
              عربة التسوق
            </Text>
          </View>
        </View>
        <View style={styles.scrollViewContainer}>
          {this.state.cartData.length != 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{paddingBottom: 10}}>
                {this.state.cartData.map((item, index) => (
                  <View style={styles.itemStyle} key={index}>
                    <View style={styles.imageView}>
                      <Image
                        source={{uri: item.product_images[0]}}
                        resizeMode="contain"
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <View style={styles.itemDetailsView}>
                      <View style={styles.productNameView}>
                        <Text style={styles.productName} numberOfLines={1}>
                          {item.product_name}
                        </Text>
                      </View>
                      <View style={styles.productPriceView}>
                        <Text style={styles.productPrice}>
                          {item.product_price * item.product_count} جنيه
                        </Text>
                      </View>
                      <View style={styles.productCounterView}>
                        <View style={styles.plusView}>
                          <TouchableOpacity
                            activeOpacity={0.3}
                            style={{
                              ...styles.addMinusButton,
                              backgroundColor: Colors.mainColor,
                            }}
                            onPress={() => {
                              this.add(index);
                            }}>
                            <AntDesign
                              name="plus"
                              size={25}
                              color={Colors.iconsColor2}
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.counterView}>
                          <Text style={styles.productCount}>
                            {item.product_count}
                          </Text>
                        </View>
                        <View style={styles.minusView}>
                          <TouchableOpacity
                            disabled={item.product_count <= 1 ? true : false}
                            activeOpacity={0.3}
                            style={{
                              ...styles.addMinusButton,
                              backgroundColor: Colors.priceTextColor,
                            }}
                            onPress={() => {
                              this.minus(index);
                            }}>
                            <AntDesign
                              name="minus"
                              size={25}
                              color={Colors.iconsColor2}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => {
                        this.delete(index);
                      }}>
                      <FontAwesome5
                        name="trash-alt"
                        size={25}
                        color={Colors.errorAndDeleteColor}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          ) : (
            <View style={styles.emptyCart}>
              <Image
                source={require('../Images/empty-cart.png')}
                style={{width: 250, height: 250}}
                resizeMode="contain"
              />
              <View style={{paddingVertical: 10}}>
                <Text style={{fontSize: 20, color: Colors.textColor}}>
                  عربة التسوق فارغة
                </Text>
              </View>
            </View>
          )}

          {this.state.totalPrice != 0 || this.state.cartData.length != 0 ? (
            <View style={styles.checkoutSection}>
              <View
                style={{
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, color: Colors.textColor}}>
                  المبلغ الاجمالى{' '}
                  <Text
                    style={{
                      fontSize: 23,
                      color: Colors.textColor,
                      fontWeight: 'bold',
                    }}>
                    {this.state.totalPrice} جنيه
                  </Text>{' '}
                </Text>
              </View>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={styles.checkoutButton}
                  activeOpacity={0.4}
                  onPress={() => {
                    this.props.navigation.navigate('Checkout');
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: Colors.textColor2,
                    }}>
                    checkout{'    >>'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.backgroundColor2,
  },
  header: {
    width: '100%',
    backgroundColor: Colors.backgroundColor2,
    height: 70,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
    elevation: 2,
    justifyContent: 'center',
  },
  backButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  scrollViewContainer: {
    flex: 1,
    width: '100%',
  },
  itemStyle: {
    width: '90%',
    height: 150,
    backgroundColor: Colors.backgroundColor2,
    borderRadius: 20,
    elevation: 3,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
  },
  imageView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  itemDetailsView: {
    flex: 2,
    paddingLeft: 10,
  },
  productNameView: {
    flex: 1,
    justifyContent: 'center',
  },
  productPriceView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCounterView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: Colors.textColor,
  },
  productPrice: {
    fontSize: 16,
    color: Colors.textColor,
    marginRight: 5,
  },
  prodcutPriceBeforeDiscount: {
    fontSize: 16,
    color: Colors.priceTextColor,
    textDecorationLine: 'line-through',
  },
  plusView: {
    justifyContent: 'center',
  },
  counterView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    maxWidth: '52%',
  },
  minusView: {
    justifyContent: 'center',
  },
  addMinusButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 15,
  },
  productCount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.textColor,
  },
  deleteButton: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    top: 5,
  },
  emptyCart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutSection: {
    width: '100%',
    bottom: 0,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor2,
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
  },
  checkoutButton: {
    width: '60%',
    height: 40,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainColor,
  },
});

export default Cart;
