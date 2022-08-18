/* eslint-disable @typescript-eslint/no-unused-vars */
// import ignoreWarns from  "../ignoreWarnings";
import React, {useState, useEffect} from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import {View, Text} from 'react-native';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Login from './components/screens/intro/loginScreen';
import ProductScreen from './components/screens/product/productScreen';
import Notification from './components/screens/notifications/notification';
import Intro from './components/screens/intro/introPage';
import Carts from './components/screens/Home/carts';
import SignUp from './components/screens/intro/SignupPage';
import Tabs from './components/screens/navigation/tabs';
import ModeOfPayment from './components/screens/wallet/payement';
// import Slider from './components/screens/carousel/slider';
import Profile from './components/screens/Home/profile';
import Menu from './components/screens/Home/menuScreen';
// import Carts from './components/screens/Home/carts';
// import DishMenu from './components/screens/Home/dish-menu';
// import Menu from './components/screens/Home/menu';
import Carousel from './components/screens/carousel/carousel';
import HomeScreen from './components/screens/Home/HomeScreen';
import PrimaryStack from './components/screens/navigation/primaryStack';
// import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './components/redux/features/store';
// import {Provider} from 'react-redux';
// import Picker from './components/screens/product/picker'
// import {StripeProvider} from '@stripe/stripe-react-native';
import {fetchPublishableKey} from './helper';
import Card from './components/screens/wallet/card';
import Purchase from './components/screens/product/CheckOut';
import DeliveryDetails from './components/screens/product/DeliverySreen';
import PayStackScreen from './components/screens/wallet/paymentScreen.tsx';
// import Time from './components/functions/Time';
import Paystack from 'react-native-paystack-webview';
import StoreScreen from './components/screens/product/storeProduct';
import TopsTab from './components/screens/navigation/TopsTab';







const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  // const [publishableKey, setPublishableKey] = useState('')
  // useEffect(() => {
  //   async function init() {
  //     const publishableKey = await fetchPublishableKey()
  //     if (publishableKey) {
  //       setPublishableKey(publishableKey)
  //     }
  //   }
  // })
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      // <StripePr/ovider publishableKey={publishableKey}>
        <Provider store={store}>
      {/* <View>
      <View style={{ flex: 1 }}>
     <Paystack  
        paystackKey="pk_test_b76944a825ab72704950bc6cf30b5563755895a0"
        amount={25000.00}
        buttonText= "Pay Now"
        // showPayButton={fasle}
        // billingEmail={auth.currentUser?.email}
        showPayButton={true}
        activityIndicatorColor="orange"
        SafeAreaViewContainer={{marginTop: 5}}
        SafeAreaViewContainerModal={{marginTop: 5}}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
        // ref={paystackWebViewRef}
      />
      {/* <View>
        <Text> {route.params.item}</Text>
      </View> */}
      {/* <View>
      <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()} style={styles.PayNow}>
           <Text>Pay Now</Text>
         </TouchableOpacity>
      </View> */}
    {/* </View> */}
    {/* //  </View>  */} 
    <NavigationContainer 
    //  style={backgroundStyle} 
     > 
      <StatusBar backgroundColor="#FAAF08" /> 
       <Stack.Navigator 
         screenOptions={{ 
           headerShown: false, 
         }}> 
         {/* <Stack.Screen name="Welcome" component={Intro} /> 
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Log in" component={Login} />   */}
        <Stack.Screen name="Primary" component={PrimaryStack} />
          <Stack.Screen name="Home" component={Tabs} />
         <Stack.Screen name="Menu" component={Menu} />  
        <Stack.Screen name="Cart" component={Carts} /> 
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Store-Product" component={StoreScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Pay" component={ModeOfPayment} />
        <Stack.Screen name="purchase" component={Purchase} />
        <Stack.Screen name="notification" component={Notification} />
        {/* <Stack.Screen  name="PayStacked" component={PayStackScreen}/> */}
        {/* <Stack.Screen  name="Home Screen" component={Tabs}/> */}

         {/* <Stack.Screen  name="Cart" component={Carts}/> */}
     <Stack.Screen  name="Delivery" component={DeliveryDetails}/>
       </Stack.Navigator>
      </NavigationContainer>
    </Provider>

      // </StripeProvider> 
      );
};
export default App;
