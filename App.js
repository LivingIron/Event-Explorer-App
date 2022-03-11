
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import { useState } from "react";
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native";

enableScreens();




export default function App() {

  const [discoverState,setDiscoverState]=useState(true);
  const [joinedState,setJoinedState] = useState(false);

  const switchScreenToJoined = () =>{
    
    if(!joinedState){
      console.log("already there");
    }else{
      setDiscoverState(!discoverState);
      setJoinedState(!joinedState);
  
    }
  }

  const switchScreenToDiscover = () =>{
    if(!discoverState){
      console.log("already there");
    }else{
      setDiscoverState(!discoverState);
      setJoinedState(!joinedState);
    }
  }
  
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf')
  })

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();
  return (
    <>
      <Header />
      <NavigationContainer>
        
      </NavigationContainer>
      <Footer discoverState={discoverState} joinedState={joinedState} onPressLeft={switchScreenToJoined} onPressRight={switchScreenToDiscover} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
