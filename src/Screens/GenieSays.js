import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, Fragment } from "react";
import { Slider } from "react-native";

import DropdownMoratorium from "../components/DropdownMoratorium";

import useEMIs from "../utils/internal/EMI";

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

const GenieSays = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [stateVal, setStateVal] = useState(0);

  const [enableMor, setEnableMor] = useState(false);
  const [morData, setMorData] = useState(false);

  const [reload, setReload] = useState(0);
  const [data, setData] = useState([]);

  const { getEMIs, setEMIs, loading } = useEMIs();

  const [value1, setValue1] = useState(105000);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const [value4, setValue4] = useState(null);


  useEffect(() => {

    async function fetchData() {
      let response = await getEMIs();
      setData(response['data']);
    }

    fetchData();
  }, [reload])


  const calcMor = () => {
    let n = data[0].tenure * 12;
    let r = data[0].interest / 1200;
    let emi = data[0].emi;
    let duration = value4;
    let balance = (105000 * ((1 + r) ** n)) - ((emi / r) * (((1 + r) ** n) - 1))
    let newEmi = 58510 * ((1 + r) ** duration) - 58510
    return newEmi
  }

  return (
    <SafeAreaView style={{ paddingBottom: 55 }}>
      <StatusBar backgroundColor="#5e17eb" translucent={true} />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View
              style={{
                width: "90%",
                height: 300,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={[styles.card, styles.shadowProp, styles.elevation]}>
                <Text
                  style={{
                    fontSize: 30,
                    color: "black",
                    marginLeft: 15,
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                >
                  Enter Info
                </Text>
                <View
                  style={{
                    width: "90%",
                    justifyContent: "center",
                    marginLeft: 15,
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <View style={[styles.textInputWrapper, { marginTop: "5%" }]}>
                    <TextInput
                      placeholder="Interest Rate"
                      clearTextOnFocus={true}
                      keyboardType={"number-pad"}
                      value={value2} onChangeText={setValue2}
                    />
                  </View>
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
                  <View style={[styles.textInputWrapper, { marginTop: "5%" }]}>
                    <TextInput placeholder="Tenure" clearTextOnFocus={true} keyboardType={"number-pad"}
                      value={value3} onChangeText={setValue3} />
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
                      setModalVisible(!modalVisible);
                      setEnableMor(true);
                      setEMIs(value1, value2, value3);
                      setReload(reload + 1)
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
                source={require("../assets/Images/final_1.png")}
                style={{ height: 200, flex: 1 }}
                resizeMode="contain"
              />
              <View style={{ flex: 1, marginLeft: 20 }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 20,
                  }}
                >
                  DEBT REPAYMENT ADVISOR
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 20,
                  }}
                >
                  GENIE SAYS
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Minimize penalties,{" "}
                </Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "white" }}
                >
                  Maximize benefits.{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            width: "100%",
            height: 300,
            marginTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              margin: 10,
              marginLeft: 17,
            }}
          >
            Loans
          </Text>
          <View style={[styles.cardReport, { margin: 10, height: "20%" }]}>
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
                marginBottom: 3,
              }}
            >
              HDFC BANK
            </Text>

            <View style={styles.textWrapper}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                LOAN DISBURSED:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {"  "}
                  1.05 L
                </Text>
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1.2,
                }}
              >
                EMI PAYMENT:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  1.08 L
                </Text>
              </Text>
            </View>
            <View style={styles.textWrapper}>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1,
                }}
              >
                INTEREST RATE:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {"  "}
                  {loading === false && data[0] !== undefined && reload >= 0 ? data[0].interest : "NA"}
                </Text>
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontSize: 12,
                  fontWeight: "bold",
                  flex: 1.2,
                }}
              >
                TENURE:
                <Text
                  style={{
                    fontWeight: "normal",
                    paddingLeft: 10,
                    fontSize: 15,
                  }}
                >
                  {" "}
                  {loading === false && data[0] !== undefined && reload >= 0 ? data[0].tenure : "NA"} yrs
                </Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginTop: 20,
                justifyContent: "space-between",
                alignItems: "space-between",
                height: 30,
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    width: "80%",
                    borderColor: "#0779f3",
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={{ color: "#0779f3", fontSize: 13 }}>
                    Enter Details
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 2 }}>
                <Text
                  style={{
                    paddingLeft: 50,
                    fontSize: 12,
                    fontWeight: "bold",
                    flex: 1,
                  }}
                >
                  EMI AMOUNT:
                  <Text
                    style={{
                      fontWeight: "normal",
                      paddingLeft: 10,
                      fontSize: 15,
                    }}
                  >
                    {"  "}
                    {loading === false && data[0] !== undefined && reload >= 0 ? Math.round(data[0].emi) : "NA"}
                  </Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                height: "30%",
                marginTop: 0,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 5,
                  fontSize: 20,
                  color: "#5e17eb",
                }}
              >
                TOTAL: {loading === false && data[0] !== undefined && reload >= 0 ? Math.round(data[0].tenure * data[0].emi * 12) : "NA"}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "#5e17eb",
                  marginRight: 15,
                }}
              >
                BALANCE: {loading === false && data[0] !== undefined && reload >= 0 ? Math.round((data[0].tenure * data[0].emi * 12) - 108000) : "NA"}
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.cardReport2, { margin: 10, height: 350 }]}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 20 }}>
              MORATORIUM REQUEST
            </Text>
          </View>
          <View style={{ width: "100%", height: 200, marginTop: 15 }}>
            <View
              style={[
                styles.textInputWrapper,
                { marginTop: "5%", marginLeft: 10, width: "86%" },
              ]}
            >
              <TextInput placeholder="Enter duration" clearTextOnFocus={true} keyboardType={"number-pad"}
                value={value4} onChangeText={setValue4} onEndEditing={() => { setMorData(true); }}
                editable={enableMor || data[0] != undefined} />
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginLeft: 50 }}>Duration: </Text>
              <Text style={{ flex: 1 }}>{morData === true ? value4 : "NA"} </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginLeft: 50 }}>Moratorium Type: </Text>
              <Text style={{ flex: 1 }}>Increased EMI </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginLeft: 50 }}>Increase in EMI: </Text>
              <Text style={{ flex: 1 }}>
                Rs. {morData === true ? Math.round(calcMor()) : "NA"}
              </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={{ flex: 1, marginLeft: 50 }}>
                New EMI:
              </Text>
              <Text style={{ flex: 1 }}>Rs. {morData === true ? Math.round(calcMor() + data[0].emi): "NA"} </Text>
            </View>

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: 20,
              }}
            >
              {enableMor || data[0] != undefined && <TouchableOpacity
                style={{
                  width: "70%",
                  backgroundColor: "#0779f3",
                  padding: 7,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 15 }}>Submit</Text>
              </TouchableOpacity>}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    width: "100%",
    marginTop: 7,
    justifyContent: "space-between",
    alignItems: "space-between",
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
  cardReport2: {
    backgroundColor: "white",
    borderRadius: 35,
    paddingTop: 15,
    borderColor: "#a37bf4",
    borderWidth: 2,
    paddingLeft: 20,
    width: "93%",
    marginVertical: 10,
    marginBottom: 0,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  cardReport: {
    backgroundColor: "white",
    borderRadius: 35,
    paddingTop: 15,
    borderColor: "#a37bf4",
    borderWidth: 2,
    paddingLeft: 20,
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

export default GenieSays;
