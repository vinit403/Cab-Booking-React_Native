import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Cars = ({navigation}) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("http://192.168.223.193/demo/cabbook/api_car.php")
            .then(res => res.json())
            .then(
                (result) => {
                    //  console.log(result)
                    setUser(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])
    return ( 
       
            <FlatList 
                data = { user }
                keyExtractor = {(_, i) => i.toString()}
                contentContainerStyle = {{ flexGrow: 3 }}
                renderItem = {({ item }) => {
                    console.log(item);
                    return ( 
                        <>
                            <View style = { {margin: 8, flexWrap: "wrap"}}>
                                <View style = { { width: '100%', height: 120, backgroundColor: "#FFFFF5", borderRadius: 15 }} >
                                
                                    <TouchableOpacity style = {{ alignItems: 'center', flexDirection: 'row' }} onPress = {() => navigation.navigate("Abtcars", { Item: item})}>

                                    <View style = {{ flexDirection: 'row' }} >
                                        <View>
                                            <Text style = {{fontSize:20,fontWeight:'bold',color:'black'}} > { item.car_name} </Text> 
                                            <Text style = {{fontSize:15,color:'gray'}} > { item.car_price}/- per KM</Text>
                                            <Text style = {{marginTop:5,fontSize:12,color:'gray'}} > Owner :- { item.car_owner}</Text>

                                            <View style = {{ flexDirection: 'row', paddingTop: 23 }} >
                                                <View  style = {{ flexDirection: 'row' }}>
                                                    <Image source={require('../Image/car-seat.png')} style={{width:25,height:25}}></Image>
                                                    <Text style = {{}} >{ item.car_seat} Seats </Text>
                                                </View>
                                                 
                                                <View style = {{ flexDirection: 'row' }}>
                                                    <Image source={require('../Image/fuel.png')} style={{width:25,height:25}}></Image>
                                                    <Text style = {{}} >{ item.car_type} </Text> 
                                                 </View>
                                                
                                                <View style = {{ flexDirection: 'row' }}>
                                                    <Image source={require('../Image/gear-shift.png')} style={{width:25,height:25}}></Image>
                                                    <Text style = {{}} >{ item.car_gear} Gears </Text> 
                                                </View>
                                                
                                            </View >
                                        </View>

                                        <View>
                                            <Image source = {{ uri: "http://192.168.223.193/demo/cabbook/Brand%20Image/" + item.car_img }} style = {{ width: 115, height: 110, borderRadius: 15, marginTop: 5, justifyContent: 'space-around' }}/>  
                                        </View>   
                                           
                                        
                                    </View >
                                    

                                    <View style = {{ flexDirection: 'row' }} ></View>
                                    
                                    </TouchableOpacity> 
                                </View >
                            </View>
                        </>
                    )
                }
        }
        />

    )
}

export default Cars

