import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

import DropdownGrows from "../components/DropdownGrows"

import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Modal,
  Alert,
  Pressable,
} from "react-native";

const GenieGrows = () => {
  const [modalVisibleGrows, setModalVisibleGrows] = useState(false);
  const [dataVis, setDataVis] = useState(false);

  return (
    <SafeAreaView style={{ paddingBottom: 55 }}>
      <StatusBar backgroundColor="#5e17eb" translucent={true} />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleGrows}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisibleGrows(!modalVisibleGrows);
          }}
        >
          <View style={styles.centeredView}>
            <View
              style={{
                width: "90%",
                height: 420,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={[styles.card, styles.shadowProp, styles.elevation]}>
                <Text
                  style={{
                    fontSize: 35,
                    color: "black",
                    marginLeft: 10,
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                >
                  Enter Info
                </Text>
                <View style={{ width: "90%" }}>
                  <DropdownGrows></DropdownGrows>
                </View>
                <View
                  style={{
                    width: "90%",
                    justifyContent: "center",
                    marginLeft: 15,
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <View style={[styles.textInputWrapper, { marginTop: "8%" }]}>
                    <TextInput
                      placeholder="Cost of Living"
                      clearTextOnFocus={true}
                    />
                  </View>
                  <View style={[styles.textInputWrapper, { marginTop: "8%" }]}>
                    <TextInput
                      placeholder="No. of dependants"
                      clearTextOnFocus={true}
                    />
                  </View>
                </View>

                <View
                  style={{
                    paddingTop: 12,
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10%",
                    marginLeft: 8,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "90%",
                      backgroundColor: "#0779f3",
                      padding: 7,
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: 5,
                    }}
                    onPress={() => {setModalVisibleGrows(!modalVisibleGrows); setDataVis(true)}}
                  >
                    <Text style={{ color: "white", fontSize: 15 }}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <ScrollView>
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
                source={require("../assets/Images/final_2.png")}
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
                  INVESTMENT ADVISOR
                </Text>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 20,
                  }}
                >
                  GENIE GROWS
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Minimal Risks,{" "}
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Maximal Rewards.{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* STATISTICS */}
        <View
          style={[
            styles.cardReport,
            {
              margin: 10,
              height: 250,
            },
          ]}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
                marginBottom: 15,
              }}
            >
              PAISA STATISTICS
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>2 L</Text>
              <Text>SURPLUS {"\n"}INCOME</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>5 L</Text>
              <Text> CURRENT {"\n"}INVESTMENT</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>6.3 L</Text>
              <Text>INVESTMENT {"\n"} VALUE</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>1.3 L</Text>
              <Text> NET {"\n"}INVESTMENT</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>7 %</Text>
              <Text> % OF INCOME {"\n"} INVESTED</Text>
            </View>
            <View style={styles.statsWrapper}>
              <Text style={styles.statsValText}>26 %</Text>
              <Text> RATE OF {"\n"}RETURNS</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: "80%",
            margin: 35,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "80%",
              backgroundColor: "white",
              borderWidth: 2,
              borderColor: "#5e17eb",
              padding: 7,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
            }}
            onPress={() => {setModalVisibleGrows(!modalVisibleGrows);setDataVis(false)}}
          >
            <Text style={{ color: "#5217eb", fontSize: 15 }}>
              Generate Investment Plan
            </Text>
          </TouchableOpacity>
        </View>

        {dataVis===true && <View
          style={[
            styles.cardReport,
            {
              margin: 10,
              marginTop: 0,
              height: 275,
              padding: 20,
            },
          ]}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 19,
                marginBottom: 20,
                color: "#5e17eb",
              }}
            >
              LOW RISK : LOW REWARD
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, flex: 1 }}>
              Total Amount Invested :{" "}
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", flex: 1 }}>
              {" "}
              1.5 L
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, flex: 1 }}>
              % of Income Invested :{" "}
            </Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", flex: 1 }}>
              {" "}
              8 %
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, flex: 1 }}>
              Recurring Deposit : NPS{" "}
            </Text>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}> 75 K</Text>
              <Text style={{ fontSize: 17, color: "grey" }}>(50 %)</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, flex: 1 }}>Term Deposits : </Text>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}> 60 K</Text>
              <Text style={{ fontSize: 17, color: "grey" }}>(40 %)</Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, flex: 1 }}>Mutual Funds :</Text>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}> 15 K</Text>
              <Text style={{ fontSize: 17, color: "grey" }}>(10 %)</Text>
            </View>
          </View>
        </View>
        }

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statsValText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  statsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textInputWrapper: {
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "90%",
    borderRadius: 10,
    paddingLeft: 13,
    padding: 3,
    marginTop: "6%",
  },
  cardReport: {
    backgroundColor: "white",
    borderRadius: 35,
    paddingTop: 15,
    borderColor: "#a37bf4",
    borderWidth: 2,
    width: "93%",
    marginVertical: 10,
    marginBottom: 0,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    backgroundColor: "white",
    borderRadius: 35,
    paddingTop: 20,
    paddingLeft: 20,
    width: "85%",
    height: 500,
    marginVertical: 10,
    marginBottom: 0,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    width: "50%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default GenieGrows;
