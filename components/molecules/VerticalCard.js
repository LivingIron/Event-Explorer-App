import React from "react";
import { StyleSheet,View,Image ,Text} from "react-native";
import VerticalCardEventButton from "../shared/VerticalCardEventButton";

export default function VerticalCard(){

    return (
       <>
            <View style={styles.card}>
                <Image source={{uri:'https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_CUSTOM.jpg',}} style={styles.card_image}/>
                <View>
                    <Text style={styles.card_date}>Oct 15,2021</Text>
                    <Text style={styles.card_title}>Tour of the Alps</Text>
                </View>
                <VerticalCardEventButton />
            </View>
       </>
    );
}

const styles = StyleSheet.create({
    card:{
      maxHeight:230,
      maxWidth:174,
      marginTop:47,
      alignItems:'center'
    },
    card_image:{
        height:147,
        width:174,
        borderRadius:25,
        marginBottom:6
    },
    card_date:{
        fontFamily:"OpenSans",
        fontSize:12,
        color:'rgba(29, 30, 36, 0.4)'
    },
    card_title:{
        fontFamily:"OpenSansSemiBold",
        fontSize:18,
    }
})