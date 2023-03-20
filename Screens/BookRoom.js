import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';

const BookRoom = () => {
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
                <Text style={[styles.name, styles.textWithShadow]}>BOOK ROOM</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.outer1}>
                    <View style={styles.bodyContent1}>
                        <View style={styles.profileContainer}>
                            <Text style={{marginLeft:10}}>Calendar</Text>
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
                <View style={{marginTop: 50, marginLeft:20}}>
                    <Text style={{marginLeft:10, marginBottom:15, fontWeight:"500"}}>Morning Appointments</Text>
                </View>
                <View></View>
                <View style={{marginTop: 50, marginLeft:20}}>
                    <Text style={{marginLeft:10, marginBottom:15, fontWeight:"500"}}>Afternoon Appointments</Text>
                </View>
                <View></View>
                <View style={{marginTop: 50, marginLeft:20}}>
                    <Text style={{marginLeft:10, marginBottom:15, fontWeight:"500"}}>Evening Appointments</Text>
                </View>
                <View></View>
                <View style={styles.buttonRight1}>
                    <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.bookButton}
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
    marginTop: 20,
    backgroundColor:"#F3F7F8",
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
  },
  infoContainer: {
    marginTop: 20,
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
    marginTop:1,
  },
  info1: {
    fontSize: 12,
    color: '#696969',
    alignItems:"center"
  },
  outer1:{
    backgroundColor:"#FFFFFF",
    borderRadius:40,
    marginTop:20,
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
  buttonRight1:{
    alignItems: "flex-end",
    padding: 20,
    marginTop:136
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 11,
    textAlign:"center"
  }
});

export default BookRoom;