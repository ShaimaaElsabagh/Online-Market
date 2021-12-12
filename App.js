//! import React
import React, {Component} from 'react';

//! import Colors
import {Colors} from './src/Components/Constants';

//! import Icon
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

//! import navigation
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//! --------------------------------------- import screens --------------------------------------- !//

//! import splash screen
import Splash from './src/Components/Splash';

//! import intro silder screen
import IntroSlider from './src/Components/IntroSlider';

//! import Auth screens
import Login from './src/Components/Auth/Login';
import Signup from './src/Components/Auth/Signup';
import ForgetPass from './src/Components/Auth/ForgetPass';
import EnterCode from './src/Components/Auth/EnterCode';
import ResetPass from './src/Components/Auth/ResetPass';

//! import bottom tabs screens
import Home from './src/Components/BottomTabs/Home';
import Cart from './src/Components/BottomTabs/Cart';
import Favorites from './src/Components/BottomTabs/Favorites';
import Profile from './src/Components/BottomTabs/Profile';

//! import Home screens
import Categories from './src/Components/Home/Categories';
import Products from './src/Components/Home/Products';
import ProductDetails from './src/Components/Home/ProductDetails';
import Ratings from './src/Components/Home/Ratings';

//! import profile screens
import Orders from './src/Components/Profile/Orders';
import EditUserAccount from './src/Components/Profile/EditUserAccount';
import Support from './src/Components/Profile/Support';
import EditEmail from './src/Components/Profile/EditEmail';
import EditPass from './src/Components/Profile/EditPass';
import EnterCodeForChangeEmail from './src/Components/Profile/EnterCodeForChangeEmail';

//! import cart screens
import Checkout from './src/Components/Cart/Checkout';

//! --------------------------------------- Stacks --------------------------------------- !//

//! SwitchStack
const SwitchStack = createStackNavigator(
  {
    Splash: {screen: Splash},
  },
  {
    headerMode: 'none',
  },
);

//! IntroSliderStack
const IntroSliderStack = createStackNavigator(
  {
    IntroSlider: {screen: IntroSlider},
  },
  {
    headerMode: 'none',
  },
);

//! AuthStack
const AuthStack = createStackNavigator(
  {
    Login: {screen: Login},
    Signup: {screen: Signup},
    ForgetPass: {screen: ForgetPass},
    EnterCode: {screen: EnterCode},
    ResetPass: {screen: ResetPass},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

//! HomeStack
const HomeStack = createStackNavigator(
  {
    Home: {screen: Home},
    Categories: {screen: Categories},
    Products: {screen: Products},
    ProductDetails: {screen: ProductDetails},
    Ratings: {screen: Ratings},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

//! ProfileStack
const ProfileStack = createStackNavigator(
  {
    Profile: {screen: Profile},
    Orders: {screen: Orders},
    EditUserAccount: {screen: EditUserAccount},
    Support: {screen: Support},
    EditEmail: {screen: EditEmail},
    EditPass: {screen: EditPass},
    EnterCodeForChangeEmail: {screen: EnterCodeForChangeEmail},
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);

//! CartStack
const CartStack = createStackNavigator(
  {
    Cart: {screen: Cart},
    Checkout: {screen: Checkout},
  },
  {
    initialRouteName: 'Cart',
    headerMode: 'none',
  },
);

//! BottomTabs (createMaterialBottomTabNavigator)
const BottomTabs = createMaterialBottomTabNavigator(
  {
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'الملف الشخصى',
        // tabBarColor: Colors.profileTabBarColor,
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="user" color={tintColor} size={23} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'المفضلة',
        // tabBarColor: Colors.favTabBarColor,
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="heart" color={tintColor} size={23} />
        ),
      },
    },
    Cart: {
      screen: CartStack,
      navigationOptions: {
        tabBarLabel: 'عربة التسوق',
        // tabBarColor: Colors.cartTabBarColor,
        tabBarIcon: ({tintColor}) => (
          <FontAwesome5 name="shopping-bag" color={tintColor} size={23} />
        ),
      },
    },
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'الرئيسية',
        // tabBarColor: Colors.homeTabBarColor,
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="home" color={tintColor} size={23} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeStack',
    activeColor: Colors.mainColor,
    inactiveColor: Colors.inactiveColor,
    barStyle: {
      backgroundColor: Colors.barStyle,
      elevation: 3,
      borderTopWidth: 0.5,
      borderTopColor: '#ccc',
      // bottom: 15,
      // width: '90%',
      // alignSelf: 'center',
      // borderRadius: 5,
      // overflow: 'hidden',
    },
    // style: {
    //   backgroundColor: Colors.backgroundColor,
    // },
  },
);

//! MainStack
const MainStack = createSwitchNavigator({
  Switch: SwitchStack,
  IntroSlider: IntroSliderStack,
  Auth: AuthStack,
  Tabs: BottomTabs,
});

//! app container
const App = createAppContainer(MainStack);

//! export default app
export default App;
