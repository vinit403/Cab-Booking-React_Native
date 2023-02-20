import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const Cars = ({route,navigation}) => {

    const root = route.params
    console.log(root.Item)

    return(
        <>
            <View>
            <View style = { {margin: 8, flexWrap: "wrap"}}>
                                 <View style = { { width: '95%', height: 120, backgroundColor: "#FFFFF5", borderRadius: 15, justifyContent: 'center' }} >
                                
                                     <TouchableOpacity style = {{ alignItems: 'center', flexDirection: 'row' }}>

                                     <View style = {{ flexDirection: 'row' }} >
                                         <View>
                                             <Text style = {{fontSize:10}} > { root.Item.car_name} </Text> 
                                             <Text style = {{}} > { root.Item.car_price}/- per KM</Text>
                                             <Text style = {{}} > { root.Item.car_owner}</Text>

                                             <View style = {{ flexDirection: 'row', paddingTop: 30 }} >
                                                 <View  style = {{ flexDirection: 'row' }}>
                                                     <Image source={require('../Image/car-seat.png')} style={{width:25,height:25}}></Image>
                                                     <Text style = {{}} > { root.Item.car_seat}Seats </Text>
                                                 </View>
                                                 
                                                 <View style = {{ flexDirection: 'row' }}>
                                                     <Image source={require('../Image/fuel.png')} style={{width:25,height:25}}></Image>
                                                     <Text style = {{}} > { root.Item.car_type} </Text> 
                                                  </View>
                                                
                                                 <View style = {{ flexDirection: 'row' }}>
                                                     <Image source={require('../Image/gear-shift.png')} style={{width:25,height:25}}></Image>
                                                     <Text style = {{}} > { root.Item.car_gear}Gears </Text> 
                                                 </View>
                                                
                                             </View >
                                         </View>

                                         <View>
                                             <Image source = {{ uri: "http://192.168.246.193/demo/cabbook/Brand%20Image/" + root.Item.car_img }} style = {{ width: 120, height: 105, borderRadius: 15, marginTop: 5, justifyContent: 'space-around' }}/>  
                                         </View>      
                                     </View >

                                     <View style = {{ flexDirection: 'row' }} ></View>

                                     </TouchableOpacity> 
                                 </View >
                             </View>
            </View>
        </>
    )
    // const [user, setUser] = useState([]);
    // useEffect(() => {
    //     fetch("http://192.168.246.193/demo/cabbook/api_car.php")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 //  console.log(result)
    //                 setUser(result);
    //                 console.log(item.car_id);
    //             },
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])
    // return ( 

    //         <FlatList 
    //             data = { user }
    //             keyExtractor = {(_, i) => i.toString()}
    //             contentContainerStyle = {{ flexGrow: 3 }}
    //             renderItem = {({ item }) => {
    //                 return ( 
    //                     <>
    //                         <View style = { {margin: 8, flexWrap: "wrap"}}>
    //                             <View style = { { width: '95%', height: 120, backgroundColor: "#FFFFF5", borderRadius: 15, justifyContent: 'center' }} >
                                
    //                                 <TouchableOpacity style = {{ alignItems: 'center', flexDirection: 'row' }} onPress = {() => navigation.navigate("Abtcars", { carid: item.car_id })}>

    //                                 <View style = {{ flexDirection: 'row' }} >
    //                                     <View>
    //                                         <Text style = {{fontSize:10}} > { root.Item.car_name} </Text> 
    //                                         <Text style = {{}} > { root.Item.car_price}/- per KM</Text>
    //                                         <Text style = {{}} > { root.Item.car_owner}</Text>

    //                                         <View style = {{ flexDirection: 'row', paddingTop: 30 }} >
    //                                             <View  style = {{ flexDirection: 'row' }}>
    //                                                 <Image source={require('../Image/car-seat.png')} style={{width:25,height:25}}></Image>
    //                                                 <Text style = {{}} > { root.Item.car_seat}Seats </Text>
    //                                             </View>
                                                 
    //                                             <View style = {{ flexDirection: 'row' }}>
    //                                                 <Image source={require('../Image/fuel.png')} style={{width:25,height:25}}></Image>
    //                                                 <Text style = {{}} > { root.Item.car_type} </Text> 
    //                                              </View>
                                                
    //                                             <View style = {{ flexDirection: 'row' }}>
    //                                                 <Image source={require('../Image/gear-shift.png')} style={{width:25,height:25}}></Image>
    //                                                 <Text style = {{}} > { root.Item.car_gear}Gears </Text> 
    //                                             </View>
                                                
    //                                         </View >
    //                                     </View>

    //                                     <View>
    //                                         <Image source = {{ uri: "http://192.168.246.193/demo/cabbook/Brand%20Image/" + item.car_img }} style = {{ width: 120, height: 105, borderRadius: 15, marginTop: 5, justifyContent: 'space-around' }}/>  
    //                                     </View>      
    //                                 </View >

    //                                 <View style = {{ flexDirection: 'row' }} ></View>

    //                                 </TouchableOpacity> 
    //                             </View >
    //                         </View>
    //                     </>
    //                 )
    //             }
    //     }
    //     />

    // )
}

export default Cars

const styles = StyleSheet.create({})