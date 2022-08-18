import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";


import menuData from '../data/menuData';

// const url = "https://course-api.com/react-useReducer-cart-project";

const StoreContainer = ({ navigation}) => {
  const dispatch = useDispatch();
  const [Data, setData] = useState();

  // useEffect(() => {
  //   // console.log("cart", cart);
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []);

  console.log(Data);

  const StoreItems = () => {
    let DishData = menuData.slice(0,26)
   const renderStoreItems = ({ item }) => {
    let key = item.id
    let name = item.title
    let price = item.price
    let image = item.image
    let carousel = item.images
    let ingredients = item.ingredients

      return (
        <View>
         <TouchableOpacity onPress={() => navigation.navigate('Store-Product', { key, name, price, image, carousel, ingredients})}>
         <View style={styles.storeItem}>
          <View style={styles.storeItemImg}>
            <Image style={styles.storeItemImage} 
            source={ item.image } 
            />
          </View>
          <View style={styles.storeItemInfo}>
            <Text style={styles.storeItemTitle}>{item.title}</Text>
            <Text style={styles.storeItemPrice}> ₦{item.price}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(item));
              }}
              style={styles.addToCart}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
         </TouchableOpacity>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          data={DishData}
          renderItem={renderStoreItems}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View style={{ height: 200 }} />}
        />
      </View>
    );
  };
  return (
    <View style={{
      marginTop: 50,
    }}>
      <Text style={styles.menu}> MENU </Text>
      <StoreItems />
    </View>
  );
};

export default StoreContainer;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 1,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
    marginVertical: 0,
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
    marginLeft: '10%',
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
    marginLeft: '30%',
  },
  addToCart: {
    width: '60%',
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    marginLeft: '10%',
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  menu: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    marginLeft: '5%',
  },
});
