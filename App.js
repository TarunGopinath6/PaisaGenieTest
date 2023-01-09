import { StyleSheet, Text, View, Button, StatusBar, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from 'react-native-vector-icons/Ionicons';

import * as NavigationBar from "expo-navigation-bar";

import Splash from "./src/Screens/Splash";
import MyGenie from "./src/Screens/MyGenie";
import Auth from "./src/Screens/Auth";
import Slider from "./src/Screens/Slider";
import Navigator from "./src/Screens/Navigator";
import Info from "./src/Screens/Info";
import Test from "./src/Screens/Test";
import Profile from './src/Screens/Profile';
import GenieGrants from './src/Screens/GenieGrants';
import GenieSays from './src/Screens/GenieSays';
import GenieGrows from './src/Screens/GenieGrows';
import GenieGives from './src/Screens/GenieGives';
import BankAccount from './src/Screens/BankAccount';
import Deposits from './src/Screens/Deposits';
import GenieProtects from './src/Screens/GenieProtects';
import Loading from './src/Screens/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const customGenieButton = ({focused}) => {
  <TouchableOpacity onPress={onPress} style={{
    top:-30,
    justifyContent:'center',
    alignItems: 'center'
  }}>
  </TouchableOpacity>
}

export function StackTabs() {
  return (
      <Tab.Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel:false,
        tabBarStyle: {
          position:'absolute',
          height: 55,
          backgroundColor:'white',
          borderWidth:2,
          borderColor:'rgba(94, 23, 235, 1)',
          borderTopLeftRadius:20,
          borderTopRightRadius:20,
          elevation:0,
          padding:2
        }
      }}
      initialRouteName='Test'
      >       
        <Tab.Screen name="MyGenie" component={MyGenie} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='cash' size={22} style={{
              color: focused ? '#8c52ff' : 'black',
              }}
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>MY GENIE</Text>
            </View>
          )
        }}/>
        {/* <Tab.Screen name="Navigator" component={Navigator} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='compass-outline' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>NAV</Text>
            </View>
          )
        }} /> */}
        <Tab.Screen name="GenieGrants" component={GenieGrants} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='ribbon' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>Rewards</Text>
            </View>
          )
        }} />
        <Tab.Screen name="GenieSays" component={GenieSays} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='ribbon' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>Debt</Text>
            </View>
          )
        }} />
        <Tab.Screen name="GenieGrows" component={GenieGrows} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='ribbon' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>Invest</Text>
            </View>
          )
        }} />
        <Tab.Screen name="GenieGives" component={GenieGives} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='ribbon' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>Loans</Text>
            </View>
          )
        }} />
        <Tab.Screen name="GenieProtects" component={GenieProtects} options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems:'center', justifyContent:'center', bottom:1, top:1}}>
            <Ionicons name='ribbon' size={22} style={{
              color: focused ? '#8c52ff' : 'black', 
              }} 
            />
            <Text style={{color: focused ? '#8c52ff' : 'black', fontSize:12}}>Insurance</Text>
            </View>
          )
        }} />
      </Tab.Navigator>
  )
}

export default function App() {
  NavigationBar.setBackgroundColorAsync("black");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Splash" component={Splash} ></Stack.Screen>
        <Stack.Screen name="Auth" component={Auth} ></Stack.Screen>
        <Stack.Screen name="Info" component={Info} ></Stack.Screen>
        <Stack.Screen name="Slider" component={Slider} ></Stack.Screen>  
        <Stack.Screen name="Profile" component={Profile} ></Stack.Screen>  
        <Stack.Screen name="BankAccount" component={BankAccount} ></Stack.Screen>  
        <Stack.Screen name="Deposits" component={Deposits} ></Stack.Screen>  
        <Stack.Screen name="Loading" component={Loading} ></Stack.Screen>  
        <Stack.Screen name="Test" component={Test} ></Stack.Screen>  
        <Stack.Screen name="StackTabs" component={StackTabs} ></Stack.Screen>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
});
