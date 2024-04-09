import { 
    StyleSheet,
    Text,
    View 
} from 'react-native'
import Home from '../screens/Home'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import React from 'react'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image
                            source={icons.cutlery}
                            resizeMod='contain'
                            style={{
                                width:25,
                                heigth: 25,
                                tintColor: focused ? '#FC6D3F' : '#000'
                            }}
                        />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({})