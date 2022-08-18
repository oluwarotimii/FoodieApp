import React from "react";
import {Text, StyleSheet,TouchableOpacity, View, Image} from 'react-native';
import menuData from "../../data/menuData";
import { useDispatch, useSelector } from 'react-redux';
import { increment, clear, decrement, removeItem } from '../../redux/features/cart/cartSlice';
import { cartTotalPriceSelector } from '../../redux/features/cart/selectors';
import { useState } from 'react';



const CartRender = ({item}) => {
  const dispatch = useDispatch();
  const dishCart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
    const [amount, setAmount] = useState(0);

    const onPressAdd = () => {
        setAmount(amount + 1);
    };
    const onPressMinus = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        } else {
            setAmount(amount - 0 );
        }
  
    };
    return ( 
      <View>
          {dishCart.map(({item: item}) => {

<View style={styles.cartsView}
// key={dish.id}
>
<TouchableOpacity>
<View style={styles.profileDetails}>
<Image
style={styles.profileImage}
// source={}
/>
<View style={styles.profileText}>
<Text style={styles.profile}> Item Title</Text>
<Text> # Item Price</Text>

<View style={styles.selector}>
<TouchableOpacity style={styles.cancelBtn}
onPress={() => {
  dispatch(removeItem(item.id));
}}
>
  <Text style={{
    color: '#fff',
  }}>Remove </Text>
</TouchableOpacity>
{/* <CartsSelector  /> */}
{/* Carts Selector */}
<View>
  <View style={styles.selectorView}>
    <TouchableOpacity style={styles.sign} 
    onPress={() => {
      dispatch(increment(item.id));
    }}>
      <Text style={styles.signText}> - </Text>
   </TouchableOpacity>
  <View style={styles.amountView}>
      <Text style={styles.amountText}> {amount}</Text>
  </View>
  <TouchableOpacity style={styles.sign}  
  onPress={() => {
  if (amount === 1) {
    dispatch(removeItem(item));

    console.log('REMOVED');
    return;
  }
  dispatch(decrement(item.id))
}}>
    <Text style={styles.signText}> + </Text>
  </TouchableOpacity>
</View>
</View>
{/* cart selector */}
</View>
</View>
</View>
</TouchableOpacity>
</View>
})}
      </View>
)
};
const styles = () => StyleSheet.create({
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
    
})
export default CartRender;
