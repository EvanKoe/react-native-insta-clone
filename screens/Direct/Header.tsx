import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = ({ nav }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#8E8E8F" />
      </TouchableOpacity>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 100,
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  title: {
    color: '#8E8E8F',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingRight: 30,
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Header;