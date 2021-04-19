import React from "react"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Home,Login,ChangePassword} from "../screens"; 
import { View, Image, Text } from "react-native";
import { images } from "../constants";
const Drawer = createDrawerNavigator();
const Menu = ({route})=>
{
    
    return(
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen  name ="Home" component={Home} />
            <Drawer.Screen  name ="Đăng xuất" component={Login}/>
            <Drawer.Screen  name ="Đổi mật khẩu" component={ChangePassword} />            
        </Drawer.Navigator>
    )
};

export default Menu;
