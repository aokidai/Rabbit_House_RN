import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery, Login } from './screens'
import Tabs from './navigation/tabs'
import Menu from './navigation/Menu';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Tabs, Menu} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;