import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Intro from '../intro/introPage';
import SignUp from '../intro/SignupPage';
import Login from '../intro/loginScreen';

const Stack = createStackNavigator();

const PrimaryStack = () => {
    return(
       <Stack.Navigator 
         screenOptions={{ 
           headerShown: false, 
         }}> 
            <Stack.Screen name="Welcome" component={Intro} /> 
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Log in" component={Login} />  
       </Stack.Navigator>
      
    );
};
export default PrimaryStack;