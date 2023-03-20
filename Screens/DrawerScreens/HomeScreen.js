/** @format */

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

const colors = {
  white: "#fff",
  dark: "#000",
  primary: "#1CA494",
  secondary: "#F3F7F8",
  orange: "#FF6262",
  lightblue: "#D2DFFF",
  deepblue: "#1883D0",
  purple: "#C721B6",
  gold: "#D2BB3C",
};

export default function HomePage({ }) {
  const data = [
    {
      id: 1,
      name: "Comunity",
      image: "https://img.icons8.com/clouds/100/000000/groups.png",
      count: 124.711,
    },
    {
      id: 2,
      name: "Comunity",
      image: "https://img.icons8.com/clouds/100/000000/groups.png",
      count: 124.711,
    },
  ];

  const Card = ({ navigation }) => {
    return (
      <ScrollView>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
            }}>
            <View style={{ flexDirection: "row", margin: 20 }}>
              <Image
                style={styles.tinyLogo}
                source={require("../../Image/elp.png")}
              />
            </View>
            <View style={{ flexDirection: "column", marginTop: 10 }}>
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 10,
                  fontWeight: "360",
                  marginTop: 10,
                }}>
                {/* {clientprofile.type}  */}Type
              </Text>
              <Text
                style={{
                  color: colors.gold,
                  fontSize: 16,
                  fontWeight: "400",
                  marginTop: 10,
                }}>
                {/* {clientprofile.type}  */}
                Adult
              </Text>
              <Text
                style={{
                  color: colors.gold,
                  fontSize: 16,
                  fontWeight: "400",
                  marginTop: 10,
                }}>
                {/* {clientprofile.type}  */}
                Addiction
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.acceptButton}
              onPress={() => navigation.navigate("ClientDetails")}
            >
              <Text style={styles.accept}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const CalendarCard = ({ type }) => {
    return (
      <TouchableOpacity
        style={styles.card1}
        onPress={() => clickEventListener(item)}>
        <View
          style={{
            flex: 1,
            borderRadius: 30,
            padding: 10,
            backgroundColor: colors.lightblue,
            flexDirection: "row",
          }}>
          <View
            style={{
              backgroundColor: "#FF5733",
              width: 50,
              height: 75,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              shadowColor: "#00000021",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,
              elevation: 12,
            }}>
            <Text style={{ color: "white" }}>Mon</Text>
            <Text style={{ color: "white" }}>13</Text>
          </View>
          <View style={{ marginLeft: 50, flexDirection: "column" }}>
            <Text
              style={{
                color: "#2C5464",
                fontSize: 10,
                fontWeight: "360",
                marginTop: 10,
              }}>
              {/* {clientprofile.type}  */}Type
            </Text>
            <Text
              style={{
                color: "#2C5464",
                fontSize: 16,
                fontWeight: "500",
                marginTop: 1,
              }}>
              {/* {clientprofile.type}  */}Drake Richy
            </Text>
            <Text
              style={{
                color: "#2C5464",
                fontSize: 10,
                fontWeight: "360",
                marginTop: 1,
              }}>
              {/* {clientprofile.type}  */}Depression
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ClienteleCard = () => {
    return (
      <TouchableOpacity
        style={styles.card2}
        onPress={() => clickEventListener(item)}>
        <View
          style={{
            borderRadius: 10,
            padding: 10,
            shadowColor: "#00000021",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            width: 380,
            height: 95,
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
          }}>
          <View
            style={{
              borderRadius: 30,
              flexDirection: "row",
            }}>
            <View
              style={{
                marginRight: 30,
                marginLeft: 40,
                padding: 7,
                borderRadius: 25,
              }}>
              <Image source={require("../../Image/user.png")} />
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.appTextColor}>Clientele Case Detail</Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 10,
                  fontWeight: "360",
                  marginTop: 1,
                  textAlign: "center",
                  marginTop: 15,
                  padding:2,
                  borderRadius:10,
                  backgroundColor: "#249498",
                }}>
                {/* {clientprofile.type}  */}Click Here
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../Image/carnegie_bg.png")}
        resizeMode='cover'
        style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Good Morning Dr. Tracy</Text>
        </View>
        <View style={styles.bg}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.buttonRight}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.logoutButton}
                // onPress={handleSubmitPress}>
              >
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textColor}>Don't forget!</Text>
            </View>
            <View style={styles.container1}>
              <View
                style={{
                  backgroundColor: "#F3F7F8",
                  marginRight: 20,
                  padding: 7,
                  borderRadius: 25,
                }}>
                <Image
                  style={styles.tinyLogo}
                  source={require("../../Image/icon_book.png")}
                />
              </View>
              <View style={{ flex: 2, marginTop:6 }}>
                <Text style={styles.appTextColor}>
                  Appointment with Dan Brown
                </Text>
              </View>
              <View style={{ flex: 1, marginTop:6, marginLeft:20 }}>
                <Text style={styles.appTextColor}> 11:30am</Text>
              </View>
            </View>
            <View>
              <Text style={styles.pageTitle}>Broadcasted Clients</Text>
            </View>
            <View>
              <FlatList
                contentContainerStyle={{ paddingLeft: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <Card type={item} />}
              />
            </View>
            <View>
              <Text style={styles.pageTitle}>Upcoming Appointments</Text>
            </View>
            <View>
              <FlatList
                contentContainerStyle={{ paddingLeft: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => <CalendarCard type={item} />}
              />
            </View>
            <View>
              <ClienteleCard />
            </View>
            <View style={styles.card3}>
              <View style={styles.buttonRight}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.bookButton}
                  // onPress={handleSubmitPress}>
                >
                  <Text
                    style={{
                      color: "#000000",
                      fontSize: 18,
                      fontWeight: "700",
                    }}>
                    Book Room
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutButton: {
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#D2BB3CC9",
  },
  accept: {
    fontSize: 10,
    color: "white",
    backgroundColor: "#FF8064",
    padding: 5,
    borderRadius: 20,
    width: 70,
    textAlign: "center",
  },
  acceptButton: {
    backgroundColor: "#D2BB3C1A",
    padding: 11,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#D2BB3CC9",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
  },
  bookButton: {
    backgroundColor: "#FFFFFF",
    padding: 11,
    width: 380,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: "center",
    textAlign: "center",
    borderColor: "#26C4D3",
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
  },
  pageTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "500",
    fontSize: 16,
  },
  image: {
    flex: 1,
  },
  cardImage: {
    height: 220,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
  },
  textContainer: {
    marginTop: 100,
  },
  bg: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 5,
  },
  buttonRight: {
    alignItems: "flex-end",
    padding: 15,
  },
  textColor: {
    color: "blue",
    marginBottom: 10,
    marginLeft: 15,
  },
  appTextColor: {
    color: "#249498",
    fontSize: 14,
  },
  container1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 10,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    height: 170,
    width: 223,
    marginRight: 20,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  card1: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    height: 97,
    width: 279,
    marginRight: 20,
    backgroundColor: colors.secondary,
    borderRadius: 30,
  },
  card2: {
    height: 95,
    width: 400,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card3: {
    justifyContent: "center",
    alignItems: "center",
  },
});
