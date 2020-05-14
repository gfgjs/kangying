import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Details!</Text>
        </View>
    );
}

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>首页</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function SettingsScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>在线医院</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

function MineScreen({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>我的</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="首页" component={HomeScreen}/>
            <HomeStack.Screen name="Details" component={DetailsScreen}/>
        </HomeStack.Navigator>
    );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="在线医院" component={SettingsScreen}/>
            <SettingsStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    );
}

const MineStack = createStackNavigator();

function MineStackScreen() {
    return (
        <SettingsStack.Navigator>
            <MineStack.Screen name="我的" component={MineScreen}/>
            <MineStack.Screen name="Details" component={DetailsScreen}/>
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'md-volume-mute'
                            : 'md-volume-mute';
                    } else {
                        iconName = focused ? 'md-volume-mute' : 'md-volume-mute';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
            })}
                           tabBarOptions={{
                               activeTintColor: 'tomato',
                               inactiveTintColor: 'gray',
                               showIcon: false,
                           }}>
                <Tab.Screen name="首页" component={HomeStackScreen}/>
                <Tab.Screen name="在线医院" component={SettingsStackScreen}/>
                <Tab.Screen name="我的" component={MineStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
