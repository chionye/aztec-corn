import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";
import colors from '../../assets/consts/colors';
import ClientProfile from "../../assets/consts/ClientProfile";

const Addiction = () => {

    // new codes below 

    const [profile, setProfile] = useState(ClientProfile)

    const clickEventListener = item => {
      Alert.alert(item.title)
    }

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
  
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={profile}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => {
            return item.id
          }}

          renderItem={({ item }) => {
            return (
              <Card />
            )
          }}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      backgroundColor: colors.white,
    },
    list: {
      paddingHorizontal: 5,
      backgroundColor: colors.white,
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
    listContainer: {
      alignItems: 'center',
    },
    /******** card **************/
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
      width: 200,
      margin: 5,
      backgroundColor: colors.secondary,
      borderRadius: 10,
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    type: {
      fontWeight: 'bold',
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
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
    cardImage: {
      height: 50,
      width: 50,
      alignSelf: 'center',
    },
    title: {
      fontSize: 24,
      flex: 1,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
  })

export default Addiction;
  