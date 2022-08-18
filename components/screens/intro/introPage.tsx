/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const Intro = ({navigation}) => {
    const login = () => {
        navigation.navigate('SignUp');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}> Welcome,</Text>
            {/* <Image
            source={require('../Images/logo.png')}
            style={styles.image} /> */}
            <TouchableOpacity style={styles.startButton} onPress={login}>
                <Text style={styles.startText}> Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: height,
    },
    welcomeText: {
        fontSize: 24,
        marginTop: "50%",
        fontFamily: 'san-serif',
        padding: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    startButton: {
        marginTop: "30%",
        backgroundColor: '#FA4032',
        width: width - 220,
        height: 40,
        paddingTop: 8,
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 8,
        elevation: 2,
        alignSelf: 'center',
    },
    startText: {
        color: '#fff',
    },
    image: {
        marginTop: 50,
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        backgroundColor: 'red',
      },
});
export default Intro;
