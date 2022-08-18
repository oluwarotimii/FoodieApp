/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import menuData from '../../data/menuData';
import FontAwesome from 'react-native-vector-icons/Octicons';
import { useRoute } from '@react-navigation/native';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window');

const Menu = ({navigation, route}) => {
  const dispatch = useDispatch();
  
  // let data = menuData
  // data.forEach((item, index, title) => {
  //   item.id= index;
  //   item.image =index;
  //   item.price= index;
  //   item.title= title;
  // })
  return (
    <ScrollView>
      <View>
        <View style={styles.bellView}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Search"
              //autoComplete=
              //caretHidden = true
              //onSubmit= ""
              style={styles.emailInput}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.bell}>
            <FontAwesome
              name="search"
              color="#1118"
              size={20}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bell}>
            <FontAwesome name="bell" color="#1118" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      {menuData.map((dish) => {
        return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Product', { paramKey: dish })}>
            <View style={styles.container} key={dish.id}>
            <View style={styles.dish}>
              <Text style={styles.dishText}> {dish.title} </Text>
              <View style={styles.selector}>
                <View>
              
                    <Text style={styles.price}> 'N' + {dish.price}</Text>
            
                    <View>
                    <TouchableOpacity style={styles.addCart}
                    onPress={(dish) =>  addToCart(dish)}>
                      <Text style={styles.addCartText}> Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                    {/* <Text style={styles.selectTextMinus}> - </Text> */}
                </View>
              </View>
              
              <View style={styles.imageView}>
              <Image
                source={dish.image}
                style={styles.image}
                // resizeMode="contain"
              />
              </View>
            </View>
          </View>
            </TouchableOpacity>
          </View>
        
        );
       })} 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bellView: {
    marginLeft: 0,
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
  searchIcon: {
    // padding: 5,
    marginLeft: -25,
    margin: 5,
  },
  emailInput: {
    margin: 5,
    borderColor: '#d1d1d1',
    width: 200,
    height: 40,
    borderWidth: 3,
    borderRadius: 15,
    backgroundColor: '#Fff',
  },
  container: {
    marginBottom: 20,
  },
  dish: {
    flexDirection: 'column',
    marginHorizontal: 2,
    borderwidth: 7,
    // borderColor: 'red',
    backgroundColor: '#d1d1d1',
    width: '100%',
    height: 180,
    // paddingBottom: 20,
  },
  dishText: {
    marginTop: '2%',
    marginLeft: '60%',
    fontSize: 20,
  },
  imageView: {
    marginTop: '-40%',
    width: '40%',
    height: '80%',
    // borderWidth: 2,
  },
  image: {
    // justifyContent: 'space-evenly',
    // marginTop: '-15%',
    marginLeft: '2%',
    // marginBottom: '15%',
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    // resizeMode: 'contain',
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
    marginLeft: '55%',
    // fontSize: 18,
    // borderWidth: 2,
    width: '30%',
    height: '70%',
  },
 
  addCart: {
    marginTop: '50%',
    marginLeft: '5%',
    // borderWidth: 2,
    backgroundColor: '#FAAF08',
    height: '40%',
    width: '105%',
    justifyContent: 'center',
    borderRadius: 10,
  },
  price: {
    fontSize: 18,
    colour: 'black',
  },
  addCartText: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Menu;
