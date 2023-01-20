import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import DropdownLoan from "../components/DropdownLoan";
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
  ActivityIndicator
} from "react-native";

import useLoans from "../utils/internal/Loans";

const GenieGives = () => {

  const [dataVis, setDataVis] = useState(false);

  const [reload, setReload] = useState(0);
  const [data, setData] = useState([]);

  const { getLoans, setLoans, loading } = useLoans();

  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  useEffect(() => {

    async function fetchData() {
      let response = await getLoans();
      setData(response['data']);
    }

    fetchData();
  }, [reload])


  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5e17eb" translucent={true} />

      <ScrollView>
        {/* HEADER */}
        <View
          style={{ borderBottomRightRadius: 35, borderBottomLeftRadius: 35 }}
          overflow="hidden"
        >
          <ImageBackground
            source={require("../assets/Images/background2.png")}
            overflow="hidden"
            resizeMode="cover"
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
              }}
            >
              <Image
                source={require("../assets/Images/final_1.png")}
                style={{ height: 200, flex: 1 }}
                resizeMode="contain"
              />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 20,
                  }}
                >
                  LOAN UNDERWRITING
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 20,
                  }}
                >
                  GENIE GIVES
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Your wish,{" "}
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Is my command.{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={[
              styles.card,
              styles.shadowProp,
              styles.elevation,
              { marginTop: 20 },
            ]}
          >
            <Text
              style={{
                fontSize: 35,
                fontWeight: "600",
                color: "#757575",
                marginTop: 5,
                marginLeft: 10,
              }}
            >
              Enter Info
            </Text>
            <View style={{ width: "100%", marginTop: 15 }}>
              <DropdownLoan value={value1} setValue={setValue1} />
            </View>
            <View style={[styles.textInputWrapper, { marginTop: "4%" }]}>
              <TextInput placeholder="Loan Amount" clearTextOnFocus={true} value={value2} onChangeText={setValue2} />
            </View>
            <View style={styles.textInputWrapper}>
              <TextInput placeholder="Tenure" clearTextOnFocus={true} value={value3} onChangeText={setValue3} />
            </View>
            <View
              style={{
                paddingTop: 12,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#0779f3",
                  padding: 7,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setLoans(value1, value2, value3);
                  setReload(reload + 1);
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {loading === true ?
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
          : data[0] === undefined ? 
            <></>
          :
          <View style={{ width: "100%", height: 350, marginTop: 30 }}>
            <View
              style={{
                justifyContent: "space-between",
                marginLeft: 25,
                marginRight: 25,
                alignItems: "space-between",
                flexDirection: "row",
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 23, marginBottom: 10 }}
              >
                Loan offers
              </Text>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              styles={{ backgroundColor: "white", marginTop: 10 }}
            >
              <View
                style={[
                  styles.goalCard,
                  {
                    height: 300,
                    width: 150,
                    margin: 10,
                    borderWidth: 2,
                    borderColor: "#bd8c5c",
                    flexDirection: "column",
                  },
                ]}
              >
                <View
                  style={{
                    flex: 1.8,
                    marginTop: 10,
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                  overflow="hidden"
                >
                  <Image
                    source={require("../assets/Images/bob.png")}
                    resizeMode="contain"
                    style={{ width: 70 }}
                  ></Image>
                </View>

                {/* DIVIDER */}
                <View
                  style={{
                    backgroundColor: "#bd8c5c",
                    width: "100%",
                    flex: 0.05,
                    marginTop: 7,
                  }}
                />
                <View
                  style={[
                    styles.statsWrapper,
                    { flex: 4.2, width: "100%", height: "100%" },
                  ]}
                >
                  <Text style={styles.statsValText}>{data[0]['bob']['amount']}</Text>
                  <Text style={styles.statsValText}>{data[0]['bob']['interest']}</Text>
                  <Text style={styles.statsValText}>{data[0]['bob']['tenure']}</Text>
                  <Text style={{ fontSize: 15 }}>{data[0]['bob']['condition']}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#3CB043",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 0,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#FF2E2E",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 8,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>Reject</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.goalCard,
                  {
                    height: 300,
                    width: 150,
                    margin: 10,
                    borderWidth: 2,
                    borderColor: "#bd8c5c",
                    flexDirection: "column",
                  },
                ]}
              >
                <View
                  style={{
                    flex: 1.8,
                    marginTop: 10,
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                  overflow="hidden"
                >
                  <Image
                    source={require("../assets/Images/hdfc.png")}
                    resizeMode="contain"
                    style={{ width: 65 }}
                  ></Image>
                </View>

                {/* DIVIDER */}
                <View
                  style={{
                    backgroundColor: "#bd8c5c",
                    width: "100%",
                    flex: 0.05,
                    marginTop: 7,
                  }}
                />
                <View
                  style={[
                    styles.statsWrapper,
                    { flex: 4.2, width: "100%", height: "100%" },
                  ]}
                >
                  <Text style={styles.statsValText}>{data[0]['hdfc']['amount']}</Text>
                  <Text style={styles.statsValText}>{data[0]['hdfc']['interest']}</Text>
                  <Text style={styles.statsValText}>{data[0]['hdfc']['tenure']}</Text>
                  <Text style={{ fontSize: 15 }}>{data[0]['hdfc']['condition']}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#3CB043",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 0,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#FF2E2E",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 8,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>Reject</Text>
                </TouchableOpacity>
              </View>
              <View
                style={[
                  styles.goalCard,
                  {
                    height: 300,
                    width: 150,
                    margin: 10,
                    borderWidth: 2,
                    borderColor: "#bd8c5c",
                    flexDirection: "column",
                  },
                ]}
              >
                <View
                  style={{
                    flex: 1.8,
                    marginTop: 10,
                    marginBottom: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                  overflow="hidden"
                >
                  <Image
                    source={require("../assets/Images/sbi.png")}
                    resizeMode="contain"
                    style={{ width: 100 }}
                  ></Image>
                </View>

                {/* DIVIDER */}
                <View
                  style={{
                    backgroundColor: "#bd8c5c",
                    width: "100%",
                    flex: 0.05,
                    marginTop: 7,
                  }}
                />
                <View
                  style={[
                    styles.statsWrapper,
                    { flex: 4.2, width: "100%", height: "100%" },
                  ]}
                >
                  <Text style={styles.statsValText}>{data[0]['sbi']['amount']}</Text>
                  <Text style={styles.statsValText}>{data[0]['sbi']['interest']}</Text>
                  <Text style={styles.statsValText}>{data[0]['sbi']['tenure']}</Text>
                  <Text style={{ fontSize: 15 }}>{data[0]['sbi']['condition']}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#3CB043",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 0,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    backgroundColor: "#FF2E2E",
                    margin: 10,
                    marginLeft: 14,
                    marginTop: 7,
                    marginBottom: 8,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 13 }}>Reject</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>}
        <View
          style={{
            paddingTop: "5%",
            marginBottom: 65,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10 }}>Terms & Conditions Apply</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statsValText: {
    fontSize: 21,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  statsWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 35,
    paddingBottom: 45,
    paddingTop: 30,
    paddingHorizontal: 30,
    width: "85%",
    marginVertical: 10,
    flex: 4,
  },
  shadowProp: {
    shadowColor: "#17171",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: "grey",
    width: "100%",
    borderRadius: 10,
    paddingLeft: 13,
    padding: 3,
    marginTop: "6%",
  },
  goalCard: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    backgroundColor: "white",
    borderRadius: 35,
    width: "85%",
    marginVertical: 10,
    marginBottom: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

export default GenieGives;
