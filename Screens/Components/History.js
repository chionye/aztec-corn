import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import colors from '../../assets/consts/colors';
import historyData from '../../assets/consts/historyData';

const History = () => {
  
  
  const renderItem = ({historyData}) => {
    return(
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: historyData.background }} style={styles.background} />
      <View style={styles.avatarContainer}>
        <Image source={{ uri: historyData.images }} style={styles.images} />
        <Text style={styles.name}>{historyData.name}</Text>
      </View>
    </TouchableOpacity>

    )
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={item => historyData.id}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    marginBottom:20,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginHorizontal:20,
    backgroundColor: colors.white,
    borderRadius:10,
    paddingBottom:20
  },
  background: {
    width: '100%',
    height: 60,
    resizeMode: 'cover',
  },
  avatarContainerback: {
    alignItems: 'center',
    marginTop: -35,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: colors.white,
  },
  name: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default History;
