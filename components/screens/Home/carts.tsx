/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, clear, decrement, removeItem } from '../../redux/features/cart/cartSlice';
import { cartTotalPriceSelector } from '../../redux/features/cart/selectors';
import FontAwesome from 'react-native-vector-icons/Octicons';
import CartsSelector from '../selector/quantitySelctorCarts';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import menuData from '../../data/menuData';
import CartRender from '../carts/carts-render';


const {height, width} = Dimensions.get('window');
const Carts = ({navigation}) => {
  const dispatch = useDispatch();
  const dishCart = useSelector((state) => state.dishCart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  // const AlertItem = () => {
  //   Alert.alert('Are you sure you want to clear the cart?'
  //   [
  //     {
  //       text: 'Cancel',
  //       onPress: () => console.log('cancel pressed')
  //     }
  //   ])
  // }
  // const Product = () => {
  //   navigation.navigate('Product');
  // };

  
  return (
    <View >
      <ScrollView>
        {/*

      </View> */}

        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                {' '}
                Carts <MCI name="cart-variant" size={25} />
              </Text>
            </View>
            <View style={styles.bellView}>
              <TouchableOpacity style={styles.bell}>
                <FontAwesome name="bell" color="#1118" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subtotal}>
            <Text> Sub-total : addition if all the prices in the carts</Text>
          </View>
              <View>
              
                <View> 
                  <CartRender item /> 
                </View>
              
              </View>       
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   width: '100%',
  //   height: 80,
  //   flexDirection: 'row',
  //   //justifyContent: 'space-between',
  //   //flex: 2,
    marginBottom: 120,
    // backgroundColor: '#d1d1d1',
    
  },
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 2,
    //marginTop: 20,
    // backgroundColor: '#fff',
  },
  bellView: {
    marginLeft: 250,
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 2,
    marginTop: 20,
  },
  bell: {
    padding: 5,
    margin: 5,
    //   borderWidth: 1,
    //   borderColor: 'red',
  },
  // orderName: {
  //   fontSize: 34,
  //   alignSelf: 'center',
  //},
  headerView: {
    marginLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    height: 50,
    marginTop: 30,
  },
  headerText: {
    fontSize: 18,
  },
  cartsView: {
    padding: 5,
    elevation: 20,
  },
  subtotal: {
    height: 50,
    width: width,
  },
  profileDetails: {
    // flex: 1,
    // elevation: 20,
    flexDirection: 'row',
    height: 150,
    borderWidth: 3,
    borderColor: '#FAAF08',
    borderRadius: 15,
    marginHorizontal: 5,
    //marginVertical: 5,
  },
  profileImage: {
    marginTop: 10,
    marginLeft: 8,
    width: '25%',
    height: 80,
    backgroundColor: 'red',
    borderRadius: 15,
    resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: 'red',
    //flexDirection: 'row',
    // backgroundColor: '#FA4032',
  },
  profileText: {
    padding: '4%',
    //flexDirection: 'row',
  },
  profile: {
    padding: 4,
  },
  selector: {
    marginTop: '-15%',
    marginLeft: '-18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    height: '50%',
    //borderWidth: 2,
  },
  cancelBtn: {
    marginTop: '55%',
    alignItems: 'center',
    paddingTop: '5%',
    // borderWidth: 2,
    marginLeft: '-40%',
    marginRight: '60%',
    width: '80%',
    height: '70%',
    backgroundColor: '#FA4032',
    elevation: 2,
    borderRadius: 5,
  },

  // Carts selector styles

  selectorView: {
    marginHorizontal: 20,
    marginTop: 50,
    width: '80%',
    height: 30,
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'space-between',
  // borderColor: '#1118',
  // borderWidth: 1,
    elevation: 5,
    borderRadius: 10,
  },
  signText: {
      fontSize: 24,
      alignSelf: 'center',
      // borderColor: '#1118',
      // borderWidth: 1,
      paddingBottom: 5,
      marginBottom: -10,
      // borderRightColor: '#FAAF08',
  },
  sign: {
      width: 40,
      height: 40,
  },
  amountText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
  },
  amountView: {
      borderRightColor: '#FAAF08',
      borderLeftColor: '#FAAF08',
      borderRightWidth : 1,
      borderLeftWidth : 1,
      paddingHorizontal: 10,
      width: 50,
  },
  });

export default Carts;
