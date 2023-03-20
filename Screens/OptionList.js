/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

export default function OptionList(){
  const data = [
    {
      id: 1,
      name: "Comunity",
      image: "https://img.icons8.com/clouds/100/000000/groups.png",
      count: 124.711,
    }
  ];

  const [options, setOptions] = useState(data);

  const clickEventListener = (item) => {
    Alert.alert("Message", "Item clicked. " + item.name);
  };

  const calendarCard = ({type}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => clickEventListener(item)}>
        <view style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#FF5733",
              width: 50,
              height: 100,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
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
        </view>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.contentList}
        columnWrapperStyle={styles.listContainer}
        data={options}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          <calendarCard type={item} />
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#ebf0f7",
  },
  contentList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: "#ebf0f7",
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

    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 30,
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#3399ff",
    fontWeight: "bold",
  },
  count: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#6666ff",
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#dcdcdc",
  },
  followButtonText: {
    color: "#dcdcdc",
    fontSize: 12,
  },
});
