/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useRef, useAnimatedRef} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, ImageStore, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import slide from './slide';

 const Images = [
    {
    id: 1,
    title: 'Pizza ',
    image: require('../../images/slide/pizza.jpg'),
},
  {
    id: 2,
    title: 'Hamburger',
    image: require('../../images/slide/hams.jpg'),
  },
  {
    id: 3,
    title: 'Fruit Salad',
    image: require('../../images/slide/fruitsaad.jpg'),
  },
  {
    id: 4,
    title: 'French Fries',
    image: require('../../images/slide/fries.jpeg'),
  },
  {
    id: 5,
    title: 'Nuggets',
    image: require('../../images/slide/nuggets.png'),
  },
];

const {width, height} = Dimensions.get('window');
const Carousel = () => {
    const [imgActive, setimgActive] = useState(0);
    onchange = (nativeEvent) => {
        // if (nativeEvent) {
        //     const swipe = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        //     if (swipe != imgActive) {
        //         setimgActive(swipe);
        //     }
        // }

    };
    // const aref = useAnimatedRef();
    // aref.current.scrollTo({ x, y });
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
            <TouchableOpacity>
            <ScrollView
            // onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal={true}
            style={styles.wrap}
            // ref={scrollTo}
            // onContentSizeChange={() => aref.current.scrollTo({x, y, duration: 500, animated: true})}
            >
               {Images.map((item) =>
               <Image
               key={item.id}
               resizeMode="stretch"
               style={styles.wrap}
               source= {item.image}
               />)}

            </ScrollView>
            </TouchableOpacity>
            <View style={styles.wrapDot}>
                {
                    Images.map((item, index) =>
                    <Text
                    key={item.id}
                    style={imgActive === index ? styles.dotActive : styles.dot}
                    > ● </Text>
                    )
                }
            </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   wrap: {
    width: width,
    height: height * 0.25,
   },
   wrapDot: {
    position: 'absolute',
    bottom :0,
    flexDirection: 'row',
    alignSelf: 'center',
   },
   dotActive : {
    margin: 3,
    color: 'white',
   },
   dot: {
    margin: 3,
    color: 'black',
   },
});
export default Carousel;

