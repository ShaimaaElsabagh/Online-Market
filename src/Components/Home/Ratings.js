import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableNativeFeedback,
  StatusBar,
  ScrollView,
  I18nManager,
} from 'react-native';

import {Colors} from '../Constants';

import AntDesign from 'react-native-vector-icons/AntDesign';

import * as Progress from 'react-native-progress';


import {Rating, AirbnbRating} from 'react-native-ratings';

import moment from 'moment';

const {width, height} = Dimensions.get('window');

export class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_ratings: this.props.navigation.getParam('productRatings'),
      product_reviews: this.props.navigation.getParam('productReviews'),
      ratings_length: this.props.navigation.getParam('ratingsLength'),
      reviews_length: this.props.navigation.getParam('reviewsLength'),

      startingValue: 4.3,

      fiveStars: 0,
      fourStars: 0,
      threeStars: 0,
      twoStars: 0,
      oneStar: 0,

      fiveStarsProgress: 0,
      fourStarsProgress: 0,
      threeStarsProgress: 0,
      twoStarsProgress: 0,
      oneStarProgress: 0,
    };
  }

  
  calcProgress(fiveStars, fourStars, threeStars, twoStars, oneStar) {
    let length = this.state.product_ratings.length;
    let fiveStarsProgress = (fiveStars * 1) / length;
    let fourStarsProgress = (fourStars * 1) / length;
    let threeStarsProgress = (threeStars * 1) / length;
    let twoStarsProgress = (twoStars * 1) / length;
    let oneStarProgress = (oneStar * 1) / length;

    this.setState({
      fiveStarsProgress,
      fourStarsProgress,
      threeStarsProgress,
      twoStarsProgress,
      oneStarProgress,
    });
  }

  calcNumOfStars() {
    let ratings = this.state.product_ratings,
      fiveStars = 0,
      fourStars = 0,
      threeStars = 0,
      twoStars = 0,
      oneStar = 0;

    for (let i = 0; i < ratings.length; i++) {
      if (ratings[i].rating_num_of_stars == 5) {
        fiveStars++;
      } else if (ratings[i].rating_num_of_stars == 4) {
        fourStars++;
      } else if (ratings[i].rating_num_of_stars == 3) {
        threeStars++;
      } else if (ratings[i].rating_num_of_stars == 2) {
        twoStars++;
      } else if (ratings[i].rating_num_of_stars == 1) {
        oneStar++;
      }
    }

    this.setState({fiveStars, fourStars, threeStars, twoStars, oneStar});

    //! calcProgress
    this.calcProgress(fiveStars, fourStars, threeStars, twoStars, oneStar);
  }

  componentDidMount() {
    console.log(this.state.product_ratings.length);
    this.calcNumOfStars();
  }

  render() {
    return (
      <View style={styles.body}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.backgroundColor2}
        />

        <View style={styles.header}>
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
              <AntDesign name="right" size={25} color={Colors.iconsColor1} />
            </View>
          </TouchableNativeFeedback>
          <View style={{maxWidth: '75%', paddingHorizontal: 10}}>
            <Text style={styles.title}>تقييمات العملاء</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={{flex: 1, paddingVertical: 15}}>
            <View style={{width: '100%', alignItems: 'center'}}>
              <View style={{width: '90%', paddingBottom: 10}}>
                <Text style={styles.productRatingTitle}>
                  {'تقييمات المنتج'}
                </Text>
              </View>
              <View style={styles.ratingsView}>
                <View style={styles.right}>
                  <View
                    style={{
                      flex: 1.5,
                      // backgroundColor: '#f0f',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}>
                    <Text style={{fontSize: 30, color: Colors.starRatingColor}}>
                      <Text style={{fontWeight: 'bold'}}>
                        {this.state.startingValue}
                      </Text>
                      /5
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
            
                
                    <Rating
                      type="custom"
                      startingValue={this.state.startingValue}
                      ratingCount={5}
                      imageSize={15}
                      readonly
                      ratingColor={Colors.starRatingColor}
                      tintColor={Colors.backgroundColor}
                      ratingBackgroundColor="#d1d1d1"
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <Text>
                      {this.state.product_ratings.length}
                      {' من التقييمات'}
                    </Text>
                  </View>
                </View>
                <View style={styles.center}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontSize: 12}}>{'  5'}</Text>
                    <AntDesign
                      name="star"
                      size={13}
                      color={Colors.starRatingColor}
                    />

                    <Text style={{fontSize: 12, color: '#999'}}>
                      {'('}
                      {this.state.fiveStars > 1000
                        ? '+1000'
                        : this.state.fiveStars}
                      {')  '}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontSize: 12}}>{'  4'}</Text>
                    <AntDesign
                      name="star"
                      size={13}
                      color={Colors.starRatingColor}
                    />
                    <Text style={{fontSize: 12, color: '#999'}}>
                      {'('}
                      {this.state.fourStars}
                      {')  '}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontSize: 12}}>{'  3'}</Text>
                    <AntDesign
                      name="star"
                      size={13}
                      color={Colors.starRatingColor}
                    />
                    <Text style={{fontSize: 12, color: '#999'}}>
                      {'('}
                      {this.state.threeStars}
                      {')  '}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontSize: 12}}>{'  2'}</Text>
                    <AntDesign
                      name="star"
                      size={13}
                      color={Colors.starRatingColor}
                    />
                    <Text style={{fontSize: 12, color: '#999'}}>
                      {'('}
                      {this.state.twoStars}
                      {')  '}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#00f',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontSize: 12}}>{'  1'}</Text>
                    <AntDesign
                      name="star"
                      size={13}
                      color={Colors.starRatingColor}
                    />
                    <Text style={{fontSize: 12, color: '#999'}}>
                      {'('}
                      {this.state.oneStar}
                      {')  '}
                    </Text>
                  </View>
                </View>
                <View style={styles.left}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#00f',
                      alignItems: 'center',
                    }}>
                    <Progress.Bar
                      borderWidth={0}
                      borderRadius={1}
                      unfilledColor="#f1f1f1"
                      color={Colors.starRatingColor}
                      width={width / 3.3}
                      useNativeDriver
                      animated
                      animationType="timing"
                      progress={this.state.fiveStarsProgress}
                      height={5}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#f0f',
                      alignItems: 'center',
                    }}>
                    <Progress.Bar
                      borderWidth={0}
                      borderRadius={1}
                      unfilledColor="#f1f1f1"
                      color={Colors.starRatingColor}
                      width={width / 3.3}
                      useNativeDriver
                      animated
                      animationType="timing"
                      progress={this.state.fourStarsProgress}
                      height={5}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#f00',
                      alignItems: 'center',
                    }}>
                    <Progress.Bar
                      borderWidth={0}
                      borderRadius={1}
                      unfilledColor="#f1f1f1"
                      color={Colors.starRatingColor}
                      width={width / 3.3}
                      useNativeDriver
                      animated
                      animationType="timing"
                      progress={this.state.threeStarsProgress}
                      height={5}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#00f',
                      alignItems: 'center',
                    }}>
                    <Progress.Bar
                      borderWidth={0}
                      borderRadius={1}
                      unfilledColor="#f1f1f1"
                      color={Colors.starRatingColor}
                      width={width / 3.3}
                      useNativeDriver
                      animated
                      animationType="timing"
                      progress={this.state.twoStarsProgress}
                      height={5}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      // backgroundColor: '#ff0',
                      alignItems: 'center',
                    }}>
                    <Progress.Bar
                      borderWidth={0}
                      borderRadius={1}
                      unfilledColor="#f1f1f1"
                      color={Colors.starRatingColor}
                      width={width / 3.3}
                      useNativeDriver
                      animated
                      animationType="timing"
                      progress={this.state.oneStarProgress}
                      height={5}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{width: '90%', alignSelf: 'center', paddingTop: 15}}>
              <Text style={styles.productRatingTitle}>مراجعات المنتج</Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                // backgroundColor: '#f00',
              }}>
              {this.state.product_reviews.map((review, index) => (
                <View style={styles.review}>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        // backgroundColor: '#f00',
                        width: '70%',
                        alignItems: 'flex-start',
                      }}>
                      <Text style={{color: '#c1c1c1'}} numberOfLines={1}>
                        {review.review_user_name}
                      </Text>
                    </View>
                    <View>
                      <Rating
                        type="custom"
                        startingValue={review.review_num_of_stars}
                        ratingCount={5}
                        imageSize={15}
                        readonly
                        // showRating
                        // onFinishRating={this.ratingCompleted}
                        // style={{
                        //   transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
                        //   backgroundColor: '#f00',
                        // }}
                        ratingColor={Colors.starRatingColor}
                        tintColor={Colors.backgroundColor2}
                        ratingBackgroundColor="#d1d1d1"
                      />
                    </View>
                  </View>
                  <View style={{paddingVertical: 10, width: '100%'}}>
                    <Text style={{color: Colors.textColor}}>
                      {review.review_text}
                    </Text>
                  </View>
                  <View style={{width: '100%', alignItems: 'flex-end'}}>
                    <Text style={{color: '#c1c1c1'}}>{review.review_date}</Text>
                  </View>
                </View>
              ))}
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
    backgroundColor: Colors.backgroundColor,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: Colors.backgroundColor2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.textColor,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  productRatingTitle: {
    fontSize: 20,
    fontWeight: '600',
    // letterSpacing: 5,
    color: '#888',
  },
  ratingsView: {
    width: '100%',
    backgroundColor: Colors.backgroundColor2,
    padding: 15,
    flexDirection: 'row',
  },
  left: {
    flex: 2,
    height: 120,
    // backgroundColor: '#ff0',
    paddingBottom: 15,
    paddingTop: 17,
  },
  center: {
    flex: 1.45,
    height: 120,
    // backgroundColor: '#f0f',
    paddingVertical: 15,
  },
  right: {
    flex: 2,
    height: 120,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 3,
  },
  review: {
    width: '95%',
    backgroundColor: Colors.backgroundColor2,
    elevation: 1,
    marginTop: 10,
    borderRadius: 4,
    padding: 8,
  },
});

export default Ratings;
