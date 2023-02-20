import { Image,StyleSheet, Text, FlatList,View, ImageBackground, screenHeight, screenWidth,TouchableOpacity, TextInput,MonthDateYearField,YearMonthDateField,Button} from 'react-native'
import React, { useState , useEffect} from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Home = ({ navigation }) => {
  const [location, setLocation] = useState();
  const [user, setUser] = useState([]);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  useEffect(() => {
    fetch("http://192.168.246.193/demo/cabbook/api_car.php")
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
    <View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://wallpaperaccess.com/full/7430329.jpg',
          }}
          resizeMode="stretch"
          blurRadius={5}n  
          style={styles.img}>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', textAlign: 'center', }}>Own a car without actually buying it. So book now...</Text>
          <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',paddingTop:25 }}>Enter Pick up Location</Text>

          <View style={{alignItems: 'center'}}>
              <TextInput style={{borderWidth:2,borderRadius:5,borderColor:'white',color:'white',width:'90%',justifyContent:'center',alignContent:'center',padding:0,marginTop:8,paddingLeft:10}} placeholder="Enter Pick up Location" placeholderTextColor="white" onChangeText={setLocation} value={location}></TextInput>
          </View>

          <View >
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',paddingTop:10 }}>Strat Trip</Text>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => showDatePicker()} style={{borderWidth:2,borderRadius:5,borderColor:'white',color:'white',width:'90%',justifyContent:'center',alignContent:'center',padding:0,marginTop:8,paddingLeft:10}}><Text style={{color:'white'}}>--- Select Date ---</Text></TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
            </View>
          </View>

          <View>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold',paddingTop:10 }}>End Trip</Text>

            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={() => showDatePicker()} style={{borderWidth:2,borderRadius:5,borderColor:'white',color:'white',width:'90%',justifyContent:'center',alignContent:'center',padding:0,marginTop:8,paddingLeft:10}}><Text style={{color:'white'}}>--- Select Date ---</Text></TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
            </View>
          </View>

          <View style={{paddingTop:40,alignItems:'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Cars")}>
                <View style={{ marginTop: 15,width:150,height:50,justifyContent:'center', backgroundColor: "#00410E",borderRadius:10}}>
                  <Text style={{ color: "white",textAlign:'center', fontSize: 20, fontWeight: "bold" }}>Find Cars </Text>
                </View>
            </TouchableOpacity>
          </View>

        </ImageBackground>
      </View>

      <View>
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, left: 10,paddingTop:20 }}>Our Cars</Text>
      </View>

      <View>
        <FlatList
            data={user}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={{ flexGrow: 3 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {

              console.log(item);
              return(
                <>
                  <View style={{ margin: 8, flexWrap: "wrap" }}>
                    <View style={{ width: 200, height: 200,  backgroundColor: "#FFFFF5", borderRadius: 15, justifyContent: 'center' }}>
                      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate("Cars", { carid: item.car_id })}>
                        <Image source={{ uri: "http://192.168.246.193/demo/cabbook/Brand%20Image/" + item.car_img }} style={{ width: 200, height: 190, borderRadius: 15 }} />
                        <Text style={styles.cartxt}>{item.car_name}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )
            }}
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: screenWidth,
  },
  inputBorder: {
    width: '30%',
    borderRadius: 8,
    borderColor: '#cacaca',
    borderWidth: 1,
    marginBottom: 20,
  },
    cartxt: {
      color: "black",
      fontSize: 17, fontWeight: "bold"
    }

});