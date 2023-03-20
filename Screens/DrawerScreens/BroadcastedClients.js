import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import colors from '../../assets/consts/colors';
import ClientProfile from "../../assets/consts/ClientProfile";

const BroadcastedClients = () => {

    // new codes below 

    const [profile, setProfile] = useState(ClientProfile)

    const clickEventListener = item => {
      Alert.alert(item.title)
    }
  
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
              <View>
                <TouchableOpacity
                  style={[styles.card, { backgroundColor: colors.secondary }]}
                  onPress={() => {
                    clickEventListener(item)
                  }}>
                    <View style={styles.cardHeader}>
          <Image style={styles.cardImage} source={{ uri: item.photo }} />
          <Text style={styles.type}>{item.type}</Text>
        </View>
                  <View style={styles.cardBody}>
          <Text style={styles.cardText}>{item.agegroup}</Text>
        </View>
                </TouchableOpacity>
  
                <View style={styles.cardHeader}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={[styles.title, { color: colors.dark }]}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: colors.white,
    },
    list: {
      paddingHorizontal: 5,
      backgroundColor: colors.white,
    },
    listContainer: {
      alignItems: 'center',
    },
    /******** card **************/
    card: {
      shadowColor: '#52006A',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
  
      elevation: 12,
      marginVertical: 20,
      marginHorizontal: 40,
      backgroundColor: colors.secondary,
      //flexBasis: '42%',
      width: 120,
      height: 120,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
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

export default BroadcastedClients;
  