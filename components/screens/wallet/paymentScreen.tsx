// import  React from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
// // import  { Paystack, paystackProps }  from 'react-native-paystack-webview';
// import { auth } from '../../../firebase';
// import { useRef } from 'react';
// import Paystack from 'react-native-paystack-webview';



import React, {useRef} from 'react';
import type { Node } from 'react';
import {
  SafeAreaView, 
  Text, 
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { Paystack, paystackProps } from 'react-native-paystack-webview'
 
const {height, width} = Dimensions.get('window');
const PayStackScreen: () => Node = () => {

  const paystackWebViewRef = useRef<paystackProps.PayStackRef>(); 

  console.log(paystackWebViewRef)

  return (
    <SafeAreaView>
      {/* // <Paystack */}
      {/* //   paystackKey='pk_live_89e8a91aa4596403fe462399b5cd820615d807dc' */}
      {/* //   onCancel={() => { }} */}
      {/* //   onSuccess={() => { }} */}
      {/* //   billingEmail={'iyanu@gmail.com'} */}
      {/* //   billingName={'your-billing-name-here'} */}
      {/* //   amount={'700.90'}  */}
      {/* //   ref={paystackWebViewRef} */}
      {/* //   autoStart={true}
      // /> */}
      <Paystack  
      paystackKey="pk_live_89e8a91aa4596403fe462399b5cd820615d807dc"
      amount={'25000.00'}
      billingEmail="paystackwebview@something.com"
      activityIndicatorColor="green"
      onCancel={(e) => {
        // handle response here
      }}
      onSuccess={(e) => {
        // handle response here
      }}
      autoStart={true}
    />

      <TouchableOpacity onPress={() => paystackWebViewRef.current.startTransaction()}>  <Text> Pay Now </Text> </TouchableOpacity>
    </SafeAreaView>
  );
};
 

export default PayStackScreen;




// export default PayStackScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'black',
//     alignItems: "center",
//     justifyContent: "center",
//     width: '100%',
//     // height: '100%',
//     // borderWidth: 2,
//   },
//   PayNow: {
//     marginTop: '40%',
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     backgroundColor: 'orange',
//     borderColor: 'white',
//     height: '15%',
//     width: '30%',
//     marginLeft: '35%',

//   },
// });


// import React, { useRef } from 'react';
// import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
// import { View, TouchableOpacity,Text } from 'react-native';

// function Pay(){
//   const paystackWebViewRef = useRef<paystackProps.PayStackRef>();

//   return (
//     <View style={{flex: 1}}>
//       <Paystack
//         paystackKey="your-public-key-here"
//         billingEmail="paystackwebview@something.com"
//         amount={'25000.00'}
//         onCancel={(e) => {
//           // handle response here
//         }}
//         onSuccess={(res) => {
//           // handle response here
//         }}
//         ref={paystackWebViewRef}
//       />

//         <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
//           <Text>Pay Now</Text>
//         </TouchableOpacity>
//       </View>
//   );
// }