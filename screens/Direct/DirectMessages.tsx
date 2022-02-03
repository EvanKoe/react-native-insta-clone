import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItemInfo, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import { xOrMore } from '../../constants/functions';
import Header from './Header';

type MessageObject = {
  id: number;
  image: string;
  name: string;
  messages: {
      id: number;
      sender: string;
      body: string;
      date: string;
  }[];
};

const DirectMessages = ({ navigation }) => {
  const [fields, setFields] = useState<string[]>(messages.map(e => e.name));
  const renderConv = (e: ListRenderItemInfo<MessageObject>) => {
    return (
      <TouchableOpacity style={styles.convContainer}>
        <Image source={{ uri: e.item.image }} style={styles.convImage} />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.convTitle} >{ xOrMore(e.item.name, 30) }</Text>
          <Text style={{ color: '#ddd9' }}>{
            xOrMore(e.item.messages[e.item.messages.length - 1].body, 35)
          }</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header nav={navigation} />
      <SearchBar data={messages.map((e) => e.name)} setState={setFields} />
      <FlatList
        data={messages.filter(e => fields === [''] || fields.indexOf(e.name, 0) !== -1)}
        style={{ paddingHorizontal: 20 }}
        renderItem={e => renderConv(e)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D1D29",
    height: '100%'
  },
  convContainer: {
    flexDirection: 'row',
    marginVertical: 2,
  },
  convImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
    marginRight: 10
  },
  convTitle: {
    fontWeight: 'bold',
    color: '#ddd'
  }
})

export default DirectMessages;

const messages: MessageObject[] = [
  {
    id: 0,
    image: 'data:image/jpeg;base64,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',
    name: 'Philippe',
    messages: [
      {
        id: 0,
        sender: 'Philippe',
        body: 'Hi there ! Ready to lunch ? I booked a restaurant for today !',
        date: '13:24'
      },
      {
        id: 1,
        sender: 'Philippe',
        body: 'We\'ll meet at 1pm in front of the workspace !',
        date: '13:27'
      },
      {
        id: 2,
        sender: 'You',
        body: 'Great ! See you soon !',
        date: '13h30'
      }
    ]
  },
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCu_5fDK1jhDGCAwewGXaPxm2Rr4SV4bR_w&usqp=CAU',
    name: 'Jake',
    messages: [
      {
        id: 0,
        sender: 'Jake',
        body: 'Hello ! How are you and your family ? Is your wife healing well ?',
        date: '15:04'
      },
      {
        id: 1,
        sender: 'You',
        body: 'Yes, thanks ! She\'s glad you asked !',
        date: '15:17'
      }
    ]
  }
];