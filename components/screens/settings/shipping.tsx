/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
import React from 'react';
import { View,  TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



const Shipping = () => {
    return (
        <View>
          <View>
        <TouchableOpacity
      //   onPress={back}
        >
          <View style={{
              marginTop: 15,
              marginLeft: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#d1d1d1',
              //backgroundColor: '#d1d1d1',
              // elevation: 1,
              width: '10%',
          }}>
            <Icon
              name="chevron-back"
              size={30} />
          </View>
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            
        </TouchableOpacity>
          </View>
        </View>
        <Button title="Add an Address"/>
        </View>
    );
};

export default Shipping;