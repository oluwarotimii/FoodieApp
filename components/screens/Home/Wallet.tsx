/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, StyleSheet,  TouchableOpacity } from 'react-native';
  import FontAwesome from 'react-native-vector-icons/Octicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Wallet = ({navigation}) => {
  const Payment = () => {
    navigation.navigate('Pay');
};
const Notification = () => {
  navigation.navigate('notification');
};
  return (
    <ScrollView>
      <View style={styles.bellView}>
        <TouchableOpacity style={styles.bell} onPress={Notification}>
            <FontAwesome
            name = "bell"
            color="#1118"
            size={25}
            />
            {/* <Text> Bell Icon</Text> */}
          </TouchableOpacity>
        </View>

          {/* //walletDetails */}

      <View style={styles.walletDetails}>
        <View style={styles.balance}>
          <Text style={styles.addText}>
          <MaterialCommunityIcons
          name= "wallet"
          color= "#1119"
          size={38}
          style={styles.walletIcon} /> 4,000</Text>
        </View>

        <TouchableOpacity style={styles.addMoney} onPress={Payment}>
        <Text style={styles.addMoneyText}> Add money to Wallet
        {/* <MaterialCommunityIcons
          name= "wallet-plus"
          color= "#1119"
          size={25} />  */}
          </Text>
        </TouchableOpacity>


        </View>

        <View style={styles.walletHistory}>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>
        <Text style={styles.history}> Wallet History</Text>

        </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  walletDetails: {
    marginTop: -20,
    paddingTop: 10,
    paddingBottom: 70,
    width: '100%',
    //flexDirection: 'row',
    //borderColor: 'red',
    // borderWidth: 1,
  },
  balance: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    //borderWidth: 1,
    //borderColor: 'red',
    height: 70,
    borderRadius: 15,
    width: 150,
    elevation:2,
    alignContent: 'center',
  },
  walletIcon:{
    margin: 13,
  },
  addMoneyText: {
    fontSize: 18,
    color: '#fff',
  },
  addMoney: {
    //borderColor: 'red',
    // borderWidth: 1,
    marginTop: 20,
    width: '50%',
    paddingTop: 5,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: '#FA4032',
    elevation: 3,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
  },
  addText: {
    padding: 10,
    fontSize: 24,
    alignSelf: 'center',
    color: 'black',
  },
  bellView: {
    marginLeft: 350,
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
  walletHistory: {
    marginTop: 10,
    borderColor: '#1117',
    borderWidth: 5,
    borderRadius: 30,
    height: '100%',
  },
  history: {
    padding: 10,
    fontSize: 14,
    marginLeft: 5,
  },
});
export default Wallet;
