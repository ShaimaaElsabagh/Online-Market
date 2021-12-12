import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
  TextInput,
  Modal,
  AsyncStorage,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {Colors} from '../Constants';

import moment from 'moment';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: '1',
          name: 'خضراوات',
          Images: require('../Images/1.png'),
          backgroundColor: 'rgba(0,266,0,0.3)',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
        {
          id: '2',
          name: 'لحوم',
          Images: require('../Images/4.png'),
          backgroundColor: 'rgba(255,0,0,0.3)',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
        {
          id: '3',
          name: 'فاكهة',
          Images: require('../Images/2.png'),
          backgroundColor: 'rgba(96,43,164,0.3)',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
        {
          id: '4',
          name: 'مشروبات',
          Images: require('../Images/5.png'),
          backgroundColor: 'rgba(0,0,255,.3)',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
        {
          id: '5',
          name: 'خبز',
          Images: require('../Images/bread.png'),
          backgroundColor: '#f6fdc6',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
        {
          id: '6',
          name: 'أسماك',
          Images: require('../Images/3.png'),
          backgroundColor: 'rgba(255,255,0,0.3)',
          products: [
            {
              product_id: '1',
              product_category: 'الخضراوات',
              product_name: 'موز',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.J713t6KgpMa6j5dXb9AiXQHaHa?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '2',
              product_category: 'الخضراوات',
              product_name: 'كرنب',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.UU3TE4Qf_6ikIhCSLg6XaAHaGd?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '3',
              product_category: 'الخضراوات',
              product_name: 'فراولة',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://pbs.twimg.com/media/B3I163WIcAAKzzN.png:large',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '4',
              product_category: 'الخضراوات',
              product_name: 'سمك',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.9sxlSKGQGAh3eWC9sHWWQgHaFY?pid=ImgDet&w=2003&h=1454&rs=1',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '5',
              product_category: 'الخضراوات',
              product_name: 'فلفل',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://media.istockphoto.com/photos/bell-pepper-picture-id503646116?k=6&m=503646116&s=170667a&w=0&h=84DupiYTCtbd7FgYkqNFQOlfKEt2Y1NHLf3RTX6O_XM=',
              ],
              visible: true,
              liked: false,
            },
            {
              product_id: '6',
              product_category: 'الخضراوات',
              product_name: 'أنناس',
              product_quantity: '',
              product_price: 20,
              product_discount: 20,
              product_rate: 4.3,
              product_ratings: [
                {
                  rating_user_id: '1',
                  rating_id: '1',
                  rating_num_of_stars: 5,
                },
                {
                  rating_user_id: '2',
                  rating_id: '2',
                  rating_num_of_stars: 3,
                },
                {
                  rating_user_id: '3',
                  rating_id: '3',
                  rating_num_of_stars: 1,
                },
              ],
              product_reviews: [
                {
                  review_user_id: '1',
                  review_user_name: 'Ady',
                  review_id: '1',
                  review_num_of_stars: 5,
                  review_text: 'رووووووووووووعة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '2',
                  review_user_name: 'Hatem',
                  review_id: '2',
                  review_num_of_stars: 3,
                  review_text: 'انها فعلاا خضراوات طازجة',
                  review_date: moment().format().substr(0, 9),
                },
                {
                  review_user_id: '3',
                  review_user_name: 'Mohamed',
                  review_id: '3',
                  review_num_of_stars: 1,
                  review_text: 'فاكهة جميلة وطازجة',
                  review_date: moment().format().substr(0, 9),
                },
              ],
              product_count: 1,
              product_description:
                'هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع هذا المنتج رائعيبنيمبنيمبنيمبنيمبنمينبمينبميب ويبةويبة يوبةي يوبة يوبةي يوبة يبو هذا المنتج رائع هذا المنتج رائع هذا المنتج رائع',
              product_images: [
                'https://th.bing.com/th/id/OIP.dRi_AWLmQAG_HEKRU5BjFAHaKs?pid=ImgDet&rs=1',
              ],
              visible: true,
              liked: false,
            },
          ],
        },
      ],
    };
  }

  async setFav() {
    await AsyncStorage.setItem(
      'categories',
      JSON.stringify(this.state.categories),
    );
  }

  async getFav() {
    let cate = await AsyncStorage.getItem('categories');
    cate = JSON.parse();
    this.setState({
      categories: cate,
    });
  }

  goToProducts = products => {};

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: Colors.backgroundColor2,
              padding: '2.5%',
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
              <Text style={styles.title}>كل الفئات</Text>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: '100%'}}>
            <View style={styles.category_container}>
              {this.state.categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.cat_style,
                    {backgroundColor: category.backgroundColor},
                  ]}
                  onPress={() =>
                    this.props.navigation.navigate('Products', {
                      category: this.state.categories[index].products,
                      cat_name: this.state.categories[index].name,
                    })
                  }>
                  <View>
                    <Image
                      source={category.Images}
                      style={{width: 100, height: 100, marginBottom: 25}}
                    />
                  </View>
                  <Text style={{fontSize: 30}}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  category_container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  cat_style: {
    width: '44%',
    borderRadius: 15,
    backgroundColor: '#f0f',
    height: 250,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
