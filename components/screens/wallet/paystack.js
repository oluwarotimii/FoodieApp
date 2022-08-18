import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';


function Pay() {
  return (
    <View 
    //style={{ flex: 1 }}
    >
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
    </View>
  );
}



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