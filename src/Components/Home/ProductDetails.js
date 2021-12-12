//! import React
import React, {Component} from 'react';

//! import Components
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  // TouchableNativeFeedback,
} from 'react-native';

import {TouchableNativeFeedback} from 'react-native-gesture-handler';

import * as Animatable from 'react-native-animatable';

//! import Colors
import {Colors} from '../Constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

import moment from 'moment';

//! import Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

//! width, height (Dimensions)
const {width, height} = Dimensions.get('window');

//! animation
var ITEM_IMAGE_MAX_HEIGHT = 200;
var ITEM_IMAGE_MIN_HEIGHT = 100;

var HEADER_MAX_HEIGHT = 170;
var HEADER_MIN_HEIGHT = 70;

//! ProductDetails Class
export class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.navigation.getParam('product'),
      ratingsLength: this.props.navigation.getParam('ratingsLength'),
      reviewsLength: this.props.navigation.getParam('reviewsLength'),

      defaultRating: 0,
      maxRating: [1, 2, 3, 4, 5],
      starImageFilled:
        'https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true',
      starImageCorner:
        'https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true',

      cartData: [],

      animation: '',
      index: -1,
    };
  }

  componentDidMount() {
    this.getCartData();
  }

  //! custom star rating
  starRating = () => (
    <View style={styles.ratingBar}>
      {this.state.maxRating.map((item, index) => (
        <TouchableOpacity
          activeOpacity={0.7}
          key={index}
          onPress={() => {
            this.setState({defaultRating: item});
            this.setState({index: index});
            this.setState({animation: 'bounceIn'});
          }}>
          {this.state.index == index ? (
            <Animatable.Image
              animation={this.state.animation}
              direction="alternate"
              useNativeDriver={true}
              resizeMode="cover"
              style={styles.starImage}
              source={{
                uri:
                  item <= this.state.defaultRating
                    ? this.state.starImageFilled
                    : this.state.starImageCorner,
              }}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={styles.starImage}
              source={{
                uri:
                  item <= this.state.defaultRating
                    ? this.state.starImageFilled
                    : this.state.starImageCorner,
              }}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );

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
  };

  //! Add Fun
  add = () => {
    let product = this.state.product;

    product.product_count -= 0; // to make it number;

    product.product_count += 1;

    this.setState({
      product,
    });
  };

  //! Minus Fun
  minus = () => {
    let product = this.state.product;

    product.product_count > 1
      ? (product.product_count -= 1)
      : product.product_count;

    this.setState({
      product,
    });
  };

  addToCart = () => {
    this.getCartData();
    setTimeout(() => {
      let cartData = this.state.cartData,
        product = this.state.product,
        isExisted = 0;
      let productCount = (product.product_count -= 0);

      for (let i = 0; i < cartData.length; i++) {
        if (
          cartData[i].product_name == product.product_name &&
          cartData[i].product_category == product.product_category &&
          cartData[i].product_id == product.product_id
        ) {
          cartData[i].product_count = cartData[i].product_count + productCount;
          isExisted = 1;
          break;
        }
      }

      if (isExisted == 0) {
      
        cartData.push(product);

        Alert.alert(
          'بسيون اونلاين!',
          'تمت إضافة المنتج الى السلة بنجاح',
          [
            {
              text: 'Ok',
            },
          ],
          {cancelable: true},
        );
      } else {
        Alert.alert(
          'بسيون اونلاين!',
          'تمت إضافة (' +
            JSON.stringify(productCount) +
            ') على المنتج فى السلة',
          [
            {
              text: 'Ok',
            },
          ],
          {cancelable: true},
        );
      }

      this.setState({
        cartData,
      });

      console.log(product);

      this.storeCartData(cartData);

      product.product_count = 1;

      this.setState({
        product,
      });
    }, 200);
  };

  //! render method
  render() {
    const scrollY = new Animated.Value(0);
    const headerHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const itemImageHeight = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [ITEM_IMAGE_MAX_HEIGHT, ITEM_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const itemImageMarginTop = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - ITEM_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5,
      ],
      extrapolate: 'clamp',
    });

    const headerZindex = scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 0.5],
      extrapolate: 'clamp',
    });

    const headerTitleBottom = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + ITEM_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + ITEM_IMAGE_MIN_HEIGHT + 50,
      ],
      outputRange: [-30, -30, -30, 19],
      extrapolate: 'clamp',
    });

    const headerTitleColor = scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + ITEM_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + ITEM_IMAGE_MIN_HEIGHT + 25,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + ITEM_IMAGE_MIN_HEIGHT + 50,
      ],
      outputRange: [
        'transparent',
        'transparent',
        'transparent',
        'transparent',
        Colors.textColor,
      ],
      extrapolate: 'clamp',
    });

  
    return (
      <View style={styles.body}>
        <StatusBar backgroundColor={Colors.itemBacground} />
        <Animated.View
          style={{
            width: '100%',
            height: headerHeight,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            backgroundColor: Colors.itemBacground,
            zIndex: headerZindex,
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              bottom: headerTitleBottom,
              left: 60,
            }}>
            <Animated.Text
              style={{
                ...styles.title,
                color: headerTitleColor,
              }}>
              {this.state.product.product_name}
            </Animated.Text>
          </Animated.View>
          <View
            style={{
              height: 70,
              justifyContent: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
            }}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                Colors.rippleColor,
                false,
              )}
              useForeground={true}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <View style={styles.backButton}>
                <AntDesign name="right" size={25} color={Colors.iconsColor1} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </Animated.View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrollY}}},
          ])}>
          <Animated.View
            style={{
              height: itemImageHeight,
              width: itemImageHeight,
              marginTop: itemImageMarginTop,
              alignSelf: 'center',
              borderRadius: ITEM_IMAGE_MAX_HEIGHT / 2,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.backgroundColor2,
            }}>
            <Image
              source={{
                uri: this.state.product.product_images[0],
              }}
              resizeMode="contain"
              style={{width: '90%', height: '90%'}}
            />
          </Animated.View>
          <View style={styles.scrollViewContainer}>
            <View style={styles.productNameView}>
              <Text style={styles.productName}>
                {this.state.product.product_name}
              </Text>
            </View>
            <View style={styles.productDiscriptionView}>
              <Text style={styles.productDiscription}>
                {this.state.product.product_description}
              </Text>
            </View>
            <View style={styles.priceRatingView}>
              <View style={styles.priceView}>
                <Text style={styles.priceText}>السعر</Text>
                <View style={styles.priceDiscountView}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: Colors.mainColor,
                      fontWeight: 'bold',
                    }}>
                    {this.state.product.product_price *
                      this.state.product.product_count}{' '}
                    جنيه
                  </Text>
      
                </View>
              </View>
              <TouchableOpacity
                style={styles.ratingView}
                onPress={() => {
                  this.props.navigation.navigate('Ratings', {
                    productRatings: this.state.product.product_ratings,
                    productReviews: this.state.product.product_reviews,
                    ratingsLength: this.state.ratingsLength,
                    reviewsLength: this.state.reviewsLength,
                  });
                }}>
                <AntDesign
                  name="star"
                  size={25}
                  color={Colors.starRatingColor}
                />
                <Text style={{marginLeft: 5}}>
                  {this.state.product.product_rate} {'(عدد التقيمات '}
                  {this.state.product.product_ratings.length} {')'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.counterView}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  activeOpacity={0.3}
                  style={{
                    ...styles.addMinusButton,
                    backgroundColor: Colors.mainColor,
                  }}
                  onPress={() => {
                    this.add();
                  }}>
                  <AntDesign name="plus" size={30} color={Colors.iconsColor2} />
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.productCount}>
                  {this.state.product.product_count}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  activeOpacity={0.3}
                  disabled={
                    this.state.product.product_count <= 1 ? true : false
                  }
                  style={{
                    ...styles.addMinusButton,
                    backgroundColor: Colors.priceTextColor,
                  }}
                  onPress={() => {
                    this.minus();
                  }}>
                  <AntDesign
                    name="minus"
                    size={30}
                    color={Colors.iconsColor2}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.quickDeliveryAndDiscountView}>
              <View
                style={{
                  flex: 1,
                  borderRightWidth: 0.5,
                  borderRightColor: Colors.priceTextColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: Colors.mainColor}}>
                    توصيل سريع
                  </Text>
                  <MaterialCommunityIcon
                    name="truck-delivery-outline"
                    color={Colors.mainColor}
                    size={22}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  borderLeftWidth: 0.5,
                  borderLeftColor: Colors.priceTextColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    borderRadius: 5,
                    backgroundColor: Colors.starRatingColor,
                    padding: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: Colors.textColor2,
                    }}>
                    خصم 20%
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.addToCart();
                }}
                activeOpacity={0.3}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: Colors.mainColor,
                  width: '80%',
                  height: 60,
                  borderRadius: 40,
                  paddingHorizontal: 5,
                }}>
                <View>
                  <Text
                    style={{
                      color: Colors.textColor2,
                      fontWeight: 'bold',
                      fontSize: 22,
                    }}>
                    إضافة الى العربة
                  </Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: Colors.backgroundColor,
                  }}>
                  <AntDesign
                    name="shoppingcart"
                    size={25}
                    color={Colors.mainColor}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{color: Colors.textColor, fontSize: 20}}>
                ما تقييمك للمنتج؟
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,
              }}>
              <View
                style={{
                  width: '100%',
                  padding: 10,
                  borderRadius: 10,
                  backgroundColor: Colors.backgroundColor2,
                  elevation: 3,
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={{fontSize: 20, color: Colors.textColor}}>
                      عدى
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 60,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 5,
                      backgroundColor: Colors.mainColor,
                    }}>
                    <Text style={{fontSize: 17, color: Colors.textColor2}}>
                      إضافة
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',

                    marginVertical: 20,
                  }}>
                  {this.starRating()}
                  <View />
                </View>

                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start', 
                  }}>
                  <TextInput
                    placeholder="اكتب تقيمك هنا..."
                    multiline={true}
                    selectionColor={Colors.selectionColor}
                    placeholderTextColor="#ccc"
                    style={{
                      width: '80%',
                      borderRadius: 5,
                      paddingHorizontal: 7,
                      fontSize: 17,
                      color: Colors.textColor,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      backgroundColor: '#eee',
                      maxHeight: 100, 
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.backgroundColor2,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    width: '100%',
    paddingHorizontal: '7%',
    paddingBottom: 20,
  },
  backButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  productNameView: {
    paddingVertical: 20,
  },
  productName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  productDiscriptionView: {
    paddingBottom: 20,
  },
  productDiscription: {
    fontSize: 17,
    color: Colors.textColor,
    textAlign: 'justify',
  },
  priceRatingView: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  priceText: {
    fontSize: 18,
    color: Colors.priceTextColor,
  },
  priceDiscountView: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterView: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  addMinusButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 25,
  },
  productCount: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.textColor,
  },
  quickDeliveryAndDiscountView: {
    borderTopWidth: 1,
    borderTopColor: Colors.priceTextColor,
    marginVertical: 20,
    flexDirection: 'row',
    paddingTop: 10,
  },
  ratingBar: {
    flexDirection: 'row-reverse',
  },
  starImage: {
    width: 30,
    height: 30,
  },
});

export default ProductDetails;
