/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../../../firebase';
import { setFirstName } from '../../functions/functions';
import { setLastName, lastName } from '../../functions/functions';

const {height, width} = Dimensions.get('window');
const Profile = ({navigation}) => {
  const Notification = () => {
    navigation.navigate('notification');
  };
  const BackHandler = () => {
    navigation.navigate('Home');
  };
  const DelivHandler = () => {
    navigation.navigate('Delivery')
  }
  const handleSignOut = () =>{
    auth
    .signOut()
    .then(() => {
      navigation.replace('Primary');
    })
    .catch(error => alert(error.message))
  };
  return (
    <ScrollView>
      <View>
      <TouchableOpacity onPress={BackHandler}>
        <View style={styles.goback}>
          <Icon
            name="chevron-back"
            size={30} />
        </View>
      </TouchableOpacity>
    </View>
      <View style={styles.parentContainer}>
      <View style={styles.profileDetails}>
      <Image
      style={styles.profileImage}
      source={require('../../images/profile.png')}
      />
      <View style={styles.profileText}>
      <Text style={styles.profile}> {lastName} </Text>
      {/* <Text style={styles.profile}> User ID </Text> */}
      <Text style={styles.profile}> Email : {auth.currentUser?.email}</Text>
      </View>
      </View>

      <View style={styles.body}>

       <TouchableOpacity style={styles.items} onPress={Notification}>
       <View>
          <Text style={styles.itemsText}> <Feather name="bell" size={20}/> Notification  </Text>
        </View>
       </TouchableOpacity>


       <TouchableOpacity style={styles.items}>
       <View>
          <Text style={styles.itemsText}> <Feather name="settings" size={20}/> Settings  </Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.items} onPress={DelivHandler}>
       <View>
          <Text style={styles.itemsText}> <Feather name="user" size={20}/> Delivery details  </Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.items}>
       <View>
          <Text style={styles.itemsText}> <Feather name="share-2" size={20}/> Share with a Friend  </Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity style={styles.items} onPress={handleSignOut}>
       <View>
          <Text style={styles.itemsText}> <Feather name="log-out" size={20}/> Sign Out</Text>
        </View>
       </TouchableOpacity>

       <TouchableOpacity />

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {},
  profileDetails: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
  },
  goback: {
    marginTop: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    backgroundColor: '#d1d1d1',
    // elevation: 1,
    width: '10%',
  },
  profileImage: {
    marginTop: 20,
    marginLeft: 8,
    width: 80,
    height:   80,
    borderRadius: 60,
    resizeMode: 'contain',
  },
  profileText: {
    padding: 10,
    fontSize: 28,
    color: 'black',
  },
  profile: {
    padding: 0,
    fontSize: 18,
  },
  body: {
    // marginTop: 20,
    height: '80%',
    width: '100%',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  items: {
    marginTop: 20,
    // borderWidth: 2,
    // borderColor: 'red',
    width: '100%',
    // height: '30%',
    // backgroundColor:'#d1d1d1',
    // elevation: 1,
  },
  itemsText: {
    fontSize: 20,
    padding: 10,
    color: '#134',
  },
});
export default Profile;
