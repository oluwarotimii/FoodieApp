/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-labels */
import React from 'react';
import {View, Image,TouchableOpacity,Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import menuData from '../../data/menuData';
import Fontisto from 'react-native-vector-icons/Fontisto'; 
import Carousel from '../carousel/carousel';
import Time from '../../functions/Time';


const {height, width} = Dimensions.get('window');


const HomeScreen = ({navigation}) => {
  // const {dish} = menuData;
  const Product = () => {
    navigation.navigate('product');
  };
  const profileHandler = () => {
    navigation.navigate('Profile');
  };
  const Notification = () => {
    navigation.navigate('notification');
  };
  // const slider = [
  //   'https://source.unsplash.com/1024x768/?nature',
  //   'https://source.unsplash.com/1024x768/?water',
  //   'https://source.unsplash.com/1024x768/?girl',
  //   'https://source.unsplash.com/1024x768/?tree',
  //   // require('./assets/images/girl.jpg'),
  // ];
  return (
    <ScrollView>

      <View style={styles.parentContainer}>
        <View style={styles.firstContainer}>
          <TouchableOpacity onPress={profileHandler}>
         <Image
            source={require('../../images/profile.png')}
            style={styles.profileBtn}/>
          </TouchableOpacity>
          {/* <View>
            <Text style={{
              color: "black",
            fontSize: 25,
            borderWidth: 2,
            marginTop: '60%',
            marginLeft: '20%',
            }}> {Time}</Text>
          </View> */}
        
          <TouchableOpacity style={styles.bell} onPress={Notification}>
            <Fontisto
            name = "bell"
            color="#1118"
            size={25}
            />
            {/* <Text> Bell Icon</Text> */}
          </TouchableOpacity>
        </View>

        <View style={styles.HomeCarousel}>
           <Text style={styles.newOrdertext}> New Menu Additions</Text> 
          {/* <View style={styles.newOrderCarousel}> */}
                <Carousel />
                <Text style={styles.couponText}> Coupon Sales 30% Off </Text>
          </View> 
        </View>
        <View style={styles.popularOrdersContainer}>
          <Text style={styles.popularOrdersText}> Popular Orders</Text>

          <View style={styles.ordersList}>

            {menuData.slice(0,15).map((dish) => {
              let item = dish
              let id = dish.id
              let name = dish.title
              let price = dish.price
              let image = dish.image
              let carousel = dish.images
              let description = dish.description
              let options = dish.options
            

                return (
                    <View style={styles.orderView} key={dish.id}>
                    <TouchableOpacity style={styles.foodOrder} onPress= {(item) => {navigation.navigate('Product', { id, name, price, image, carousel, description, options})}}>
                        <Image
                        source={dish.image}
                        style={styles.foodImage} />
                        <Text style={styles.foodName}> {dish.title} </Text>
                        </TouchableOpacity>
                    </View>

                );

            })}
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
  },
  profileBtn: {
    // width: '100%',
    // height: '5%',
    // marginTop: 10,
    // marginLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: 10,
    marginLeft: 5,
    width: 40,
    height:   40,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  firstContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // flex: 2,
    marginTop: 20,
    marginLeft: 0,
  },
  walletContainer: {
    //marginLeft: 20,
    //borderWidth: 2,
    //borderColor: '#FA812F',
    margin: 10,
    marginLeft: 20,
    //backgroundColor: '#e8ebea',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    width: '30%',
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bell: {
      padding: 5,
      margin: 5,
      marginLeft:  '78%',
    //   borderWidth: 1,
    //   borderColor: 'red',
  },
  newOrdertext: {
    // alignSelf: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    // paddingVertical: ,
    marginBottom: -2,
    marginTop: -10,
  },
  // newOrderCarousel: {
  //   borderWidth: 2,
  //   borderColor: '#FA812F',
  // },
  HomeCarousel: {
    // borderWidth: 1,
    borderColor: 'red',
    marginTop: 20,
    height: '6%',
    width: width,
    marginBottom: '10%',
  },
  // carouselImage:{
  //     width: '100%',
  //     height: 150,
  //     //resizeMode: 'contain',
  // },
  popularOrdersContainer: {
    marginTop: '10%',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  couponText: {
    // marginTop: 2,
    height: 22,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
  },
  ordersList: {
    width: width,
    // borderWidth: 1,
    // borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    flexWrap: 'wrap',
    marginBottom: 100,
  },
  orderView: {
    width: '45%',
    height: 200,
    margin: 5,
    backgroundColor: '#FFF',
  },
  popularOrdersText: {
    // borderWidth: 2,
    marginTop: 25,
    fontSize: 20,
    padding: 5,
    fontWeight: 'bold',
  },
  foodImage: {
    //flex: 1,
    width: 150,
    height: 150,
    margin: 5,
    // resizeMode: 'contain',
    //aspectRatio: 3.5,
  },
  foodOrder: {
      margin: 2,
      padding: 8,
      //backgroundColor: '#1111',
      elevation: 2,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
