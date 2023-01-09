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
  VictoryLine,
} from "victory-native";
import Ionicons from "react-native-vector-icons/Ionicons";

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

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const BankAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#5e17eb" translucent={true} />
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
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "white",
                  padding: 20,
                  marginLeft: 10,
                  marginBottom: 10,
                  flex: 2,
                  marginTop: 10,
                }}
              >
                BANK ACCOUNT
              </Text>
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  marginBottom: 20,
                  marginRight: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("MyGenie", {})}
                  style={[
                    styles.OptionButton,
                    {
                      marginLeft: 6,
                      flexDirection: "row",
                      width: "100%",
                      marginTop: 10,
                    },
                  ]}
                >
                  <View style={{ flex: 1 }}>
                    <Ionicons
                      name="arrow-back"
                      size={17}
                      style={styles.OptionIcon}
                    />
                  </View>
                  <View style={{ flex: 3 }}>
                    <Text
                      style={{ color: "#000", fontSize: 14, marginLeft: 10 }}
                    >
                      back
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View>
          <LineChart
            data={{
              labels: [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC",
              ],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#5ce1e6",
              backgroundGradientTo: "#5e17eb",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#5271ff",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              margin: 10,
              marginBottom: 5,
              marginTop: 15,
            }}
          >
            TOP 5 Spending Categories
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            {/* Card 1*/}
            <View
              style={[
                styles.card,
                {
                  height: 150,
                  width: 150,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 33, marginBottom: 7 }}>2.36 L</Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 7 }}>
                Rs.2,36,024
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                CREDIT CARD PAYMENT
              </Text>
            </View>
            {/* Card 2*/}
            <View
              style={[
                styles.card,
                {
                  height: 150,
                  width: 150,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 33, marginBottom: 7 }}>2.36 L</Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 7 }}>
                Rs.2,36,024
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                CREDIT CARD PAYMENT
              </Text>
            </View>
            {/* Card 3*/}
            <View
              style={[
                styles.card,
                {
                  height: 150,
                  width: 150,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 33, marginBottom: 7 }}>2.36 L</Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 7 }}>
                Rs.2,36,024
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                CREDIT CARD PAYMENT
              </Text>
            </View>
            {/* Card 4*/}
            <View
              style={[
                styles.card,
                {
                  height: 150,
                  width: 150,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 33, marginBottom: 7 }}>2.36 L</Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 7 }}>
                Rs.2,36,024
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                CREDIT CARD PAYMENT
              </Text>
            </View>
            {/* Card 5*/}
            <View
              style={[
                styles.card,
                {
                  height: 150,
                  width: 150,
                  margin: 10,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <Text style={{ fontSize: 33, marginBottom: 7 }}>2.36 L</Text>
              <Text style={{ fontSize: 14, color: "gray", marginBottom: 7 }}>
                Rs.2,36,024
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                CREDIT CARD PAYMENT
              </Text>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            width: "100%",
            height: 185,
            marginTop: 30,
            paddingBottom: 10,
          }}
        >
          <View
            style={[
              styles.cardReport,
              { margin: 10, marginTop: 0, height: "20%" },
            ]}
          >
            <Text
              style={{
                marginLeft: 5,
                fontWeight: "bold",
                fontSize: 20,
                color: "#5e17eb",
                marginBottom: 10,
              }}
            >
              INVESTMENT ANALYSIS
            </Text>
            {/* Bank analysis data -> categorywise -> credit card -> totaldebitamt */}
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.cardTitle, { flex: 2 }]}>DIVIDENDS:</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> + 0.1 K</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> - 0</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.cardTitle, { flex: 2 }]}>MUTUAL FUNDS:</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> + 0</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> - 4 K</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.cardTitle, { flex: 2 }]}>
                STOCKS & OPTIONS:
              </Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> + 0.001 K</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> - 0</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.cardTitle, { flex: 2 }]}>FD / RD:</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> + 7 K</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> - 0</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.cardTitle, { flex: 2 }]}>TOTAL:</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> + 7.1 K</Text>
              <Text style={[styles.cardBody, { flex: 1 }]}> - 4 K</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardBody: {
    fontWeight: "normal",
    paddingLeft: 10,
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  cardTitle: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
    flex: 1,
  },
  cardReport: {
    //backgroundColor: "rgba(255,255,255,0.9)",
    //backgroundColor:'rgba(140, 82, 255, 0.2)',
    backgroundColor: "rgba(92, 225, 230, 0.15)",
    //backgroundColor: "rgba(94, 23, 235, 0.2)",
    //backgroundColor: "rgba(0, 194, 203, 0.2)",
    borderRadius: 35,
    paddingTop: 15,
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
    width: "85%",
    height: 500,
    marginVertical: 10,
    marginBottom: 0,
    flex: 4,
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  OptionButton: {
    width: "47%",
    borderWidth: 2,
    borderColor: "#9064E8",
    backgroundColor: "white",
    padding: 7,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
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
});

export default BankAccount;
