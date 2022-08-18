/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ModeOfPayment = ({navigation}) => {
  const back = ()=>{
    navigation.navigate('Home');
  };
  return (
  <View style={{
    backgroundColor: '#fff',
    height: '100%',
  }}>
      <View>
      <TouchableOpacity onPress={back}>
        <View style={styles.goback}>
          <Icon
            name="chevron-back"
            size={30} />
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
        <Text style={styles.modeText}> Select mode of payment</Text>

        <TouchableOpacity style={styles.modeBtn}>
          <Text style={styles.modeBtnText}>Bank Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.modeBtn}>
          <Text style={styles.modeBtnText}> Pay With Card</Text>
        </TouchableOpacity>


      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    //flex: 1,
  },
  modeText: {
    fontSize: 25,
    marginBottom: 30,
  },
  goback: {
    marginTop: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    //backgroundColor: '#d1d1d1',
    elevation: 1,
    width: '10%',
  },
  modeBtn: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FA4032',
    width: 200,
    height: 50,
    marginVertical: 10,
  },
  modeBtnText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default ModeOfPayment;
