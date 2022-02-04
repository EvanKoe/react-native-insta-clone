import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, FlatList, ListRenderItemInfo, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

type SenderInfos = {
  id: number;
  image: string;
  name: string;
  messages: Message[];
};

type Message = {
  id: number;
  sender: string;
  body: string;
  date: string;
};

type ConversationProps = {
  route: any;
  navigation: any;
}

const Conversation = ({ route, navigation }: ConversationProps) => {
  const msg: SenderInfos = route?.params?.msg;
  const renderMessage = (e: ListRenderItemInfo<Message>) => {
    const isYou = e.item.sender === 'You';

    return (
      <View style={isYou ? styles.out : styles.in}>
        <Text style={styles.inText}>{ e.item.body }</Text>
      </View>
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header nav={navigation} image={msg.image} name={msg.name} />
      <FlatList
        data={msg.messages}
        renderItem={renderMessage}
        style={styles.list}
        keyExtractor={e => e.id + Math.random().toString()}
      />
      <View style={styles.input}>
        <Text style={styles.inputText}>You are not allowed to type here</Text>
        <Ionicons name="md-send" size={24} color="#8E8E8F" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D29',
    height: '100%'
  },
  list: {
    marginHorizontal: 10,
    flex: 1,
    paddingBottom: 20
  },
  out: {
    marginVertical: 4,
    backgroundColor: '#1067d8',
    borderRadius: 20,
    borderBottomLeftRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginRight: 'auto',
    maxWidth: '80%'
  },
  in: {
    marginVertical: 4,
    backgroundColor: '#2b2b3d',
    borderRadius: 20,
    borderBottomRightRadius: 5,
    paddingVertical: 7,
    paddingHorizontal: 20,
    marginLeft: 'auto',
    maxWidth: '80%'
  },
  inText: {
    color: '#ddd'
  },
  input: {
    backgroundColor: '#686674',
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 5,
    alignSelf: 'center',
    width: '100%'
  },
  inputText: {
    color: '#8E8E8F',
    marginRight: 'auto'
  }
});

export default Conversation;
