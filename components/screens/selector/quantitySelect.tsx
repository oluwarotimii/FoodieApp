/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {View, Text,  TouchableOpacity, StyleSheet} from 'react-native';

const QuantitySelector = () => {
    const [amount, setAmount] = useState(1);

    const onPressAdd = () => {
        setAmount(amount + 1);
    };
    const onPressMinus = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        } else {
            setAmount(amount - 0 );
        }

    };
  return (
    <View>
      <View style={styles.selectorView}>
        <TouchableOpacity style={styles.sign} onPress={() => onPressMinus()}>
          <Text style={styles.signText}> - </Text>
        </TouchableOpacity>
        <View style={styles.amountView}>
            <Text style={styles.amountText}> {amount}</Text>
        </View>
        <TouchableOpacity style={styles.sign} onPress={() => onPressAdd()}>
          <Text style={styles.signText}> + </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    selectorView: {
      marginHorizontal: 10,
      marginTop: 10,
      width: '40%',
      height: 30,
      flexDirection: 'row',
      margin: 60,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent: 'space-between',
    // borderColor: '#1118',
    // borderWidth: 1,
      elevation: 5,
      borderRadius: 10,
    },
    signText: {
        fontSize: 24,
        alignSelf: 'center',
        // borderColor: '#1118',
        // borderWidth: 1,
        paddingBottom: 5,
        marginBottom: -10,
        // borderRightColor: '#FAAF08',
    },
    sign: {
        width: 40,
        height: 40,
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    amountView: {
        borderRightColor: '#FAAF08',
        borderLeftColor: '#FAAF08',
        borderRightWidth : 1,
        borderLeftWidth : 1,
        paddingHorizontal: 10,
        width: 50,
    },
});
export default QuantitySelector;
