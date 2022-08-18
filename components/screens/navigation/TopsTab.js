import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StoreContainer from '../../store/StoreContainer';
import DrinksItem from '../../store/drinks.tsx';

const Tab = createMaterialTopTabNavigator();

const TopsTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dish" component={StoreContainer} />
      <Tab.Screen name="Drinks" component={DrinksItem} />
    </Tab.Navigator>
  );
}
export default TopsTab;