/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Basket from '../cart/Basket';


const {width, height} = Dimensions.get('windows');
const Delivery = (props: { itemsPrice: any; taxPrice: any; shippingPrice: any; TotalPrice: any; }) => {
  const {itemsPrice, taxPrice, shippingPrice, TotalPrice} = props;
    return (
        <View style={{
            padding: 5,
            height: '100%',
            width: '100%',
        }}>
             <View>
      <TouchableOpacity
    //   onPress={back}
      >
        <View style={{
            marginTop: 15,
            marginLeft: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#d1d1d1',
            //backgroundColor: '#d1d1d1',
            // elevation: 1,
            width: '10%',
        }}>
          <Icon
            name="chevron-back"
            size={30} />
        </View>
      </TouchableOpacity>
      </View>
             <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: '2%',
                marginTop: '1%',
                marginBottom: '5%',
             }}> Checkout</Text>
            {/* <Text> Adress details</Text> */}
            <View style={{
                borderBottomWidth: 3,
                width: '100%',
                height: '20%',
                borderColor: '#FAAF08',
                borderBottomColor: '#FAF08',
                borderTopWidth: 3,
                borderLeftWidth: 0,
                borderRightWidth: 0,
            }}>
                <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: '2%',
                marginTop: '1%',
                // marginBottom: '5%',
             }}>Shipping Address</Text>
                <Text style={{
                    fontSize: 16,
                    padding: 5,
                }}>University of Ilorin Permanent Site, behind Unilorin Healthcare center, Tanke.</Text>
            </View>

            {/* <View style={{
                // borderWidth: 1,
                marginTop: 5,
                width: '100%',
                height: '20%',
            }}>
                <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: '2%',
                marginTop: '1%',
                }}> Select payment method</Text>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    borderWidth: 3,
                    alignSelf: 'center',
                    width: '40%',
                    height: '30%',
                    marginTop: 15,
                    backgroundColor: '#fff',
                    borderColor: '#FA4032',
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                    }}>Pay with Cash</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    alignItems: 'center',
                    borderWidth: 3,
                    alignSelf: 'center',
                    width: '40%',
                    height: '30%',
                    backgroundColor: '#fff',
                    borderColor: '#FA4032',
                    marginTop: 10,
                }}
                >
                    <Text
                    style={{
                        fontSize: 18,
                        color: 'black',
                    }}>Pay with Card</Text>
                </TouchableOpacity>
            </View> */}

            {/* <Text>Select delivery method</Text> */}
            <View style={styles.checkOut}>
            {/* <View style={styles.check}>
              <Text style={styles.checkText}> Check Out </Text>
            </View> */}
            <Text
            style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: '2%',
                marginTop: '2%',
                }}>Prize details</Text>

            <View style={styles.TotalPrize}>
            <Text style={styles.prizeText}> {itemsPrice} </Text>
            <Text style={styles.prizeText}>  Delivery : # 1,200</Text>
            <Text style={styles.prizeText}>  Total Prize : # 12,000</Text>
            </View>
            <TouchableOpacity style={styles.payBtn}>
            <Text style={styles.payTxt}> Pay Now (TotalPrice) </Text>
            </TouchableOpacity>
          </View>
            {/* <Text>button for next screen payment</Text> */}
            {/* <Text>add food voucher option</Text>  */}
        </View>
    );
};
const styles = StyleSheet.create({
    checkOut: {
        borderWidth: 3,
        width: '100%',
        height: '30%',
        // elevation: 4,
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal:'0.%',
        borderColor: '#FAAF08',
      },
      payBtn:{
        marginTop: 5,
        elevation: 2,
        borderRadius: 10,
        // borderWidth: 1,
        alignSelf: 'center',
        width: '55%',
        backgroundColor: '#FA4032',
        color: '#fff',
        // padding: 5,
        paddiingBottom: 5,
        height: 35,
        marginBottom: 5,
      },
      payTxt: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 17,
        paddingTop: 5,
      },
      check: {
        margin: 5,
        // borderWidth: 1,
        width: '25%',
        height: '10%',
      },
    //   checkText: {
    //     marginTop: 10,
    //     fontSize: 20,
    //     fontWeight: 'bold',
    //   },
      TotalPrize: {
        margin: 5,
        // borderWidth: 1,
        width: '100%',
        height: '50%',
      },
      prizeText: {
        fontSize: 17,
        padding: 5,
      },
    
})
export default Delivery;