import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function App(){


    const router = useRouter()


    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="คำนวนหาแรงดัน" onPress={() => router.navigate('/rectangle')}/>
                <Button title="คำนวนพื้นที่สี่เหลี่ม" onPress={() => router.navigate('/HOK')}/>
        </View>
    )

    


}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems:"center",
        gap:20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    }
})