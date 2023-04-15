import { StyleSheet, Text, View, PixelRatio, Dimensions, StatusBar, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Intro = ({ navigation }) => {

    const { width, height } = Dimensions.get('window');
    return ( 
        <>
        <StatusBar barStyle = "dark-content" />
        <SafeAreaView style = {{ flex: 1 } } >
        <ScrollView style = {{ flex: 1 } } horizontal = { true } scrollEventThrottle = { 16 } pagingEnabled = { true } >
        <View style = {{ width, height } } >
        <Image source = { require('../Image/1stt.webp') } style = { styles.imageStyle }/> 
        <View style = { styles.wrapper } >
        <Text style = { styles.header } > Request A Ride </Text> 
        <View style = {{ width: 300, justifyContent: 'center' } }>
        <Text style = { styles.paragraph }> Request a ride get picked up by a nearby community driver. </Text>
        </View> 
        </View>

        <View style = {{ alignItems: 'flex-end', paddingTop: 20, paddingRight: 20 } } >
        <TouchableOpacity onPress = {() => navigation.navigate("Login") } >
        <Text style = {{ fontSize: 20, fontWeight: 'bold', } } > Skip </Text> 
        </TouchableOpacity> 
        </View>

        </View> 
        <View style = {{ width, height } } >
        <Image source = { require('../Image/2nd.webp') } style = { styles.imageStyle }/> 
        <View style = { styles.wrapper } >
        <Text style = { styles.header } > Confirm Your Driver </Text> 
        <View style = {{ width: 300, justifyContent: 'center' } } >
        <Text style = { styles.paragraph } > Huge drivers network help you find comforable, safe and cheep ride. </Text> 
        </View> 
        </View>

        <View style = {{ alignItems: 'flex-end', paddingTop: 20, paddingRight: 20 } } >
        <TouchableOpacity onPress = { () => navigation.navigate("Login") } >
        <Text style = {{ fontSize: 20, fontWeight: 'bold', } } > Skip </Text> 
        </TouchableOpacity> </View>

        </View> 
        <View style = {{ width, height } } >
        <Image source = { require('../Image/3rd.jpg') } style = { styles.imageStyle }/> 
        <View style = { styles.wrapper } >
        <Text style = { styles.header } > Track Your Ride </Text> 
        <View style = {{ width: 300, justifyContent: 'center' } } >
        <Text style = { styles.paragraph } > Know your driver in advance and be able to view current location in real time on the map. </Text> 
        </View> 
        </View>

        <View style = { { paddingLeft: 120 } } >
        <TouchableOpacity onPress = {() => navigation.navigate("Login") } style = {{ backgroundColor: "#00410E", height: 40, width: 140, justifyContent: 'center', alignItems: 'center', borderRadius: 5 } } >
        <Text style = {{ fontSize: 20, fontWeight: 'bold', color: 'white', justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center' } } > Get Started </Text> 
        </TouchableOpacity> 
        </View> 
        </View>

        </ScrollView> 
        </SafeAreaView> 
        </>
    );
};



export default Intro

const styles = StyleSheet.create({
    imageStyle: {
        height: 300,
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 80,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
        textAlign: 'center',
    },
});