import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootTabs from './pages/RootTabs';

function HomeScreen() {
    return (
        <View style={{flex: 1}}>
            <RootTabs style={{flex: 1}}/>
        </View>
    );
}

function LoginScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Login Screen</Text>
            <Button title='登录' onPress={() => {
                navigation.navigate('Home');
            }}/>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <SafeAreaProvider style={{flex: 1}}>
            <NavigationContainer independent={true}>
                <Stack.Navigator headerMode='screen'>
                    <Stack.Screen name="登录" component={LoginScreen}/>
                    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
