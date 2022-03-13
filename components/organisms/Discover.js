import React from "react";
import { StyleSheet,TouchableOpacity,Text,View,ScrollView} from "react-native";
import VerticalCard from "../molecules/VerticalCard";
import HorizontalCard from "../molecules/HorizontalCard";

export default function Discover(){

    return (     
           <ScrollView style={styles.discover}>
               
                <View style={styles.title}>
                        <Text style={styles.popularText}>Popular</Text>
                        <Text style={styles.eventsText}>Events</Text>
                </View>
                <View style={styles.popularEventsContainer}>
                    <VerticalCard/>
                    <VerticalCard/>
                </View>
                <View style={styles.upcomingTextContainer}>
                    <Text style={styles.upcomingText}>Upcoming Events</Text>
                </View>
                <View style={styles.upcomingEventsContainer}>
                    <HorizontalCard/>
                    <HorizontalCard/>
                </View>
                
           </ScrollView>      
    );
}

const styles = StyleSheet.create({
    /*======================Popular event style==================== */
    discover:{
        backgroundColor:"white"
    },
    popularEventsContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title:{
        flexDirection:"row",
        marginTop:35,      
    },
    popularText:{
        marginLeft:20,
        fontFamily:"OpenSans",
        fontSize:22
    },

    /*======================Upcoming event style==================== */

    eventsText:{
        marginLeft:4,
        fontFamily:"OpenSans",
        fontSize:22,
        color:"#E9B741"
    }, 
    upcomingText:{
        fontSize:22,
        fontFamily:"OpenSansSemiBold",
        marginTop:25,
    },
    upcomingEventsContainer:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    upcomingTextContainer:{
        marginLeft:20
    },

})