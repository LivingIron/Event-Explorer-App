import React, { useState } from "react";
import { StyleSheet,View,Text} from "react-native";
import { TouchableOpacity } from "react-native";

export default function HorizontalCardJoinButton(){

    const [joined,setJoined] = useState(false);

    const joinEvent = () =>{
        if(joined==false){
            setJoined(true);
        }else{
            setJoined(false);
        }
    }
    
    if(joined==false){
        return (
            <>
                 <View style={styles.buttonNotJoined}>
                    <TouchableOpacity onPress={ joinEvent} >
                        <Text style={styles.buttonText}>Join</Text>
                    </TouchableOpacity>
                 </View>
            </>
         );
    }else{
        return (
            <>
                 <View style={styles.buttonJoined}>
                    <TouchableOpacity onPress={ joinEvent}>
                        <Text style={styles.buttonText}>Joined</Text>
                    </TouchableOpacity>
                 </View>
            </>
         );
    }
}

const styles = StyleSheet.create({
   buttonNotJoined:{
        height:26,
        width:70,
        backgroundColor:"#E9B741",
        justifyContent:'space-around',
        borderRadius:100,
        marginTop:12,
        marginLeft:6
   },
   buttonText:{
       fontFamily:"OpenSansSemiBold",
       fontSize:10,
       color:"white",
       marginLeft:25
   }, buttonJoined:{
    height:26,
    width:70,
    backgroundColor:"#27AE60",
    justifyContent:'space-around',
    borderRadius:100,
    marginTop:12,
    marginLeft:6
},
})