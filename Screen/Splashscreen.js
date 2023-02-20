import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';



const Splashscreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.navigate('Login')
    }, 2200);
  return (
    <View style={styles.container}>

        <View></View>

        <View style={styles.logocontainer}>
        <Lottie
                source={require('../Image/Splash.json')}
                colorFilters={[
                    {
                    keypath: 'button',
                    color: '#F00000',
                    },
                    {
                    keypath: 'Sending Loader',
                    color: '#F00000',
                    },
                ]}
                autoPlay
                loop
                style={{height:250,width:250}}
            />
            <Text style={styles.text}>ઉમાવંશી Tours and Traveller</Text> 
        </View>

        <View style={styles.bottomcontainer}>
            <Text style={styles.bottomtext}>Owner :- Shailesh Kavathiya</Text>
            <Text style={styles.bottomtext}>Owner :- Chirag Kavathiya</Text>
        </View>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        backgroundColor:'black',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    logocontainer:{
        alignItems:'center'
    },
    Image :{
        height:250,
        width:250
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        fontFamily: 'monospace'
    },
    bottomcontainer:{

    },
    bottomtext:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'monospace'
    }

})