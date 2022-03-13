import React, { useState } from "react";
import { StyleSheet,View,Image ,Text} from "react-native";
import HorizontalCardEventButton from "../shared/HorizontalCardEventButton";
import HorizontalCardJoinButton from "../shared/HorizontalCardJoinButton";
import AsyncStorage from '@react-native-async-storage/async-storage';




export default function HorizontalCard({uri,date,name,desc,id}){

    const addToJoined = async () =>{
      //  try{
        //    await AsyncStorage.setItem(id,[uri,date,name,desc,id]);
      //  }catch(err){
      //      console.log(err);
      //  }
    }


    return (
       <>
            <View style={styles.card}>
               <Image source = {{uri:uri}} style={styles.card_image}/>
               <View style={styles.card_right}>
                    <Text style={styles.card_date}>{date}</Text>
                    <Text style={styles.card_title} numberOfLines={1}>{name}</Text>
                    <Text style={styles.card_desc} numberOfLines={3}>{desc}</Text>
                    <View style={styles.card_buttons}>
                        <HorizontalCardJoinButton onPress ={addToJoined} />
                        <HorizontalCardEventButton  />
                    </View>
               </View>
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
      flexDirection:'row',
      justifyContent:'space-around'
    },
    card_image:{
        height:147,
        width:174,
        borderRadius:25
    },
    card_right:{
        flexDirection:'column',
        maxWidth:194,
    },
    card_date:{
        fontFamily:"OpenSans",
        color:'rgba(29, 30, 36, 0.4)',
        fontSize:12
    },
    card_title:{
        fontFamily:"OpenSansSemiBold",
        fontSize:16
    },
    card_desc:{
        fontFamily:"OpenSans",
        color:'rgba(29, 30, 36, 0.4)',
        fontSize:10
    },
    card_buttons:{
        flexDirection:'row'
    }
})