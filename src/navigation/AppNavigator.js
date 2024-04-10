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
    Search,
    Profile,
    Favs
} from '../screens';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AppNavigator/>
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
                                            focused ? '#F9813A' : '#E5E5E5'
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

    )
    
    function AppNavigator() {
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    }
}

export default AppNavigator

const styles = StyleSheet.create({})