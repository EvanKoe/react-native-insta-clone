import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Header = ({ tab = "UNKNOWN", nav = undefined }) => {
  return (
    <View style={styles.container}>
      <Feather name="camera" size={24} color="#8E8E8F" style={styles.direct} />
      <Text style={styles.title}>Instagram</Text>
      <TouchableOpacity onPress={() => nav && nav.navigate('DM')} style={styles.direct}>
        <Feather name="mail" size={25} color="#8E8E8F" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 100,
    alignContent: 'center'
  },
  title: {
    fontFamily: 'billabong',
    color: '#8E8E8F',
    fontSize: 40,
    paddingVertical: 0,
    marginVertical: 0,
    textAlignVertical: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  direct: {
    textAlignVertical: 'center',
    marginHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});

export default Header;
