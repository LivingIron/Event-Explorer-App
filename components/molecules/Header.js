import React from "react";
import { StyleSheet,View,Image } from "react-native";

export default function Header({discoverState,joinedState,onPress}){

    return (
       <>
            <View style={styles.footer}>

                <View style={styles.icon}>
                    <Image source={require('../../assets/images/Search.png')} />    
                </View>
                <Image source={require('../../assets/images/Avatar.png')}/>
                <View style={styles.icon}>
                    <Image source={require('../../assets/images/Vector.png')} />    
                </View>
            </View>
       </>
    );
}

const styles = StyleSheet.create({
    footer:{
       height:50,
       flexDirection: 'row',
       justifyContent: 'space-around',
       marginTop:49,
       alignItems:"center"
    },
    icon:{
        height:40,
        width:40,
        borderRadius:40,
        backgroundColor:'rgba(29, 30, 36, 0.1)', 
        justifyContent: "center",
        alignItems:"center"

    }
})