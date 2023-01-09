import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppIntroSlider from "react-native-app-intro-slider";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import useIdentStore from "../storages/IdentStore";

const MyGenie = () => {
  const navigation = useNavigation();

  const SliderNav = () => {
    navigation.navigate("Slider", {});
  };
  const MyGenieNav = () => {
    navigation.navigate("MyGenie", {});
  };
  const SplashNav = () => {
    navigation.navigate("Splash", {});
  };
  const AuthNav = () => {
    navigation.navigate("Auth", {});
  };
  const InfoNav = () => {
    navigation.navigate("Info", {});
  };
  const TestNav = () => {
    navigation.navigate("Test", {});
  };
  const ProfileNav = () => {
    navigation.navigate("Profile", {});
  };
  const GenieGrantsNav = () => {
    navigation.navigate("GenieGrants", {});
  };
  const GenieSaysNav = () => {
    navigation.navigate("GenieSays", {});
  };
  const GenieGrowsNav = () => {
    navigation.navigate("GenieGrows", {});
  };
  const GenieGivesNav = () => {
    navigation.navigate("GenieGives", {});
  };
  const BankAccountNav = () => {
    navigation.navigate("BankAccount", {});
  };
  const DepositsNav = () => {
    navigation.navigate("Deposits", {});
  };
  const GenieProtectsNav = () => {
    navigation.navigate("GenieProtects", {});
  };
  const LoadingNav = () => {
    navigation.navigate("Loading", {});
  };

  const {referenceID, trackingID} = useIdentStore();

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={AuthNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Auth</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={SplashNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Splash</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={SliderNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Slider</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={MyGenieNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>MyGenie</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={InfoNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={TestNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>TEST</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={ProfileNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={GenieGrantsNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>GenieGrants</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={GenieSaysNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>GenieSays</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={GenieGrowsNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>GenieGrows</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={GenieGivesNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>GenieGives</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={BankAccountNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>BankAccount</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={DepositsNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Deposits</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={GenieProtectsNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>GenieProtects</Text>
        </TouchableOpacity>
      </View>      
      <View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={LoadingNav} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Loading</Text>
        </TouchableOpacity>
      </View><View style={styles.ButtonContainer}>
        <TouchableOpacity onPress={() => {console.log(referenceID); console.log(trackingID)}} style={styles.Button}>
          <Text style={{ color: "white", fontSize: 15 }}>Ident Print</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: "70%",
    backgroundColor: "#0779f3",
    padding: 7,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonContainer: {
    paddingTop: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyGenie;
