import React from "react";
import { StyleSheet,View,Image ,Text} from "react-native";


export default function HorizontalCard(){

    return (
       <>
            <View style={styles.card}>
               
            </View>
       </>
    );
}

const styles = StyleSheet.create({
    card:{
      maxHeight:147,
      maxWidth:368,
      marginTop:20,
      alignItems:'center',
      flexDirection:'row'
    }
})