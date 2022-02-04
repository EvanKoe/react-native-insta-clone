import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type SearchBarProps = {
  data: string[];
  setState: (e: string[]) => void | (() => void);
}

const SearchBar = ({
  data = [''],
  setState = () => {}
}: SearchBarProps) => {
  const [str, setStr] = useState<string>('');

  const finished = () => {
    if (data === [''] || str === '')
      return
    setState(data?.filter(e => e.toLowerCase().includes(str.toLowerCase())))
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Search ...'
        placeholderTextColor='#ddd'
        style={styles.input}
        onChangeText={(e) => setStr(e)}
        value={str}
        onEndEditing={finished}
      />
      <TouchableOpacity onPress={() => {
        setStr('')
        setState(data);
      }}>
        <AntDesign name="close" size={24} color="#ddd" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#6C6C6D',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 7,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    color: '#ddd',
    flex: 1
  }
});

export default SearchBar;
