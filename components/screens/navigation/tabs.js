/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wallet from '../Home/Wallet';
import Home from '../Home/HomeScreen';
import Menu from '../Home/menuScreen';
import Carts from '../Home/carts';
import Entypo from 'react-native-vector-icons/Entypo';
import Profile from '../Home/profile';
// import ShoppingCartIcon from '../../../containers/shoppingCartIcon';
import CartScreen from '../carts/CartScreen';
import DishMenu from '../../store/Homescreen';
import TopsTab from './TopsTab';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: '#fff',
          height: 65,
        position: 'absolute',
          },
        }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel:({ focused,color })=>(
        <Text style={{color:focused ?  '#FAAF08' : '#1118'}}>
          Home
          </Text>),
        tabBarIcon:({focused}) => (
        <View>
            <Entypo
          name="home"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text 
          style={{
            // color: {fo  '#FAAF08' : '#1118'}
          }} > Home </Text> */}
        </View>

        ),
      }}/>

      <Tab.Screen name="Menu" component={TopsTab}
      options={{
        tabBarLabel:({ focused,color })=>(
          <Text style={{color:focused ?  '#FAAF08' : '#1118'}}>
            Menu
            </Text>),
        tabBarIcon:({focused}) => (

          <View>
            <Entypo
          name="menu"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text style={styles.tabText}> Menu </Text> */}
          </View>

        ),
      }}/>

<Tab.Screen name="Carts" component={CartScreen}
      options={{
        tabBarLabel:({ focused,color })=>(
          <Text style={{color:focused ?  '#FAAF08' : '#1118'}}>
            Carts
            </Text>
            ),
        tabBarIcon:({focused}) => (

          <View>
            {/* <View style={{ position: 'absolute', height: 30, width: 30,
              borderRadius: 15,
              backgroundColor: 'rgba(95,197,123,0.8)',
              right: 15,
              bottom: 15,
              alignItems: 'center',  justifyContent:'center'}}> */}
              {/* <Text>0</Text> */}
              {/* <ShoppingCartIcon /> */}
            {/* </View> */}
            {/* <Text style={{color: '#d1d1d1'fontSize: 13}}>{cartItems.length}</Text> */}
           <Entypo
          name="shopping-cart"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text style={styles.tabText}> Cart </Text> */}
          </View>

        ),
      }}/>

      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel:({ focused,color })=>(
          <Text style={{color:focused ?  '#FAAF08' : '#1118'}}>
            Profile
            </Text>),
        tabBarIcon:({focused}) => (

          <View>
            <Entypo
          name="user"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'}
          style={{}} />
          {/* <Text style={styles.tabText}> Wallet </Text> */}
          </View>

        ),
      }}
      />
    </Tab.Navigator>
  );
};

// const mapStateTOProps =(state) => {
//   return{
//     cartTItems: state
//   }
// }

export default  Tabs;
