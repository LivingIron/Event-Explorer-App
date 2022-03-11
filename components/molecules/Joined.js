import React from "react";
import { StyleSheet,TouchableOpacity,Text,View,ScrollView} from "react-native";


export default function Joined({discoverState,joinedState,onPress}){

    return (     
           <ScrollView style={styles.joined}>
               <Text>Joined</Text>
           </ScrollView>      
    );
}

const styles = StyleSheet.create({
    joined:{
        backgroundColor:"red"
    }
})