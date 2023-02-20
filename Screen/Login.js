import { StyleSheet, Text, View , Image,TextInput,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Lottie from 'lottie-react-native';



const Login = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [password, setPassword] = useState();

  const BtnLogin = () => {
    fetch('http://192.168.246.193/demo/cabbook/login.php', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.status == "yes") {
                    console.log(result.data)
                    navigation.navigate("Home1")
                } else {
                    console.log(result.data)
                    setVali("*Username And Password Incorrect");
                }
            }
        )
}

  return (

    
      <View>
          <View style={{width:'100%',height:200,backgroundColor:'#00410E',borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
              <View style={{alignItems:'center'}}>
                {/* <Image source={require('../Image/rental-car.png')} style={{width:100,height:100}}></Image> */}
                <Lottie
                    source={require('../Image/Cab.json')}
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
                    style={{height:150,width:150}}
                />
                <Text style={{fontSize:20,color:'white',fontFamily: 'sans-serif',fontWeight:'bold',paddingTop:10}}>ઉમાવંશી Tours & Traveller</Text>
              </View>
          </View>

          <View>
            <View style={{alignItems:'center' , paddingTop:30}}>
              <Text style={{fontSize:20,fontWeight:"bold",color:'black'}}>Login</Text>
            </View>
          </View>

          <View style={{ alignItems: "center", marginTop: 5 }}>
            
            <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
              <Image source={require("../Image/gmail.png")} style={{ height: 25, width: 25 }} />
              <TextInput style={styles.txtinput} placeholder="Email id " onChangeText={setEmail} value={email}></TextInput>
            </View>
            
            <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 0.5, width: "85%", marginTop: 15 }}>
              <Image source={require("../Image/password.png")} style={{ height: 25, width: 25 }} />
              <TextInput style={styles.txtinput} placeholder="Password"  onChangeText={setPassword} value={password} secureTextEntry={true}></TextInput>
            </View>

            <TouchableOpacity onPress={() => BtnLogin()}>
              <View style={{ marginTop: 15,width:300,height:50,justifyContent:'center', backgroundColor: "#00410E",borderRadius:10}}>
                <Text style={{ color: "white",textAlign:'center', fontSize: 20, fontWeight: "bold" }}>Login </Text>
              </View>
            </TouchableOpacity>


            <View>
                <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                    <Text style={{color:"#3D3F3E", marginTop: 15,fontSize:20 }}>--------- </Text>
                    <Text style={{color:"#00410E", fontWeight:'bold',marginTop: 15,fontSize:20 }}> or  </Text>
                    <Text style={{color:"#3D3F3E", marginTop: 15,fontSize:20 }}>--------- </Text>
                </View>
              <View>
                  <Text style={{color:"#3D3F3E", marginTop: 15 }}>continue via your social</Text>
              </View>

              <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image source={require("../Image/facebook.png")} style={{ height: 40, width:40  }} />
              <Image source={require("../Image/google.png")} style={{ height: 40, width: 40,marginLeft:10}} />
              <Image source={require("../Image/twitter.png")} style={{ height: 40, width: 40,marginLeft:10 }} />
              </View>
            </View>

            
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <View>
                <Text style={{ color: "#3D3F3E" }}>Don't have an account?  </Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                  <Text style={{ color: "#00410E",fontWeight:'bold', borderBottomWidth: 0.5, borderBottomColor: "#00410E", fontSize: 16 }}>Register Now</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>

      </View>
    
  )
}

export default Login

const styles = StyleSheet.create({})