/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, Text, TextInput, Dimensions, ScrollView, Button, TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import { auth } from '../../../firebase';


const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  // This function will be triggered when the button is pressed
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  }
  // const loginSet = () => {
  //   navigation.navigate('Home');
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const logInHandler = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with', user.email);
    })
    .catch(error => alert(error.messages))
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
      if (user) {
      navigation.replace('Home');
    }
  });

    return unSubscribe;
    }, []);

    function onPressCombined () {
      logInHandler();
      toggleLoading();
    };
  return (
    <ScrollView style={{
      backgroundColor: '#fff',
    }}>
      <View
    style={{
      backgroundColor: '#fff',
      width: width,
      height: height,
      //alignItems:'center',
      paddingHorizontal: 20,
    }}>
      <View
      style={{
          // borderColor: 'red',
          // borderWidth: 2,
          width: '60%',
          //margin: 20,
          //alignSelf: 'center',
          //justifyContent: 'center',
          marginTop: 150,
          height: '15%',
      }}>
        <Text>Proceed with your </Text>
        <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}> Login</Text>
      </View>

      <View
      style={{
        marginTop: 30,
        //marginLeft: 20,
      }}>
        <Text>Username</Text>
        <TextInput
        placeholder=""
        value={email}
        onChangeText={text => setEmail(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
        }}
      />
       <Text>Password</Text>
        <TextInput
        placeholder=""
        value={password}
        onChangeText={text => setPassword(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
            //marginTop: 10,
            //alignSelf: 'center',
            //justifyContent: 'center',
        }}
        secureTextEntry
      />
      <View
      style={{
        marginTop:15,
          }}>
        {/* <Button
        title= "Login"
        color="#FA4032"
        onPress={logInHandler} /> */}
        <View style={styles.container}>
      <TouchableOpacity onPress={() => onPressCombined()}>
        <View
          style={{
            ...styles.button,
            backgroundColor: isLoading ? "coral" : "orange",
          }}
        >
          {isLoading && <ActivityIndicator size="small" color="yellow" />}
          <Text style={styles.buttonText}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </View>

        <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginTop: 65,
          alignSelf: 'center',
        }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 40,
    // borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
});
