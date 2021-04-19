import React from 'react';
import {
   Text,
   View,
   TouchableOpacity,
   TextInput,
   StyleSheet,
} from 'react-native';
import database from '@react-native-firebase/database';
import store from './store';

const ChangePassword=({navigation, route})=>
{
    const {id, username}= store.getState();
    const [users, setUsers ] = React.useState("")
    const ref = database().ref('/users/'+id );
    const [Username, setUsername] =  React.useState("");
    const [newPassword, setNewPassword] =  React.useState("");
    const [passwordConfirm, setPasswordConfirm] = React.useState("");
    function doiMatKhau()
    {
        let flag = 0;
        if (newPassword!="" && newPassword == passwordConfirm)
        {
            ref.set(
                {
                    username: username,
                    password: newPassword,
                   
                }
            )
            flag = 1;
            navigation.navigate('Login');
        }
        if(flag == 0) 
            alert("Password không trùng!!!");
      
    }
    return(
           <View style={styles.container}>
                <Text style={styles.text2}>Rabbit House</Text>
               <Text style={styles.text}> ĐỔI MẬT KHẨU </Text>
               <TextInput  placeholder="Password mới" secureTextEntry={true} style = {styles.textinput}
                   onChangeText = {text=>setNewPassword(text)}/>
                <TextInput  placeholder="Nhập lại password" secureTextEntry={true} style = {styles.textinput}
                    onChangeText = {text=>setPasswordConfirm(text)}/>
                       
               <TouchableOpacity style={styles.button} 
                onPress={doiMatKhau}
                >
                       <Text style ={styles.textbutton}> Đổi password </Text>
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
 export default ChangePassword;
