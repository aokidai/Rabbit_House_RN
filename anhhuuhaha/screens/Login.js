import React from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   StyleSheet,
   Alert,
} from 'react-native';
import database from '@react-native-firebase/database';
import { ThemeProvider } from '@react-navigation/native';
import store from './store';

const Login=({navigation})=>
{
    const [users, setUsers ] = React.useState("")
    const ref = database().ref('/users/');
    
    
    const [Username, setUsername] =  React.useState("");
    const [Password, setPassword] = React.useState("");
    //console.log("b "+Username, Password);
    function dangNhap()
    {
        console.log("Hello");
        let flag =0;
        ref.once("value")
        .then( snapshot=>{
            snapshot.forEach(u =>{ 
                if(u.val()!==null)
                {
                   const {username, password} = u.val();
                    /* console.log("a "+username, password);
                    console.log("b "+Username, Password); */
                    if(username== Username && password == Password)
                    {
                        flag =1;
                        console.log("Rabbit Houseへよこそう！");
                        console.log("(\\__(\\_");
                        console.log("(> ~ < )");
                        console.log(" *( ) *");
                        console.log("  * *");
                        navigation.navigate('Home');
                        store.dispatch({ 
                            type: 'LOGIN',
                            id: u.key,
                            username: username,
                        })
                    } 
                } 
            })
            if(flag ==0)
                alert("Sai Username hoặc Password!!!");
        })
    }

    return(
           <View style={styles.container}>
               <Text style={styles.text2}>Rabbit House</Text>
               <Text style={styles.text}> ĐĂNG NHẬP </Text>
               <TextInput  placeholder="Username"  style = {styles.textinput}
                   onChangeText = {text=> setUsername(text)}/>
               <TextInput  placeholder="Password" secureTextEntry={true} 
               style = {styles.textinput}
                   onChangeText = {text=>setPassword(text)}/>
               <TouchableOpacity style={styles.button} 
                onPress={dangNhap} 
                >
                       <Text style ={styles.textbutton}> Login </Text>
               </TouchableOpacity>
           </View>
    )
}
 const styles = StyleSheet.create(
   {
       container:{
           flex:1, 
           padding:10,
       },
        text2:{
            color: 'gray',
            fontWeight: 'bold',
            fontSize: 44,
            alignSelf: 'center',
            padding: 30,
        },
       text:{
           color: 'gray',
           fontWeight: 'bold',
           fontSize: 20,
           alignSelf: 'center',
           padding: 10,
       },
       textinput:{
           height:50,
           fontWeight:"bold",
           fontSize: 20,
           borderRadius: 5,
           borderWidth:1,
           margin:10,
       },
 
       button:{
           backgroundColor:'pink',
           height: 50,
           borderRadius:10,
           justifyContent:"center",
           alignItems: 'center',
           margin:10,
       }
       ,
       textbutton:{
           color:'white',
           fontSize: 24,
           fontWeight: 'bold'
       }
 })
 export default Login;

