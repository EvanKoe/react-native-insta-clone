import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import { AntDesign, Feather } from '@expo/vector-icons';

type FeedPostProps = {
  id?: number | undefined;
  username: string;
  userpic: string;
  image: string;
  description: string;
  nav: any;
};

const FeedPost = ({
  id = undefined,
  username = "User",
  userpic = "",
  image = "",
  description = "",
  nav = undefined
}: FeedPostProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image style={styles.ppic} source={{ uri: userpic }} />
        <Text style={styles.username}>{ username }</Text>
        <Feather name="more-horizontal" size={24} color='#8E8E8F' style={styles.more} />
      </View>

      { image !== "" ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <View style={{ width: 100, height: 100, backgroundColor: '#000' }} />
      ) }

      <View style={styles.likeFooter}>
        <Feather name="heart" size={24} color='#8E8E8F' style={styles.likeBarItem} />
        <AntDesign name="message1" size={24} color="#8E8E8F" style={styles.likeBarItem} />
        <Feather name="send" size={24} color='#8E8E8F' style={styles.likeBarItem} />
        <Feather name="bookmark" size={24} color='#8E8E8F' style={{ marginLeft: 'auto' }} />
      </View>
      <View style={styles.likeFooter}>
        <Text style={{ fontWeight: 'bold', color: '#fff' }}>{ username } </Text>
        <Text
          style={{ color: '#999' }}
        >{ description.length > 30 ? description.substring(0, 30) + '...' : description }</Text>
        <Text
          style={{ color: '#999', marginLeft: 'auto', marginRight: 10 }}
        >More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262837',
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
    height: 500,
    elevation: 20
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10
  },
  postHeader: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
    marginLeft: 15,
    flex: 1
  },
  ppic: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  more: {
    textAlignVertical: 'center',
    marginRight: 10
  },
  likeFooter: {
    flexDirection: 'row',
    paddingVertical: 15
  },
  likeBarItem: {
    marginRight: 20
  }
})

export default FeedPost;