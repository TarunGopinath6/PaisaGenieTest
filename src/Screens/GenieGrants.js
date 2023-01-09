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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";

const GenieGrants = () => {
  return (
    <SafeAreaView style={{ paddingBottom: 55 }}>
      <StatusBar backgroundColor="#a37bf4" translucent={true} />
      <ScrollView>
        {/* HEADER */}
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View
            style={{
              flex: 1,
              borderBottomLeftRadius: 35,
              borderBottomRightRadius: 35,
            }}
            overflow="hidden"
          >
            <ImageBackground
              source={require("../assets/Images/background2.png")}
              resizeMode="cover"
              style={{
                paddingTop: 5,
                height: 120,
              }}
            >
              {/* </View>
                <View style={{flex:1}}> */}
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "white",
                  marginTop: 13,
                  marginLeft: 17,
                }}
              >
                Genie Grants
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  marginTop: 2,
                  marginLeft: 17,
                }}
              >
                Claim exciting new rewards tailored just for you !
              </Text>
            </ImageBackground>
          </View>
        </View>

        {/* GENIE WISHES IMAGE  */}
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 35,
          }}
          >
          <Image
            source={require("../assets/Images/final_1.png")}
            style={{ height: 80, flex: 1 }}
            resizeMode="contain"
          />
          <View style={{ flex: 2 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                paddingLeft: 10,
                color: "#5e17eb",
              }}
            >
              PAISA GENIE'S
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#5e17eb" }}
            >
              3 Wasool Wishes
            </Text>
          </View>
        </View>

        {/* DIVIDER */}
        <View 
          style={{
            height: 1,
            backgroundColor: "#5e17eb",
            marginTop: 5,
            marginBottom: 5,
          }}
        />

        {/* THREE WISHES */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
          >
          <TouchableOpacity
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={[
                styles.card,
                styles.shadowProp,
                {
                  borderWidth: 2,
                  borderColor: "#FFD700",
                  backgroundColor: "#FFD700",
                },
              ]}
            >
              <Text style={{ fontSize: 20 }}>
                25% Off on Axis Mutual Fund units
              </Text>
              <Text style={{ fontSize: 13, marginTop: 10 }}>
                On the bob World App
              </Text>
              <Text style={{ fontSize: 17, marginTop: 10, color: "#000" }}>
                CODE: XZYSF12
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View
                style={[
                  styles.card,
                  styles.shadowProp,
                  {
                    borderWidth: 2,
                    borderColor: "#C0C0C0",
                    width: "85%",
                    backgroundColor: "#C0C0C0",
                  },
                ]}
              >
                <Text style={{ fontSize: 18 }}>
                  25% Off on Axis Mutual Fund units
                </Text>
                <Text style={{ fontSize: 11, marginTop: 10 }}>
                  On the bob World App
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10, color: "#000" }}>
                  CODE: XZYSF12
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View
                style={[
                  styles.card,
                  styles.shadowProp,
                  {
                    borderWidth: 2,
                    borderColor: "#CD7F32",
                    width: "85%",
                    backgroundColor: "#CD7F32",
                  },
                ]}
              >
                <Text style={{ fontSize: 18 }}>
                  25% Off on Axis Mutual Fund units
                </Text>
                <Text style={{ fontSize: 11, marginTop: 10 }}>
                  On the bob World App
                </Text>
                <Text style={{ fontSize: 15, marginTop: 10, color: "#000" }}>
                  CODE: XZYSF12
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* DIVIDER */}
        <View
          style={{
            height: 2.5,
            backgroundColor: "#5e17eb",
            marginTop: 40,
            marginBottom: 5,
          }}
        />

        {/* REWARDS LIST PER SECTION */}

        <View
          style={styles.offerRow}
          >
          <Text
            style={{
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 7,
            }}
          >
            Banking
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10}]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider} />

        <View style={styles.offerRow}>
          <Text
            style={{
              color: "black",
              marginTop: 15,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 23,
              marginBottom: 5,
            }}
          >
            Equities
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}/>

        <View style={styles.offerRow}>
          <Text style={styles.headingText}>
            Insurance
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}/>

        <View style={styles.offerRow}>
          <Text style={styles.headingText}>
            Mutual Funds
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}/>

        <View style={styles.offerRow}>
          <Text style={styles.headingText}>
            Pension Schemes
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            styles={{ backgroundColor: "white" }}
          >
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <View style={{ marginBottom: 8 }}>
                <Text style={{ fontSize: 33 }}>2.06 L</Text>
                <Text
                  style={{
                    marginLeft: 0,
                    fontWeight: "bold",
                    fontSize: 17,
                    color: "#713ADF",
                  }}
                >
                  A/C BALANCE
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>9.16 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    DEBIT
                  </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 15 }}>11.22 L</Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#713adf",
                      fontWeight: "bold",
                    }}
                  >
                    CREDIT
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              {/* closing units * nav */}
              <Text style={{ fontSize: 33 }}>2.6 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.2,600
              </Text>
              <Text
                style={{
                  marginLeft: 0,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                MUTUAL FUND
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>14.26 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.14,26,495
              </Text>
              <Text
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                PENSION VAL
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>35 K</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.35,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                RD VALUE
              </Text>
            </View>
            <View
              style={[styles.card, { height: 150, width: 150, margin: 10 }]}
            >
              <Text style={{ fontSize: 33 }}>1 L</Text>
              <Text style={{ fontSize: 14, marginBottom: 17, color: "gray" }}>
                Rs.1,00,000
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  fontWeight: "bold",
                  fontSize: 17,
                  color: "#713ADF",
                }}
              >
                TD VALUE
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* DIVIDER */}
        <View style={styles.divider}/>

        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            paddingBottom: 15,
            height: 50,
            paddingTop: 10,
          }}
          >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 10 }}>Terms & Conditions apply</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    width: "50%",
    height: 150,
    flex: 4,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth:1.5, 
    borderRightColor:'#5e17eb',
    borderLeftColor:'#5e17eb',
    borderTopColor:'#a37bf4',
    borderBottomColor:'#a37bf4'
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
  offerRow: {
    backgroundColor: "#fff",
    paddingBottom: 15,
  },
  headingText: {
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 7,
    marginTop: 15,
    marginLeft: 10,
  },
  divider: {
    height: 2.5,
    backgroundColor: "#5e17eb",
    marginBottom: 5,
  }
});

export default GenieGrants;
