
import { View,Text } from 'react-native';
import Home from './Screen/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Whatsnew from './Screen/Menu/Whatsnew';
import Testimoni from './Screen/Menu/Testimoni';
import About from './Screen/Menu/About';
import Contact from './Screen/Menu/Contact';
import Highlights from './Screen/Menu/Highlights';
import Arts from './Screen/Components/Arts';
import Charity from './Screen/Components/Charity';
import Edu from './Screen/Components/Edu';
import Tech from './Screen/Components/Tech';
export default function App() {
  Stack=createNativeStackNavigator()
  return (
      <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{ headerShown: false,gestureDirection: 'horizontal', // Adjust as needed
       animationEnabled: true }}
          >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Whatsnew" component={Whatsnew}/>
      <Stack.Screen name="Testimoni" component={Testimoni}/>
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="Contact" component={Contact}/>
      <Stack.Screen name="Highlights" component={Highlights}/>
      <Stack.Screen name="Arts" component={Arts}/>
      <Stack.Screen name="Charity" component={Charity}/>
      <Stack.Screen name="Edu" component={Edu}/>
      <Stack.Screen name="Tech" component={Tech}/>

      </Stack.Navigator>
      </NavigationContainer>
      // {/* <Home/> */}

  );
}
 
