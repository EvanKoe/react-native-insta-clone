import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
  nav: any;
  image: string;
  name: string;
};

const Header = ({ nav, image, name }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Ionicons style={styles.goBack} name="arrow-back" size={30} color="#8E8E8F" />
      </TouchableOpacity>
      <Text style={styles.title}>{ name }</Text>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 10,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
    marginRight: 15
  },
  title: {
    color: '#8E8E8F',
    fontWeight: 'bold',
    fontSize: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlignVertical: 'center'
  },
  goBack: {
    marginLeft: 15
  }
})

export default Header;
