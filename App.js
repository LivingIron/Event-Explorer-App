import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/molecules/Footer';
import { useState } from "react";

export default function App() {

  const [discoverState,setDiscoverState]=useState(true);
  const [joinedState,setJoinedState] = useState(false);

  const switchScreens = () =>{
      setDiscoverState(!discoverState);
      setJoinedState(!joinedState);
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Footer discoverState={discoverState} joinedState={joinedState} onPress={switchScreens} />
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
