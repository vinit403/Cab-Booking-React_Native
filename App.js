import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from './Screen/Register';
import Login from './Screen/Login';
import Home from './Screen/Home';
import Intro from './Screen/Intro';
import Cars from './Screen/Cars';
import Abtcars from './Screen/Abtcars';
import Verification from './Screen/Verification';
import Account from './Screen/Account';
import Mybooking from './Screen/Mybooking';
import Splashscreen from './Screen/Splashscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Mytabs = () => {
    return ( 
        <>
        <Tab.Navigator initialRouteName = 'Home'
        screenOptions = {
            {
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#00410E",
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "black",
            }
        } >
        <Tab.Screen name = 'Home'
        component = { Home }
        options = {
            {
                tabBarIcon: ({ color }) => ( <
                    Image source = { require("./Image/house.png") }
                    style = {
                        { height: 25, width: 25, tintColor: color }
                    }
                    />
                ),
            }
        }
        /> 
        <Tab.Screen name = 'Mybooking'
        component = { Mybooking }
        options = {
            {
                tabBarIcon: ({ color }) => ( <
                    Image source = { require("./Image/booking.png") }
                    style = {
                        { height: 25, width: 25, tintColor: color }
                    }
                    />
                ),
            }
        }
        />

        <Tab.Screen name = 'Account'
        component = { Account }
        options = {
            {
                tabBarIcon: ({ color }) => ( <
                    Image source = { require("./Image/account.png") }
                    style = {
                        { height: 25, width: 25, tintColor: color }
                    }
                    />
                ),
            }
        }
        /> 
        </Tab.Navigator > 
        </>
    )
}

const App = () => {
    return ( 
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home1"  screenOptions={{headerShown:false}}>
                <Stack.Screen name = "Splashscreen" component = { Splashscreen } /> 
                <Stack.Screen name = "Intro" component = { Intro } /> 
                <Stack.Screen name = "Register" component = { Register }/> 
                <Stack.Screen name = "Verification" component = { Verification } /> 
                <Stack.Screen name = "Login" component = { Login } /> 
                <Stack.Screen name = "Home1" component = { Mytabs }/> 
                <Stack.Screen name = "Cars" component = { Cars }/> 
                <Stack.Screen name = "Abtcars" component = { Abtcars }/> 
            </Stack.Navigator > 
        </NavigationContainer>
)
}

export default App

const styles = StyleSheet.create({})