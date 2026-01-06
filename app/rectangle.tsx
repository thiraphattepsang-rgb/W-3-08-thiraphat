import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Rectangle(){

    const [area, setArea] = useState(0)
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)

    function RectangleCall(){
        var result = width / length
        setArea(result)
    }
                               


    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวนหาค่าความดัน</Text>
            {/* <Button title="ไปหน้า 2" /> */}

            <Text>แรง คือ {width} </Text>
            <Text>พื้นที่ คือ {length} </Text>
            <Text>ความดัน คือ {area} </Text>

            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกแรง" 
            placeholderTextColor="gray"
            value={width.toString()}
            onChangeText={(w) => setWidth(Number(w))} 
            />


            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกพื้นที่" 
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