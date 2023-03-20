import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default ProfileScreen = ({navigation}) => {
  
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
            />
            
            <View style={styles.body}>
                <View style={styles.bodyContent}>
                <Text style={styles.name}>Tracy Owen</Text>
                <Text style={styles.info}>tracyo@cc.ie</Text>
                </View>
                <View>
                    <View style={styles.outer}>
                    <View style={styles.profileContainer}>
                        <Text>Profile</Text>
                    </View>
                    <View style={styles.bodyContent1}>
                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon1}
                            source={require("../Image/key.png")}
                            />
                            <Text style={styles.info1}>Name</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon1}
                            source={require("../Image/key.png")}
                            />
                            <Text style={styles.info1}>Mobile</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon1}
                            source={require("../Image/key.png")}
                            />
                            <Text style={styles.info1}>Email</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon1}
                            source={require("../Image/key.png")}
                            />
                            <Text style={styles.info1}>Gender</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.outer}>
                    <View style={styles.profileContainer}>
                        <Text>Type of client worked with</Text>
                    </View>
                    <View style={styles.bodyContent1}>
                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon2}
                            source={require("../Image/icon_user.png")}
                            />
                            <Text style={styles.info1}>Adult</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon2}
                            source={require("../Image/icon_edit.png")}
                            />
                            <Text style={styles.info1}>Adolescence</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon2}
                            source={require("../Image/icon_friends.png")}
                            />
                            <Text style={styles.info1}>Couple</Text>
                        </View>

                        <View style={styles.menuBox1}>
                            <Image
                            style={styles.icon2}
                            source={require("../Image/icon_users.png")}
                            />
                            <Text style={styles.info1}>Family</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.outer1}>
                    <View style={styles.profileContainer}>
                        <Text>Type of client worked with</Text>
                    </View>
                    <View style={styles.bodyContent1}>
                        <View style={styles.menuBox3}>
                            <Text style={styles.info1}>Presenting issues worked with</Text>
                        </View>

                        <View style={styles.menuBox4}>
                            <View style={styles.inner}>
                                <Image
                                source={require("../Image/arrow.png")}
                                />
                            </View>
                        </View>

                        </View>
                    </View>
                    <View style={styles.outer1}>
                    <View style={styles.bodyContent1}>
                        <View style={styles.menuBox3}>
                            <Text style={styles.info1}>Modality applied</Text>
                        </View>

                        <View style={styles.menuBox4}>
                            <View style={styles.inner}>
                                <Image
                                source={require("../Image/arrow.png")}
                                />
                            </View>
                        </View>
                    </View>
                    </View>
                    <View style={styles.outer1}>
                    <View style={styles.bodyContent1}>
                        <View style={styles.menuBox3}>
                            <Text style={styles.info1}>Optimum Availability</Text>
                        </View>

                        <View style={styles.menuBox4}>
                            <View style={styles.inner}>
                                <Image
                                source={require("../Image/arrow.png")}
                                />
                            </View>
                        </View>

                        </View>
                    </View>
                </View>
            </View>
            <View style={{marginTop:60, marginBottom:50, marginLeft:15, marginRight:15}}>
                <TouchableOpacity onPress={() => alert("Button pressed")}>
                    <ImageBackground source={require("../Image/btn.png")}>
                    <Text style={styles.title}>Edit Profile</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1CA494',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#2C5464',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  container: {
    backgroundColor: "#F3F7F8"
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  bodyContent1: {
    flexDirection: 'row',
    justifyContent:"center",
    alignItems:"center",
    flexWrap: 'wrap',
  },
  menuBox1: {
    width: 95,
    height: 70,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'lightgrey',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 4,
  },
  menuBox2:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  menuBox3:{
    flex:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  menuBox4:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  info1: {
    fontSize: 12,
    color: '#696969',
    alignItems:"center"
  },
  outer:{
    backgroundColor:"#FFFFFF",
    paddingTop: 10,
    paddingBottom:20,
  },
  outer1:{
    backgroundColor:"#FFFFFF",
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
  profileContainer:{
    padding:15
  },
  icon1: {
    marginBottom:5
  },
  icon2: {
    marginBottom:5,
    padding:12,
    backgroundColor:"#F3F7F8",
    borderRadius:20
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 11,
    textAlign:"center"
  }
})
