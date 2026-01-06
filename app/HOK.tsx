import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Rectangle(){

    const [area, setArea] = useState(0)
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    function RectangleCall(){
        var result = width * length
        setArea(result)
    }
                               


    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวนหาพื้นที่สี่เหลี่ม</Text>
            {/* <Button title="ไปหน้า 2" /> */}

            <Text> ความกว้าง คือ {width} ซม.</Text>
            <Text> ความยาว คือ {length} ซม.</Text>
            <Text> พื้นที่สี่เหลี่ม คือ {area} ตร.ซม.</Text>

            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกความกว้าง" 
            placeholderTextColor="gray"
            value={width.toString()}
            onChangeText={(w) => setWidth(Number(w))} 
            />


            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกความยาว" 
            placeholderTextColor="gray" 
            value={length.toString()}
            onChangeText={(l) => setLength(Number(l))} 

            />

            <Button title="คำนวน" onPress={() => RectangleCall()} />
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "beige",
        justifyContent: "center",
        alignItems:"center",
        gap: 20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"black"
    },
    textInput:{
        borderWidth: 1,
        borderColor: "black",
        width:"80%",
        borderRadius: 20
    }
})