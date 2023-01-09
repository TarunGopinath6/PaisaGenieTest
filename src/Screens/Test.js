import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryBar,
  VictoryLegend,
  VictoryTheme,
} from "victory-native";

import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
  Alert,
  Modal,
  Pressable,
} from "react-native";

const Test = () => {
  return (
    <SafeAreaView>
      <Text>Test</Text>
    </SafeAreaView>
  )
}

export default Test


// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import React, { useState, useEffect } from "react";
// import {
//   VictoryChart,
//   VictoryGroup,
//   VictoryBar,
//   VictoryLegend,
//   VictoryTheme,
//   VictoryLine,
// } from "victory-native";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TextInput,
//   TouchableOpacity,
//   Dimensions,
//   ScrollView,
//   ImageBackground,
//   Alert,
//   Modal,
//   Pressable,
// } from "react-native";

// const data = [
//   { quarter: 1, month: 'JAN' },
//   { quarter: 2, month: 'FEB' },
//   { quarter: 3, month: 'MAR' },
//   { quarter: 4, month: 'APR' },
//   { quarter: 4, month: 'MAY' },
//   { quarter: 4, month: 'JUN' },
//   { quarter: 4, month: 'JUL' },
//   { quarter: 4, month: 'AUG' },
//   { quarter: 4, month: 'SEP' },
//   { quarter: 4, month: 'OCT' },
//   { quarter: 4, month: 'NOV' },
//   { quarter: 4, month: 'DEC' },
// ];

// const Test = () => {
//   return (
//     <SafeAreaView>
//       <StatusBar backgroundColor="#5e17eb" translucent={true} />
//       <ScrollView>
//       <View
//           style={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35}}
//           overflow="hidden"
//         >
//           <ImageBackground
//             source={require("../assets/Images/background2.png")}
//             overflow="hidden"
//             resizeMode="cover"
//           >
//             <View style={{flexDirection:'row'}}>  
//             <Text
//                   style={{
//                     fontSize: 25,
//                     fontWeight: "bold",
//                     color: "white",
//                     padding: 20,
//                     marginLeft:10,
//                     flex:2
//                   }}
//                 >
//                   BANK ACCOUNT
//                 </Text>
//                 <View style={{flex:1, marginTop:20,marginBottom:20, marginRight:20}}>
//                   <TouchableOpacity
//                       style={[
//                         styles.OptionButton,
//                         { marginLeft: 6, flexDirection: "row", width:'100%' },
//                       ]}
//                     >
//                     <View style={{ flex: 1 }}>
//                       <Ionicons name="arrow-back" size={17} style={styles.OptionIcon} />
//                     </View>
//                     <View style={{ flex: 3 }}>
//                       <Text style={{ color: "#000", fontSize: 14, marginLeft:10 }}>
//                         back
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//             </View>                
//           </ImageBackground>
//         </View>
//         <View style={styles.container}>
//          <VictoryChart width={Dimensions.get('window').width} height={200} theme={VictoryTheme.material}>
//          <VictoryLine
//             animate={{
//               duration: 2000,
//               onLoad: { duration: 2000 }
//             }}
//             style={{
//               data: { stroke: "#c43a31" },
//               parent: { border: "1px solid #ccc"}
//             }}
//             data={data}
//           />
//          </VictoryChart>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// };

// const styles = StyleSheet.create( {
//   container: {
//     width:'100%',
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f5fcff",
//   },
//   OptionButton: {
//     width: "47%",
//     borderWidth: 2,
//     borderColor: "#9064E8",
//     backgroundColor: "white",
//     padding: 7,
//     borderRadius: 30,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// })

// export default Test