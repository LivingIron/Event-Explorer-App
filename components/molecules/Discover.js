import React from "react";
import { StyleSheet,TouchableOpacity,Text,View,ScrollView} from "react-native";


export default function Discover({discoverState,joinedState,onPress}){

    return (     
           <ScrollView style={styles.discover}>
               <Text>Discover</Text>
           </ScrollView>      
    );
}

const styles = StyleSheet.create({
    discover:{
        backgroundColor:"blue"
    }
})