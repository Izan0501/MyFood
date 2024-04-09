import { StatusBar } from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import {
  Home,
  OrderDelivery,
  Restaurant,
  Search,
  Profile,
  Favs
} from './src/screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'relative',
    margin: 0,
    padding: 0,
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
  }
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          screenOptions
        }
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialIcons
                    name="local-restaurant"
                    size={30}
                    color={
                      focused ? '#F9813A' : '#E5E5E5'
                    }
                  />
                </View>
              )

            }
          }}
        />

        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AntDesign
                    name="search1"
                    size={26}
                    color={
                      focused ? '#F9813A' : '#E5E5E5'
                    }
                  />

                </View>
              )

            }
          }}
        />

        <Tab.Screen
          name='Favs'
          component={Favs}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialIcons
                    name="favorite"
                    size={26}
                    color={
                      focused ? '#F9813A' : '#E5E5E5'  /*'#fedac5'*/
                    }
                  />
                </View>
              )

            }
          }}
        />

        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AntDesign
                    name="user"
                    size={26}
                    color={
                      focused ? '#F9813A' : '#E5E5E5'
                    }
                  />
                </View>
              )

            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

