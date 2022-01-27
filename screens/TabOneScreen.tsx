import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import FeedPost from '../components/FeedPost';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={values}
        renderItem={(e) => (
          <FeedPost
            username={e.item.username}
            image={e.item.image}
            userpic={e.item.userpic}
            description={e.item.description}
          />
        )}
        keyExtractor={(e) => 'feedPos_' + e.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D1D29'
  }
});

const values = [
  {
    id: 0,
    username: "User1",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  },
  {
    id: 1,
    username: "User2",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  },
  {
    id: 2,
    username: "User1",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  },
  {
    id: 3,
    username: "User2",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  },
  {
    id: 4,
    username: "User1",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  },
  {
    id: 5,
    username: "User2",
    userpic: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    description: "Wow, look at this beautiful orange picture I just shot !"
  }
];