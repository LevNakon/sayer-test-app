import React from 'react';
import { Platform } from 'react-native';
import { 
    createSwitchNavigator,
    createAppContainer
 } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Colors from '../constants/Colors';

import SayerListScreen from '../screens/SayerListScreen';
import SayerDetailScreen from '../screens/SayerDetailSceen';
import SayerCreateScreen from '../screens/SayerCreateScreen';
import StartupScreen from '../screens/StartupScreen';

const defaultNavOptions = {
    headerStyle: {
        height: 150,
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const SayerNavigation = createStackNavigator({
    SayerList: SayerListScreen,
    SayerDetail: SayerDetailScreen,
    SayerCreate: SayerCreateScreen
}
    , {
        defaultNavigationOptions: defaultNavOptions
    }
);

const MainNavigator = createSwitchNavigator({
    Startup: StartupScreen,
    Sayer: SayerNavigation
});

export default createAppContainer(MainNavigator);