import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import {clearCart}
// import { clearCart } from "../redux/features/cart/cartSlice";

//import CartItems
import CartItems from "./CartItems";
import menuData from "../../data/menuData"

const CartContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

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
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          // dispatch(clearCart())
        },
      ],
      { cancelable: false }
    );
  };

  if (amount < 1) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        <Text style={styles.emptyCart}>Your cart is empty</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.cartContainer}>
      <View>
        <Text style={styles.cartTitle}> Cart</Text>
      </View>
      <View style={styles.cartItems}>
        {menuData.map((item) => (
          <CartItems key={item.id} item={item} {...item} />
        ))}
      </View>
      <View style={styles.cartTotal}>
        <Text style={styles.cartTotalTitle}>Total</Text>
        <Text style={styles.cartTotalPrice}> ₦{total.toFixed(0)}</Text>
      </View>
      <TouchableOpacity onPress={AlertItem} style={styles.clearCart}>
        <Text style={styles.clearCartText}>Clear Cart</Text>
      </TouchableOpacity>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};

export default CartContainer;

const styles = StyleSheet.create({
  cartContainer: {
    backgroundColor: "#fff",
  },
  cartItems: {},
  cartTotal: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    borderTopColor: "#eee",
    borderTopWidth: 1,
  },
  emptyCart: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  clearCart: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FA4032",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  cartTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
