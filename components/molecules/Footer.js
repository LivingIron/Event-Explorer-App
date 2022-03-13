import React from "react";
import { StyleSheet,View } from "react-native";
import FooterButton from "../shared/FooterButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";




export default function Footer(){

    /* ====================State for changing screens ====================== */

  const [discoverState,setDiscoverState]=useState(true);
  const [joinedState,setJoinedState] = useState(false);

  const navigation = useNavigation();

  const switchScreenToJoined = () =>{ 
    if(!joinedState){
      console.log("already there");
    }else{
      setDiscoverState(!discoverState);
      setJoinedState(!joinedState);
     
      navigation.navigate("Discover");
    }
  }

  const switchScreenToDiscover = () =>{
    if(!discoverState){
      console.log("already there");
    }else{
      setDiscoverState(!discoverState);
      setJoinedState(!joinedState);
      navigation.navigate("Joined");
    }
  }

 

    return (
       <>
            <View style={styles.footer}>
                <FooterButton text='Discover' active={discoverState} onPress={switchScreenToJoined}/>
                <FooterButton text='Joined' active={joinedState} onPress={switchScreenToDiscover}/>
            </View>
       </>
    );
}

const styles = StyleSheet.create({
    footer:{
       height: 90,
       flexDirection: 'row',
       justifyContent: 'space-around',
       borderTopColor:'rgba(29, 30, 36, 0.1)',
       borderTopWidth:2,
    }
})