import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  Modal,
  TouchableNativeFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Share from 'react-native-share';

import {Colors} from '../Constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.navigation.getParam('category'),
      category_name: this.props.navigation.getParam('cat_name'),
      search_value: '',
      Favorites: [],
    };
  }

  async setFav(value) {
    await AsyncStorage.setItem('fav', JSON.stringify(value));
  }

  async getFav() {
    let fav = await AsyncStorage.getItem('fav');

    if (!Array.isArray(fav)) {
      fav = [];
    } else {
      fav = JSON.parse(fav);
    }

    this.setState({
      products: fav,
    });
  }

  
  heart_fun(index) {
    let products = this.state.products;
    products[index].liked = !products[index].liked;

    this.setState({
      products: products,
    });
    this.setFav(products);
  }

  search_fun(value) {
    let data = this.state.products;
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].product_name.trim().toLowerCase().includes(value.toLowerCase())
      ) {
        data[i].visible = true;
      } else {
        data[i].visible = false;
      }
      this.setState({
        products: data,
      });
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
            flex: 1,
            alignItems: 'center',
            backgroundColor: Colors.backgroundColor2,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: Colors.backgroundColor2,
              padding: '2.5%',
              elevation: 2,
            }}>
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
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.title}>{this.state.category_name}</Text>
            </View>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                Colors.rippleColor,
                false,
                22.5,
              )}
              onPress={() => {}}>
              <View style={styles.settingButton}>
                <Icon2 name="ellipsis-v" size={24} color={Colors.iconsColor1} />
              </View>
            </TouchableNativeFeedback>
          </View>

          <View
            style={{
              width: '100%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.backgroundColor2,
              elevation: 2,
            }}>
            <TextInput
              style={styles.textInput_Style}
              placeholder="البحث..."
              placeholderTextColor="#999"
              value={this.state.search_value}
              onChangeText={value => {
                this.setState({search_value: value});
                this.search_fun(value.trim());
              }}
            />
          </View>
          <ScrollView
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View style={{width: '100%', alignItems: 'center', paddingTop: 15}}>
              {this.state.products.map((item, index) =>
                item.visible ? (
                  <TouchableOpacity
                    key={index}
                    style={styles.products_view}
                    onPress={() => {
                      this.props.navigation.navigate('ProductDetails', {
                        product: item,
                      });
                    }}>
                    <View style={{width: '35%', height: 150}}>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: 145,
                        }}>
                        <Image
                          source={{uri: item.product_images[0]}}
                          style={{width: '100%', height: '100%'}}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                    <View style={{width: '40%', height: 140, padding: 10}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          marginBottom: 10,
                        }}>
                        {item.product_name}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '80%',
                        }}>
                        <Text style={{fontSize: 18, marginBottom: 10}}>
                          {item.product_price} جنيه
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            marginBottom: 10,
                            color: '#ccc',
                            textDecorationLine: 'line-through',
                          }}>
                          {item.product_price}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: '80%',
                        }}>
                        <Text style={{color: Colors.mainColor, fontSize: 15}}>
                          20% off
                        </Text>
                        <Icon name="tag" size={20} color={Colors.mainColor} />
                      </View>
                    </View>
                    <View
                      style={{
                        width: '20%',
                        height: 140,
                        padding: 10,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.heart_fun(index);
                        }}>
                        <Icon
                          name={item.liked ? 'heart' : 'hearto'}
                          size={25}
                          color={'#f00'}
                          style={{
                            marginTop: 5,
                            marginLeft: 5,
                            alignSelf: 'flex-start',
                          }}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="shoppingcart"
                          size={30}
                          color={Colors.mainColor}
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput_Style: {
    width: '78%',
    height: 40,
    borderRadius: 40,
    borderColor: '#999',
    color: '#999',
    padding: 0,
    fontSize: 17,
    borderWidth: 0.4,
    justifyContent: 'center',
    margin: 0,
    paddingLeft: 10,
  },
  products_view: {
    width: '90%',
    height: 150,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 0.3,
    borderColor: '#999',
    borderWidth: 0.7,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  settingButton: {
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
});
