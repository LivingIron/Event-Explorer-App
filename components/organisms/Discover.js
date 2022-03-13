import React, { useEffect,useState } from "react";
import { StyleSheet,TouchableOpacity,Text,View,ScrollView} from "react-native";
import VerticalCard from "../molecules/VerticalCard";
import HorizontalCard from "../molecules/HorizontalCard";

export default function Discover(){

    const [eventList,setEventList] = useState([]);
    const [pageNumber,setPageNumber] = useState(1);
    const [loaded,setLoadedState] = useState(false);

    useEffect(async ()=>{
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?page=${pageNumber}&size=20&apikey=pezpAKLGQDIWxy3AjRZv1CPahohddeAU`);
        let json = await response.json();
        console.log(JSON.stringify(json._embedded.events[0].name));
        setEventList(json._embedded.events.map((item)=>{
            let container = {};
            container.name = item.name;
            container.id = item.id;
            container.info = item.info;
            container.date = item.dates.start.localDate;
            
            for(let i =0;i < item.images.length;i++){ 
                if(item.images[i].ratio=="4_3"){                  
                    container.pic=item.images[i].url;
                    break;
                }
            }          
            return container;
        }));
        
        if (eventList && eventList.length) {
            setPageNumber(pageNumber+1);
            setLoadedState(true);
            console.log(eventList);
            console.log(pageNumber);
          }
    }
    ,[])

    if(!loaded){
        return (
            <Text>Loading</Text>
        );
    }
    else{
        return (     
            <ScrollView style={styles.discover}>
                
                    <View style={styles.title}>
                            <Text style={styles.popularText}>Popular</Text>
                            <Text style={styles.eventsText}>Events</Text>
                    </View>
                    <View style={styles.popularEventsContainer}>
                        <VerticalCard uri = {eventList[0].pic} name={eventList[0].name} date={eventList[0].date}/>
                        <VerticalCard uri = {eventList[1].pic} name={eventList[1].name} date={eventList[1].date}/>
                    </View>
                    <View style={styles.upcomingTextContainer}>
                        <Text style={styles.upcomingText}>Upcoming Events</Text>
                    </View>
                    <View style={styles.upcomingEventsContainer}>
                        <HorizontalCard uri = {eventList[3].pic} name={eventList[3].name} date={eventList[3].date} desc = {eventList[3].info}/>
                        <HorizontalCard/>
                    </View>
                    
            </ScrollView>      
        );
    }
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
        flexDirection:'column',
        justifyContent:'space-around'
    },
    upcomingTextContainer:{
        marginLeft:20
    },

})