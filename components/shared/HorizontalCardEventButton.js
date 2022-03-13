import React from "react";
import { StyleSheet,View,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HorizontalCardEventButton(){

    return (
       <>
            <View style={styles.buttonNotJoined}>
               <TouchableOpacity >
                   <Text style={styles.buttonText}>View Event</Text>
               </TouchableOpacity>
            </View>
       </>
    );
}

const styles = StyleSheet.create({
   buttonNotJoined:{
        height:26,
        width:70,
        justifyContent:'space-around',
        borderRadius:100,
        marginTop:12,
        marginLeft:6,
        backgroundColor:'rgba(29, 30, 36, 0.4)'
   },
   buttonText:{
       fontFamily:"OpenSansSemiBold",
       fontSize:8,
       color:"white",
       marginLeft:15
   },
})