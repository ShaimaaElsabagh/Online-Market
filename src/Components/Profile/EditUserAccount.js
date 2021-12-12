import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from '../Constants';

export class EditUserAccount extends Component {
  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate('EditEmail');
              }}>
              <View style={styles.button}>
                <View style={styles.textSection}>
                  <Text style={styles.buttonTitle}>تغير البريد الالكترونى</Text>
                </View>
                <View style={styles.iconSection}>
                  <AntDesign name="left" size={22} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback
              onPress={() => {
                this.props.navigation.navigate('EditPass');
              }}>
              <View style={styles.button}>
                <View style={styles.textSection}>
                  <Text style={styles.buttonTitle}>تغير كلمة المرور</Text>
                </View>
                <View style={styles.iconSection}>
                  <AntDesign name="left" size={22} />
                </View>
              </View>
            </TouchableNativeFeedback>
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
  button: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.textColor,
  },
  textSection: {
    width: '80%',
    alignItems: 'flex-start',
  },
  iconSection: {
    width: '20%',
    alignItems: 'flex-end',
  },
});

export default EditUserAccount;
