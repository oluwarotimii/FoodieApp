import React from 'react';
import { View, Text } from 'react-native';

export default function Time () {
   var Dt = new Date()
   let hr = dt.getHours()
   let min = dt.getMinutes()
   let sec = dt. getSeconds()

    var time = hr + ':' + min + ':' + sec
    // 11:30:00
    console.log(time)

   if (time > "00:00:00" && time  < "12:00:00") {
    <View>
        <Text> Good morning, what do you want for breakfast?</Text>
    </View>
   } else if (time < "0:00:00"  &&  time < "12:00:00" && time > "16:00:00") {
        <View>
            <Text> Hey, what's for Dinner?</Text>
        </View>
   }else if (time < "00:00:00" && time > "122:00:00" && time < "16:00:00" ) {
    <View>
        <Text> It's Lunch Time. </Text>
    </View>
   }
}
