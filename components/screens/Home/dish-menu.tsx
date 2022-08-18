/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {View, Text, Dimensions, StyleSheet,ScrollView, TextInput,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import menuData from '../../data/menuData';
import FontAwesome from 'react-native-vector-icons/Octicons';


const {height, width} = Dimensions.get('window');

const DishMenu = ({navigation}) => {
  const menuHandler = () => {
    navigation.navigate('Product');
   };
  // const [product, setProduct] = useState([menuData]);
  // const navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <View style={styles.bellView}>

       <KeyboardAvoidingView>
       <TextInput
      placeholder= "Search"
      //autoComplete=
      //caretHidden = true
      //onSubmit= ""
      style={styles.emailInput}
       />
       </KeyboardAvoidingView>
        <TouchableOpacity style={styles.bell}>
        <FontAwesome
            name="search"
            color="#1118"
            size={20}
            style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bell}>
            <FontAwesome
            name = "bell"
            color="#1118"
            size={25}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.ordersList}>
{menuData.map((dish) => {
    return (
        <View style={styles.orderView}
        key={dish.id}>
        <TouchableOpacity style={styles.foodOrder} 
        onPress={() => navigation.navigate('Product', {item: dish} )}>
            <Image
            source={dish.image}
            style={styles.foodImage} />
            <View style={styles.cartshandle}>
            <Text style={styles.foodName}> {dish.title} </Text>
              <Text> Text +</Text>
              <Text> Text +</Text>
              <Text> Text +</Text>
            </View>
            </TouchableOpacity>
        </View>

    );

})}
</View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bellView: {
    marginLeft: 0,
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
searchIcon: {
 // padding: 5,
  marginLeft: -25,
  margin: 5,
},
emailInput: {
  margin: 5,
  borderColor: '#1111',
  width: 200,
  height: 40,
  borderWidth: 1,
  borderRadius: 15,
  backgroundColor: '#Fff',
},
  foodView : {
    padding: 10,
  },
  foodItem : {
    backgroundColor: '#FEF3E2',
  },
//   foodImag: {
//     width: 100,
//     height: 100,
//   },
  foodName: {
    fontSize: 18,
    alignContent: 'flex-end',
  },
  ordersList: {
    // // borderWidth: 1,
    // // borderColor: 'red',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // padding: 10,
    // marginVertical: 5,
    // flexWrap: 'wrap',
    width: width,
    // borderWidth: 1,
    // borderColor: 'red',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    flexWrap: 'wrap',
    marginBottom: 100,
  },
  orderView: {
    // width: 135,
    // height: 135,
    // margin: 5,
    // backgroundColor: '#1111',
    width: '100%',
    height: 200,
    margin: 5,
    flexDirection: 'column',
    // backgroundColor: '#1111',
    borderWidth: 2,
    borderColor: 'citrus',
    marginBottom: 20,
  },
  popularOrdersText: {},
  foodImage: {
    // flex: 1,
    // width: 90,
    // height: 90,
    width: '40%',
    height: '80%',
    marginBottom: 5,
    // resizeMode: 'contain',
    //aspectRatio: 3.5,
    borderWidth: 2,
  },
  foodOrder: {
      margin: 2,
      padding: 8,
      //backgroundColor: '#1111',
      elevation: 2,
  },
  cartshandle: {
    marginTop: '-2%',
    marginLeft: '60%',
  },
});
export default DishMenu;
