import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image,Linking } from 'react-native'
import React, { useState, useEffect } from 'react'

const Cars = ({route,navigation}) => {

    const root = route.params
    console.log(root.Item)


    return(
        <>
            <View>
                <View style={{ backgroundColor: 'white',height:50,flexDirection: "row",alignItems:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cars")}>
                        <Image source={require("../Image/back-arrow.png")} style={{ height: 25, width: 25 ,marginLeft:20}} />
                    </TouchableOpacity>
                    <View style={{marginLeft:"auto",marginRight:20,flexDirection: "row"}}>
                        <TouchableOpacity>
                            <Image source={require("../Image/like.png")} style={{ height: 25, width: 25 ,marginTop:'4%'}} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require("../Image/share.png")} style={{ height: 25, width: 25 ,marginTop:'4%',marginLeft:20}} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: 'lightgrey',height:"100%"}}>
                    <View style={{height:250,width:320,backgroundColor: 'white',alignSelf:"center",marginTop:25,borderRadius:10,flexDirection:'row'}}>
                        <View>
                            <Image source = {{ uri: "http://192.168.223.193/demo/cabbook/Brand%20Image/" + root.Item.car_img }} style = {{ width: 230, height: 200}}/>  
                        </View>

                        <View>
                            <View>
                                <TouchableOpacity>
                                    <View>
                                        <Image source = {{ uri: "http://192.168.223.193/demo/cabbook/Brand%20Image/" + root.Item.car_img }} style = {{ width: 80, height: 80}}/>  
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity>
                                    <View>
                                        <Image source = {{ uri: "http://192.168.223.193/demo/cabbook/Brand%20Image/" + root.Item.car_img }} style = {{ width: 80, height: 80}}/>  
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity>
                                    <View>
                                        <Image source = {{ uri: "http://192.168.223.193/demo/cabbook/Brand%20Image/" + root.Item.car_img }} style = {{ width: 80, height: 80}}/>  
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                       
                    </View>

                    <View style={{height:"100%",width:320,backgroundColor: 'white',alignSelf:"center",marginTop:25,borderRadius:10}}>
                        <View>
                            <View style={{flexDirection: "row",marginTop:5}}>
                                <View>
                                    <Text style = {{fontSize:20,fontWeight:'bold',color:'black',marginLeft:5}} >{ root.Item.car_name} </Text> 
                                </View>
                                <View style={{marginLeft:"auto",marginRight:5}}>
                                    <Text style = {{fontSize:20,fontWeight:'bold',color:'#00410E'}} > ₹{ root.Item.car_price} </Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{flexDirection: "row",marginTop:0}}>
                                <View>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'grey',marginLeft:5}} >{ root.Item.car_company} </Text> 
                                </View>
                                <View style={{marginLeft:"auto",marginRight:5}}>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'grey'}} >Per KM </Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{flexDirection: "row",marginTop:0}}>
                                <View>
                                    <Text style = {{fontSize:12,fontWeight:'bold',color:'grey',marginLeft:5}} >Location: - Khodiyar Nagar, A.K. Road</Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{marginTop:13}}>
                                <View>
                                    <Text style = {{fontSize:12,fontWeight:'bold',color:'grey',textAlign:'center'}}>____________________________________________________________________</Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{flexDirection: "row",marginTop:0}}>
                                <View>
                                    <Image source={require("../Image/man_img.png")} style={{ height: 45, width: 45,marginTop:'50%',marginLeft:5 }} />
                                </View>
                                <View>
                                    <View style={{flexDirection: "row"}}>
                                        <Text style = {{fontSize:15,fontWeight:'bold',color:'#00410E',marginTop:'15%'}} >   Owner -  </Text> 
                                        <Text style = {{fontSize:15,fontWeight:'bold',color:'lightgrey',marginTop:'15%'}} >{ root.Item.car_owner} </Text> 
                                    </View>
                                </View>
                                <View style={{marginLeft:"auto",marginRight:5}}>
                                    <TouchableOpacity onPress={()=>{Linking.openURL('tel:97146 96421');}}>
                                        <Image source={require("../Image/phone.png")} style={{ height: 35, width: 35,marginTop:'60%',marginLeft:5 }} />

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{marginTop:13}}>
                                <View>
                                    <Text style = {{fontSize:12,fontWeight:'bold',color:'grey',textAlign:'center'}}>____________________________________________________________________</Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View>
                                <Text style={{marginLeft:5,marginTop:'6%',fontSize:18,color:'black',fontWeight:'bold'}}>Car Specifications</Text>
                            </View>


                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                                <View style={{marginLeft:15,marginTop:10}}>
                                    <Image source={require('../Image/car-seat.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%',marginLeft:"8%"}} >{ root.Item.car_seat} seats </Text> 
                                </View>
                                <View style={{marginTop:10}}>
                                    <Image source={require('../Image/air-conditioner.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%'}} >Conditioner </Text> 
                                </View>
                                <View style={{marginTop:10}}>
                                    <Image source={require('../Image/location.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%'}} >GPS System </Text> 
                                </View>
                            </View>

                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                                <View style={{marginLeft:15,marginTop:10}}>
                                    <Image source={require('../Image/bluetooth.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%',marginLeft:"8%"}} >Bluetooth</Text> 
                                </View>
                                <View style={{marginTop:10}}>
                                    <Image source={require('../Image/gear-shift.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%',marginLeft:10}} >{ root.Item.car_gear} gears  </Text> 
                                </View>
                                <View style={{marginTop:10}}>
                                    <Image source={require('../Image/usb-port.png')} style={{width:25,height:25,marginTop:'3%',marginLeft:"20%"}}></Image>
                                    <Text style = {{fontSize:13,fontWeight:'bold',color:'lightgrey',marginTop:'2%'}} >USB Ports </Text> 
                                </View>
                            </View>
                        </View>

                        <View>
                            <View style={{marginTop:13}}>
                                <View>
                                    <Text style = {{fontSize:12,fontWeight:'bold',color:'grey',textAlign:'center'}}>____________________________________________________________________</Text> 
                                </View>
                            </View>
                        </View>

                    </View>
 
                </View>

                
            </View>
        </>
    )




   
}

export default Cars

const styles = StyleSheet.create({})