/** @format */

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import styled from "styled-components";
import Text from "../../components/Text";
import { Card, Badge } from "react-native-paper";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Loader from "../../components/Loader";
import Storage from "../../utils/Storage";
import Api from "../../utils/Api";
import { Greetings, TruncateAccountNo } from "../../utils/Functions";
import TransferList from "../../components/TransferList";

let ScreenWidth = Dimensions.get("window").width;
export default HomeScreen = ({ route, navigation }) => {
  const theEmail = route.params.email !== undefined ? route.params.email : null;
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [errortext, setErrortext] = useState("");
  const [loading, setLoading] = useState(false);
  const [transferLst, setTransferLst] = useState([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [transType, setTransType] = useState("");
  const [status, setStatus] = useState("");
  const [notifications, setNotifications] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureLoanEntry, setSecureLoanEntry] = useState(true);

  useEffect(() => {
    setLoading(true);
    Storage.getData("login")
      .then((data) => data)
      .then((value) => {
        value = JSON.parse(value);
        setEmail(value.email);
        pageLoad(value.email);
      })
      .catch((err) => console.log(err));
  }, []);

  function pageLoad(em) {
    let dataToSend = {
      formId: "getFullData",
      email: theEmail != null ? theEmail : em,
    };

    console.log(dataToSend, email, em);
    Api(dataToSend)
      .then((json) => {
        setLoading(false);
        json = JSON.parse(json);
        // If server response message same as Data Matched
        console.log(json)
        if (json.output == "success") {
          setData(json.data);
          setTransferLst(json.transfer);
          Storage.storeData("account", json.data);
          Storage.storeData("transferList", json.transfer);
        } else {
          setErrortext(json.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function toggle(item) {
    setVisible(!visible);
    setName(item.reciever_name);
    setAmount(item.amount);
    setDate(item.Trans_time);
    setTransType(item.trans_type);
    setStatus(item.trans_status);
  }

  const updateSecureTextEntry = () => {
    let currentSecureEntry = secureTextEntry;
    setSecureTextEntry(!currentSecureEntry);
  };

  const updateSecureLoanEntry = () => {
    let currentSecureEntry = secureLoanEntry;
    setSecureLoanEntry(!currentSecureEntry);
  };

  return (
    <Container>
      <Loader loading={loading} />
      <View style={styles.notificationBell}>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Badge style={styles.badge1} size={40}>
            {notifications ? (
              <MaterialCommunityIcons
                name={"bell-badge"}
                size={22}
                color={"#CC5500"}
              />
            ) : (
              <Feather name={"bell"} size={22} color={"#fff"} />
            )}
          </Badge>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageCover}>
          <Image
            style={styles.image}
            source={require("../../../assets/paypal.png")}
          />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text center large black>
          <Greetings />
        </Text>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.accountContainer}>
          <View style={styles.coverCard}>
            <Card style={styles.card}>
              <Card.Content>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Account", {
                      account: data,
                    })
                  }>
                  <View>
                    <Text style={styles.thickText1}>
                      <TruncateAccountNo
                        msg={"Silver Credit Account"}
                        accountNo={data.account_number}
                      />
                    </Text>
                  </View>
                  <View style={styles.hide}>
                    <View>
                      <Text style={styles.largeText}>
                        ${secureTextEntry ? parseFloat(data.bal).toFixed(2).toLocaleString() : "xxxxxxxx"}
                      </Text>
                      <Text>Current Balance</Text>
                    </View>
                    <View style={styles.eye}>
                      <TouchableOpacity onPress={() => updateSecureTextEntry()}>
                        {secureTextEntry ? (
                          <Feather name='eye-off' color='#ffffff' size={20} />
                        ) : (
                          <Feather name='eye' color='#ffffff' size={20} />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Card.Content>
            </Card>
            <Card style={styles.card1}>
              <Card.Content>
                <View>
                  <Text style={styles.thickText1}>
                    <TruncateAccountNo
                      msg='My Loan'
                      accountNo={data.loan_account}
                    />
                  </Text>
                </View>
                <View style={styles.hide}>
                  <View>
                    <Text style={styles.largeText}>
                      ${secureLoanEntry ? data.loan_balance : "xxxxxxxx"}
                    </Text>
                    <Text>Loan Balance</Text>
                  </View>
                  <View style={styles.eye}>
                    <TouchableOpacity onPress={() => updateSecureLoanEntry()}>
                      {secureLoanEntry ? (
                        <Feather name='eye-off' color='#ffffff' size={20} />
                      ) : (
                        <Feather name='eye' color='#ffffff' size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </Card.Content>
            </Card>
          </View>

          <Card style={styles.card2}>
            <Card.Content>
              <TouchableOpacity style={styles.coverPlus}>
                <View style={styles.coverIcon}>
                  <Ionicons
                    name={"ios-document-text-outline"}
                    size={22}
                    color={"#1434A4"}
                  />
                </View>
                <Text style={styles.regularText}>Account Summary</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
          <TransferList
            data={transferLst}
            callback={toggle}
            name={name}
            amount={amount}
            date={date}
            transType={transType}
            visible={visible}
            status={status}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #1434a4;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    height: 100,
  },
  eye: {
    marginTop: 20,
  },
  notificationBell: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  imageCover: { width: 200, height: 100 },
  hide: { flexDirection: "row", justifyContent: "space-between" },
  image: {
    flex: 1,
    width: 200,
    height: 100,
    alignItems: "center",
    resizeMode: "contain",
  },
  titleContainer: {
    marginBottom: 30,
  },
  accountContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  coverCard: {
    padding: 20,
  },
  card: {
    backgroundColor: "#00308F",
    padding: 10,
    borderRadius: 8,
  },
  card1: {
    backgroundColor: "#1434A4",
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  card2: {
    borderRadius: 8,
    padding: 0,
    marginTop: 30,
    backgroundColor: "#FFF",
  },
  largeText: {
    fontSize: 30,
    padding: 10,
  },
  regularText: {
    color: "#000",
    fontSize: 18,
  },
  coverPlus: {
    flexDirection: "row",
    marginRight: 10,
    fontSize: 18,
  },
  coverIcon: {
    marginRight: 10,
  },
  actions: {
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 15,
    width: ScreenWidth,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
  thickText1: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  arrowIcon: {
    marginTop: 10,
    fontSize: 18,
  },
  badge: {
    fontSize: 13,
    backgroundColor: "#E5E4E2",
  },
  badge1: {
    backgroundColor: "#5D3FD3",
  },
  leftText: {
    flexDirection: "row",
  },
  iconLeft: {
    marginRight: 10,
    marginTop: 10,
  },
  smallText: {
    color: "#000",
    fontSize: 13,
  },
  scrollview: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    marginBottom: 45,
    marginTop: 20,
  },
  arrowIcon: {
    marginTop: 10,
    fontSize: 18,
  },
  innerCardTop: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  innerCardMid: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  whiteBg: {
    backgroundColor: "#fff",
  },
  thinText: {
    color: "#000",
  },
});
