import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { cartTotalPriceSelector } from "../../redux/features/cart/selectors";
// import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//import Header from component folder- this takes props
import Header from "./Header";
// import Data from "../../assets/cartItems";
// import { Ionicons } from "@react";
import menuData from '../../data/menuData'
import { checkOut } from "../../redux/features/cart/checkOutSlice";

const amount = 0;

// import CartContainer from "../components/CartContainer";

const CartContainer = ({navigation, route}) => {
  const  OnCheckOut = () => {
    navigation.navigate('purchase');
  };
  const Homehandler = () => {
    return(
      navigation.navigate('Home')

    )
    
  }
  // const ContinueShop = () => {
  //   navigation.navigate('Home')
  // };
//   const login = () => {
//     navigation.navigate('SignUp');
// };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);
  

  function  checkOutHandler () {
    dispatch(checkOut());
    OnCheckOut();
  };

  // const finalprice = totalPrice * item.price
  
  // const dish = menuData;
  // let price = dish.price

  const AlertItem = () => {
    Alert.alert(
      "Are you sure you want to clear the cart?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => dispatch(clear()) },
      ],
      { cancelable: false }
    );
  };

  const renderStoreItems = ({ item }) => {
   
    // const finalPrice = item.price * item.quantity;
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage}
           source={ item.image }
            />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.title}</Text>
          <Text style={styles.storeItemPrice}>
          ₦{item.quantity * item.price}
            
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <View style={styles.decrement}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log("removed");
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}
              >
                <Text style={styles.decrementTxt}> -</Text>
                {/* <Ionicons name="md-remove" size={24} color="black" /> */}
              </TouchableOpacity>
              </View>

              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <View style={styles.increment}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}
              >
                {/* <Ionicons name="md-add" size={24} color="black" /> */}
                <Text style={styles.incrementTxt}> + </Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}
              >
                {/* <Ionicons name="md-trash" size={15} color="black" /> */}
                <Text style={styles.cartItemText}>
                   {/* <Ionicons name="md-trash" size={15} color="black" /> */}
                    Remove</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <Text style={styles.storeItemTitle}>My Cart</Text>
            <TouchableOpacity onPress={AlertItem}>
              <Text style={styles.storeItemPrice}>Clear cart</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View style={styles.cartFooter}>
              <View style={styles.checkout}>
                {cart.length === 0 ? (
                  <Text style={styles.emptyText}>Your cart is empty</Text>
                ) : (
                  <View style={styles.checkoutFull}>
                    <Text style={styles.checkoutText}>
                      Total:  ₦{totalPrice}
                    </Text>

                      <View style={{
                      margin: 20,
                      width: '60%',
                      alignItems: 'center',
                      // justifyContents: 'center',
                      marginHorizontal: '20%',
                    }}>
                      {/* <Button
                      title="Checkout"
                      color="coral"
                      onPress={OnCheckOut}
                    /> */}
                    <TouchableOpacity style={styles.CheckBtn} onPress={() => {checkOutHandler, console.log('checkout Clicked')}}>
                      <Text style={styles.CheckText}>Checkout</Text>
                    </TouchableOpacity>
                      </View>
                   
                    <View style={{
                      margin: 20,
                      width: '60%',
                      alignItems: 'center',
                      // justifyContents: 'center',
                      marginHorizontal: '20%',
                    }}> 
                    <Button
                    style={{
                      margin: 20,
                    }}
                      onPress={console.log('Continue shopping Clicked.')}
                      title="Continue Shopping"
                      color='orange'
                    />
                    </View>
                  </View>
                )}
              </View>
              <View style={{ height: 200 }} />
            </View>
          );
        }}
      />
    </View>
  );
};

const CartScreen = ({ navigation: { goBack } }) => {
  return (
    <SafeAreaView>
      {/* <Header headerIcon="chevron-back" onPressMenu={() => goBack()} /> */}
      <CartContainer />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    // borderColor: "orange",
    // borderWidth: 2,
    // broderColor: 'orange',
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
    elevation: 4,
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "#FA4032",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    // borderWidth: 1,
  },
  cartItemAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    // borderWidth: 1,
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white', 
   },
  decrement: {
    // backgroundColor: 'black',
    width: '15%',
    borderRightWidth: 2,
    alignItems: 'center',
  },
  decrementTxt: {
    fontSize: 20,
    fontWeight:  'bold',
    color: 'white', 
  },
  increment: {
    // backgroundColor: 'black',
    width: '15%',
    borderLeftWidth: 2,
    // borderWidth: 1,
    alignItems: 'center',
  },
  incrementTxt: {
    fontSize: 20,
    fontWeight:  'bold',
    color: 'white', 
  },
  cartItemRemove: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    width: '50%',
    marginHorizontal: '20%',
    marginTop: 5,
    height: 30,
    backgroundColor: 'orange',
    elevation: 5,
    borderRadius: 4,
  },
  cartItemRemoveButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    width: '100%',
    fontSize: 17,
    color: 'white',
  },
  cartItemText: {
    fontSize: 18,
    color: 'white',
  },
  cartFooter: {
    justifyContent: "space-between",
    // borderWidth: 1,
  },
  emptyText: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '90%',
    fontSize: 20,
  },
  checkout:{},
  checkoutFull:{},
  checkoutText:{
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  CheckBtn:{
    width: '50%',
    height: '40%',
    elevation: 4,
    // borderWidth: 2,
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FA4032'
  },
  CheckText:{
    alignItems: 'center',
    fontSize: 17,
    color : 'white',
  },
});
