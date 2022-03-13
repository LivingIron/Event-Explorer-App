import React, { useState } from "react";
import { StyleSheet,View,Image ,Text} from "react-native";
import HorizontalCardEventButton from "../shared/HorizontalCardEventButton";
import HorizontalCardJoinButton from "../shared/HorizontalCardJoinButton";


export default function HorizontalCard(){

    return (
       <>
            <View style={styles.card}>
               <Image source = {{uri:'https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg '}} style={styles.card_image}/>
               <View style={styles.card_right}>
                    <Text style={styles.card_date}>Oct 15,2021</Text>
                    <Text style={styles.card_title}>Car Freak Meetup</Text>
                    <Text style={styles.card_desc}>Biggest Event in dhaka,join to see the exciment of the new car guy</Text>
                    <View style={styles.card_buttons}>
                        <HorizontalCardJoinButton />
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