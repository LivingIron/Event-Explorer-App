
import { StyleSheet} from 'react-native';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import Discover from './components/molecules/Discover';
import Joined from './components/molecules/Joined';
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

enableScreens();

export default function App({navigation}) {

  
  
  /* ==========================Font Loading=================================== */

  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf')
  })

  if (!loaded) {
    return null;
  }

  /* ===========================Stack Navigation========================== */

  const Stack = createNativeStackNavigator();

  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>       
         <Stack.Screen name='Discover' component={Discover} />
         <Stack.Screen name='Joined' component={Joined} />
        </Stack.Navigator>
        <Footer /> 
      </NavigationContainer>
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
