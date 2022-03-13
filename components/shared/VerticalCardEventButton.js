import React from "react";
import { StyleSheet,View,Image ,Text, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function VerticalCardEventButton({discoverState,joinedState,onPress}){

    return (
       <>
            <View style={styles.button}>
               <TouchableOpacity>
                   <Text style={styles.buttonText}>View Event</Text>
               </TouchableOpacity>
            </View>
       </>
    );
}

const styles = StyleSheet.create({
   button:{
        height:22,
        width:70,
        backgroundColor:"#E9B741",
        justifyContent:'space-around',
        borderRadius:100,
        marginTop:10
   },
   buttonText:{
       fontFamily:"OpenSansSemiBold",
       fontSize:10,
       color:"white",
       marginLeft:10
   }
})