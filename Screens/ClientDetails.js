import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

const ClientDetails = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  
  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Text style={[styles.name, styles.textWithShadow]}>CLIENT DETAILS</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.outer1}>
                    <View style={styles.bodyContent1}>
                    <View>
                    <View style={styles.profileContainer}>
                        <Text style={{marginLeft:10, marginBottom:15}}>Type of client worked with</Text>
                    </View>
                    <View style={styles.card3}>
                        <View style={styles.card}>
                            <Image
                            style={{marginRight:5}}
                            source={require("../Image/sign.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.card}>
                        <Image
                            style={{marginRight:5}}
                            source={require("../Image/message.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={text => setPassword(text)}
                            />
                        </View>
                        <View style={styles.card}>
                        <Image
                            style={{marginRight:5}}
                            source={require("../Image/phone.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Mobile"
                            onChangeText={text => setPassword(text)}
                            />
                        </View>
                    </View>
                    </View>
                    </View>
                </View>
                <View style={styles.outer1}>
                <View style={styles.bodyContent1}>
                    <View>
                    <View style={styles.profileContainer}>
                        <Text style={{marginLeft:10, marginBottom:15}}>Client Therapy Details</Text>
                    </View>
                    <View style={styles.card3}>
                        <View style={styles.card}>
                            <Image
                            style={{marginRight:5}}
                            source={require("../Image/search.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Type"
                            value={email}
                            onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.card}>
                        <Image
                            style={{marginRight:5}}
                            source={require("../Image/plus.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Presenting issues"
                            onChangeText={text => setPassword(text)}
                            />
                        </View>
                        <View style={styles.card}>
                        <Image
                            style={{marginRight:5}}
                            source={require("../Image/calendar.png")}
                            />
                            <TextInput
                            style={styles.input}
                            placeholder="Modality"
                            onChangeText={text => setPassword(text)}
                            />
                        </View>
                    </View>
                    </View>
                    </View>
                </View>
                <View style={styles.outer1}>
                    <View style={styles.bodyContent1}>
                        <View style={styles.profileContainer}>
                            <Text style={{marginLeft:10, marginBottom:15}}>Appointment</Text>
                        </View>
                        <View style={styles.card3}>
                            <View style={styles.buttonRight}>
                                <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.bookButton}
                                onPress={showDatepicker}
                                >
                                <Text
                                    style={{
                                    color: "#000000",
                                    fontSize: 18,
                                    fontWeight: "700",
                                    }}>
                                    Select Date
                                </Text>
                                </TouchableOpacity>
                            </View>
                            <Text>Selected Date: {date.toLocaleString()}</Text>
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChange}
                                />
                            )}
                        </View>
                    </View>
                </View>
                <View style={{marginTop:60, marginBottom:50, marginLeft:15, marginRight:15}}>
                    <TouchableOpacity onPress={() => alert("Button pressed")}>
                        <ImageBackground source={require("../Image/btn.png")}>
                        <Text style={styles.title}>Enter</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1CA494',
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom:50
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  content: {
    flex:1,
    backgroundColor:"#F3F7F8",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  },
  infoContainer: {
    marginTop: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
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
  infoValue: {
    marginTop: 5,
  },
  menuBox3:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  bodyContent1: {
    flexDirection: 'column',
    justifyContent:"center",
    alignItems:"center",
    flexWrap: 'wrap',
    marginTop:20,
  },
  info1: {
    fontSize: 12,
    color: '#696969',
    alignItems:"center"
  },
  outer1:{
    backgroundColor:"#FFFFFF",
    borderRadius:40,
    marginTop:10,
    paddingTop: 10,
    paddingBottom:20,
    shadowColor: 'lightgrey',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 4,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 1,
    marginLeft:5,
    marginRight:5,
    marginBottom:10,
    width: 400,
    justifyContent:"center",
    flexDirection:"row",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderBottomColor: '#999',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 10,
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  card3: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRight: {
    alignItems: "flex-end",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 11,
    textAlign:"center"
  }
});

export default ClientDetails;