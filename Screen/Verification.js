import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View,TouchableOpacity} from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
  

const CELL_COUNT = 6;

const Verification = ({navigation}) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
    });
  
    return (
       
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.title1}>Enter 4 digit verification code.We just sent you on your Number.</Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={{ marginTop: 15,width:300,height:50,justifyContent:'center', backgroundColor: "#00410E",borderRadius:10}}>
                  <Text style={{ color: "white",textAlign:'center', fontSize: 20, fontWeight: "bold" }}>Continue </Text>
                </View>
              </TouchableOpacity>
      </SafeAreaView>
      
    );
  };
  
export default Verification

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    title1: {textAlign: 'center', fontSize: 18,paddingTop:30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: '#000',
    },
})

