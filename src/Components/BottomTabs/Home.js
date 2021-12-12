import * as React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
  Image,
  Alert,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';

import {NavigationEvents} from 'react-navigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../Constants';

import moment from 'moment';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
        {
          product_id: '7',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
          product_id: '8',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
          product_id: '9',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
          product_id: '10',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
          product_id: '11',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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
          product_id: '12',
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
              review_num_of_stars: 2,
              review_text: 'رووووووووووووعة',
            },
            {
              review_user_id: '2',
              review_user_name: 'Hatem',
              review_id: '2',
              review_num_of_stars: 4,
              review_text: 'انها فعلاا خضراوات طازجة',
            },
            {
              review_user_id: '3',
              review_user_name: 'Mohamed',
              review_id: '3',
              review_num_of_stars: 1,
              review_text: 'فاكهة جميلة وطازجة',
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

      //* Categories
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


      fav_item: '',
      fav_img: '',
      fav_price: '',

      cartData: [],
      ratings_length: 1,
      reviews_length: 1,
      user_name :this.props.navigation.getParam('user_name'),
    };
  }

  makeSearchRequest(searchKey) {
    let list = this.state.list;

    for (let i = 0; i < list.length; i++) {
      if (
        list[i].product_name
          .trim()
          .toUpperCase()
          .includes(searchKey.toUpperCase())
      ) {
        list[i].visible = true;
      } else {
        list[i].visible = false;
      }
    }

    this.setState({list});
  }

  Fav(index) {
    let list = this.state.list;
    let Favorit = this.state.Favorit;
    if (list[index].liked == false) {
      list[index].liked = true;

      setTimeout(() => {
        ToastAndroid.showWithGravity(
          'تمت الاضافة الى المفضلة',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }, 250);
    } else {
      list[index].liked = false;

      setTimeout(() => {
        ToastAndroid.showWithGravity(
          'تم المسح من المفضلة',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }, 250);
    }
    this.setState({list});
    // this.save_fav(this.state.Favorit);
    this.store(this.state.list);
  }

  componentDidMount() {
    this.getlist();
    let reviews_length = this.state.list[0].product_reviews.length,
      ratings_length = this.state.list[0].product_ratings.length;
    this.setState({reviews_length, ratings_length});
  }

  async store(arr) {
    await AsyncStorage.setItem('list', JSON.stringify(arr));
  }

  async getlist() {
    let arr = await AsyncStorage.getItem('list');
    arr = JSON.parse(arr);

    if (arr == null) {
      arr = this.state.list;
    } else {
      arr = arr;
    }


    this.setState({list: arr});
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
  };


  addToCart = (product, index) => {
    let list = this.state.list;
    this.getCartData();
    setTimeout(() => {
      let cartData = this.state.cartData,
 
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

      list[index] = product;

      this.setState({
        list,
      });
    }, 200);
  };

  openCat = category => {
    this.props.navigation.navigate('Products', {
      category: category.products,
      cat_name: category.name,
    });
  };

  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />
        <NavigationEvents
          onDidFocus={() => {
            this.getlist();
          }}
        />
        <View
          style={{
            backgroundColor: '#fff',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              alignItems: 'flex-start',
              paddingLeft: '5%',
              elevation: 2,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 23,
                fontWeight: '700',
              }}>
              مرحبا !
            </Text>

            <Text
              style={{
                color: '#000',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              عدى
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 2,
            }}>
            <TextInput
              style={{
                width: '80%',
                height: 40,
                borderRadius: 30,
                borderColor: '#999',
                color: '#999',
                paddingHorizontal: 10,
                fontSize: 17,
                borderWidth: 0.4,
                padding: 0,
                margin: 0,
              }}
              textAlign="right"
              placeholder="البحث..."
              placeholderTextColor="#999"
              returnKeyType="search"
              onChangeText={value => {
                this.makeSearchRequest(value.trim());
              }}
              
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              backgroundColor: '#fff',
            }}>
            <View style={{paddingVertical: 10}}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 35,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingLeft: '5%',
                  paddingRight: '3%',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Categories');
                }}>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: Colors.textColor,
                      fontSize: 23,
                      fontWeight: 'normal',
                    }}>
                    كل الفئات
                  </Text>
                </View>

                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}>
                  <Icon2
                    name="left"
                    size={23}
                    color={Colors.iconsColor1}
                    
                  />
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: '100%',
                  height: 100,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      paddingLeft: 5,
                      flexDirection: 'row',
                    }}>
                    {this.state.categories.map((category, index) => (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.3}
                        style={{
                          width: 70,
                          height: 90,
                          borderRadius: 5,
                          backgroundColor: category.backgroundColor,
                          marginRight: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                        onPress={() => {
                          this.openCat(category);
                        }}>
                        <View
                          style={{
                            flex: 1.5,
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                          }}>
                          <Image
                            source={category.Images}
                            resizeMode="contain"
                            style={{flex: 0.8}}
                          />
                        </View>
                        <View
                          style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Text style={{fontSize: 15, color: Colors.textColor}}>
                            {category.name}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: '90%',
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 23,
                      fontWeight: 'normal',

                    }}>
                    عناصر شائعة
                  </Text>
                </View>

                {this.state.list.map((item, index) =>
                  item.visible == true ? (
                    <TouchableOpacity
                      key={index}
                      style={{
                        width: '44%',
                        height: 220,
                        marginHorizontal: 5,
                        marginVertical: 5,
                        borderColor: '#ccc',
                        borderWidth: 0.7,
                        borderRadius: 6,
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        this.props.navigation.navigate('ProductDetails', {
                          product: item,
                          ratingsLength: this.state.ratings_length,
                          reviewsLength: this.state.reviews_length,
                        });
                      }}>
                      <View
                        style={{
                          width: '95%',
                          height: 28,
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.Fav(index);
                          }}
                          style={{
                            left: 2,
                            top: 4,
                            position: 'absolute',
                          }}>
                          {item.liked ? (
                            <Icon2 name="heart" size={24} color="#f00" />
                          ) : (
                            <Icon name="heart" size={24} color="#ccc" />
                          )}
                        </TouchableOpacity>
                      </View>

                      <View
                        style={{
                          width: '100%',
                          height: 90,
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={{
                            uri: item.product_images[0],
                          }}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          resizeMode="contain"
                        />
                      </View>

                      <View
                        style={{
                          width: '100%',
                          height: 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 18,
                            fontWeight: 'normal',
                          }}>
                          {item.product_name}
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '100%',
                          height: 25,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            color: '#FFDE00',
                            fontSize: 18,
                            fontWeight: 'normal',
                          }}>
                          {item.product_price} جنيه
                        </Text>
                      </View>

                      <View
                        style={{
                          width: '100%',
                          height: 45,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.addToCart(item, index);
                          }}
                          style={{
                            width: '78%',
                            height: 40,
                            borderRadius: 30,
                            backgroundColor: Colors.mainColor,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon2
                            name="shoppingcart"
                            size={25}
                            color={Colors.iconsColor2}
                          />
                        </TouchableOpacity>
                      </View>
                      {/* <Text>{this.state.reviews_length}</Text> */}
                    </TouchableOpacity>
                  ) : null,
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default Home;
