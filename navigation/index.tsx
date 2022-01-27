import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View } from 'react-native';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import TabFourScreen from '../screens/TabFourScreen';
import TabFiveScreen from '../screens/TabFiveScreen';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      sceneContainerStyle={{
        backgroundColor: '#1D1D29'
      }}
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 80,
          paddingTop: 2,
          paddingBottom: 0,
          backgroundColor: '#262837',
          elevation: 20
        }
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation, route }: RootTabScreenProps<'TabOne'>) => ({
          title: '',
          tabBarIcon: ({ color }) => <Foundation name="home" size={30} color={color} />
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Feather name="search" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused, color }) => (
            <View
              style={{
                backgroundColor : focused ? '#00000000' : '#55c',
                borderRadius: 20,
                paddingVertical: 15,
                paddingHorizontal: 20
              }}
            >
              <FontAwesome name="plus-square-o" size={30} color={focused ? '#77f' : '#fff'} />
            </View>
          )
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Feather name="heart" size={30} color={color} />
        }}
      />
      <BottomTab.Screen
        name="TabFive"
        component={TabFiveScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle" size={30} color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
