/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Notification = ({navigation}) => {
    const back = ()=>{
        navigation.navigate('Home');
      };
  return (
    <ScrollView>
        <View>
        <View>
      <TouchableOpacity onPress={back}>
        <View style={{
            marginTop: 15,
            marginLeft: 10,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#d1d1d1',
            //backgroundColor: '#d1d1d1',
            elevation: 1,
            width: '10%',
        }}>
          <Icon
            name="chevron-back"
            size={30} />
        </View>
      </TouchableOpacity>
    </View>
      <Text> Hello </Text>
    </View>
    </ScrollView>
  );
};
export default Notification;
