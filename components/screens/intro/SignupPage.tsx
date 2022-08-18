/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, Dimensions, ScrollView, Button, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import {auth} from '../../../firebase';
// import { useNavigation } from '@react-navigation/native';
import { firstName, setFirstName } from '../../functions/functions';
import { lastName, setLastName } from '../../functions/functions';


const {height, width} = Dimensions.get('window');


const SignUp = ({navigation}) => {
  const logInHandler = () => {
    navigation.navigate('Log in');
  };
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation;
  

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
      if (user) {
      navigation.replace('Home');
    }
  });

    return unSubscribe;
    }, []);

  const signUpHandler = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
    console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message));
  };
  function onPressCombined () {
    signUpHandler();
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
      paddingHorizontal: 25,
      paddingVertical: 25,
    }}>
      <View
      style={{
          // borderColor: 'red',
          // borderWidth: 2,
          width: '60%',
          //margin: 20,
          //alignSelf: 'center',
          //justifyContent: 'center',
          marginTop: 90,
          height: '15%',
      }}>
        <Text style={{
            color: '#5c5a5a',
        }}>create an Account </Text>
        <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}> Register </Text>
      </View>

      <View
      style={{
        marginTop: 10,
        //marginLeft: 20,
      }}>
        {/* <Text style={{
            color: 'black',
        }}>Last Name</Text>
        <TextInput
        placeholder=""
        // value={lastName}
        onChangeText={text => setLastName(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
        }}
      />

        <Text style={{
            color: 'black',
        }}>First  Name</Text>
        <TextInput
        placeholder=""
        // value={firstName}
        // onChangeText={text => setFirstName(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
        }}
      /> */}

      <Text style={{
          color: 'black',
      }}>Email</Text>
        <TextInput
          placeholder=""
          value={email}
          onChangeText={text => setEmail(text) }
          style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
            //marginTop: 10,
            //alignSelf: 'center',
            //justifyContent: 'center',
        }}
      />
       <Text style={{
          color: '#5c5a5a',
       }}>Password</Text>
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

      {/* <Text style={{
          color: '#5c5a5a',
      }}> Confirm Password</Text>
        <TextInput
        placeholder="Password"
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
      /> */}
      <View
      style={{
        marginTop:15,
        marginBottom: 130,
          }}>
        <Button
        title= "Register"
        color="#FA4032"
        onPress={signUpHandler} />

        {/* <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginTop: 15,
          alignSelf: 'center',
          borderColor: 'red',
          borderWidth: 1,
          paddingHorizontal: 20,
          width: '70%',
          height: '15%',
          backgroundColor: '#FA4032',
        }}>
          <Text
          style={{
            alignSelf: 'center',
            color: '#fff',
          }}> Continue with Google</Text>
        </TouchableOpacity> */}

        {/* <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginTop: 15,
          marginBottom: 10,
          alignSelf: 'center',
          borderColor: 'red',
          borderWidth: 1,
          paddingHorizontal: 20,
          width: '70%',
          backgroundColor: '#FA4032',
          height: '15%',
        }}>
          <Text
          style={{
            alignSelf: 'center',
            color: '#fff',
          }}> Continue with Facebook</Text>
        </TouchableOpacity> */}

      <View style={{
        //marginBottom: 30,
        marginTop: 20,
      }}>
      <TouchableOpacity onPress={logInHandler} style={{
        alignSelf: 'center',
        marginVertical: 20,
      }}>
        <Text style={{
           color: '#5c5a5a',
        }}> Already have an account? Login</Text>
      </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );};
export default SignUp;
