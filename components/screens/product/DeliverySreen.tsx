import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { delivery } from '../../functions/adress';
import { setDelivery } from '../../functions/adress';


const  DeliveryDetails = () => {
  return (
    <View>
      <Text style={styles.inputText}> Add Your Delivery Details</Text>
      <TextInput 
      placeholder=" "
      multiline
      defaultValue={delivery}
      onChangeText={newText => setDelivery(newText)}
      style={styles.input}
      />
      {/* <Text>{setDelivery}</Text> */}
      <View>
        <Button 
        title= 'Add Adress'
        color={'orange'}
        onPress={() => console.log({setDelivery})}/>
      </View>
     </View>
  );
};

export default DeliveryDetails;

const styles = StyleSheet.create({
  input: {
    marginHorizontal: '1%',
    marginTop: '10%',
    height: '70%',
    width: '98%',
    borderWidth: 1,
  },
  inputText: {marginTop: '3%',
    fontSize: 18,
    fontWeight: 'bold',
  },
})