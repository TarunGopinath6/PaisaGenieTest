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
  ActivityIndicator
} from "react-native";

import useInvests from "../utils/internal/Invest";

const GenieGrows = () => {
  const [modalVisibleGrows, setModalVisibleGrows] = useState(false);
  const [dataVis, setDataVis] = useState(false);

  const [reload, setReload] = useState(0);
  const [data, setData] = useState([]);

  const { getInvests, setInvests, loading } = useInvests();

  const [value1, setValue1] = useState(1122000);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  useEffect(() => {

    async function fetchData() {
      let response = await getInvests();
      setData(response['data']);
    }

    fetchData();
  }, [reload])


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
                  <DropdownGrows value={value2} setValue={setValue2} />
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
                      keyboardType={'number-pad'}
                      value={value3} onChangeText={setValue3}
                    />
                  </View>
                  <View style={[styles.textInputWrapper, { marginTop: "8%" }]}>
                    <TextInput
                      placeholder="No. of dependants"
                      clearTextOnFocus={true}
                      keyboardType={'number-pad'}
                      value={value4} onChangeText={setValue4}
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
                    onPress={() => {
                      setModalVisibleGrows(!modalVisibleGrows);
                      setDataVis(true);
                      setInvests(value1, value2, value3, value4);
                      setReload(reload + 1);
                    }}
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
            onPress={() => { setModalVisibleGrows(!modalVisibleGrows); setDataVis(false) }}
          >
            <Text style={{ color: "#5217eb", fontSize: 15 }}>
              Generate Investment Plan
            </Text>
          </TouchableOpacity>
        </View>


        {loading === true ?
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
          : data[0] !== undefined && reload >=0 ? 
            <View
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
                  Risk Type: {data[0].risk}
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
                <Text style={{ fontSize: 25, fontWeight: "bold", flex: 1 }}> {data[0].total} </Text>
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
                <Text style={{ fontSize: 25, fontWeight: "bold", flex: 1 }}> {data[0].percinvest.toFixed(2)} </Text>
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
                  {data[0]['primary']['name']} : NPS{" "}
                </Text>
                <View
                  style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}> {data[0]['primary']['value']} </Text>
                  <Text style={{ fontSize: 17, color: "grey" }}>({data[0]['primary']['perc']})</Text>
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
                <Text style={{ fontSize: 15, flex: 1 }}>{data[0]['secondary']['name']} </Text>
                <View
                  style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}> {data[0]['secondary']['value']}</Text>
                  <Text style={{ fontSize: 17, color: "grey" }}>({data[0]['secondary']['perc']})</Text>
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
                <Text style={{ fontSize: 15, flex: 1 }}>{data[0]['tertiary']['name']}</Text>
                <View
                  style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 25, fontWeight: "bold" }}> {data[0]['tertiary']['value']}</Text>
                  <Text style={{ fontSize: 17, color: "grey" }}>({data[0]['tertiary']['perc']})</Text>
                </View>
              </View>
            </View>:<></>
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
