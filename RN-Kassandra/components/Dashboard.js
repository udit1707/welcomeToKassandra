import React,{useState,useEffect} from "react";
import {Text,View,Image,StyleSheet,ScrollView,TouchableOpacity} from "react-native";
import {Card} from "react-native-elements";
import Preferences from "../components/Preferences";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Dashboard(props){

    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState([]);
    const [token,setToken]=useState("");
    const tokenConf = async ()=>{
        try{
            const value = await AsyncStorage.getItem("userToken");
            if(value !== null){
                console.log(value);
                setToken(value);
            }
        }catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        try{
            tokenConf();
            console.log(token);
            if (token!==null){
                fetch("http://welcome-to-kassandra.azurewebsites.net/employee/myprofile",{headers:{Authorization: 'Bearer ' + token}})
                .then((response)=>response.json())
                .then((json)=>{setData(json);console.log(json)})
                .catch((error)=>console.log("Error"))
                .finally(()=>{
                    if(data.message !== null || data.message !== undefined){
                        if (data.message==="Employee fetched"){
                            setIsLoading(false);
                            console.log(isLoading);
                        }
                    }
                });
            }
        } catch(e){
            console.log(e);
        }
        
    },[token]);
    const styles=StyleSheet.create(
        {
            container:{
                backgroundColor:"#003b46",
                flex:1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            scroll:{
                flex:1,
            },
            card:{
                backgroundColor:"#4cb5f5",
                alignItems:"center",
                borderRadius:5,
                borderWidth:5,    
            },
            cardDivider:{
                borderBottomWidth:3,
                borderBottomColor:"#c4dfe6"
            },
            cardTitle:{
                fontFamily:"sans-serif",
                fontSize:20,
                color:"#cb0000",
            },
            cardText:{
                fontFamily:"normal",
                fontSize:15,
                color:"#f1f1f2",
            },trapezoidleft: {
                marginLeft:"5%",
                marginRight:1,
                width: '45%',
                height: 0,
                borderBottomWidth: 60,
                borderBottomColor: "red",
                borderRightWidth: 20,
                borderRightColor: "transparent",
                borderStyle: "solid",
                borderTopLeftRadius:3,
                borderBottomLeftRadius:3,
            },
            trapezoidright:{
                marginLeft:1,
                width: '45%',
                height: 0,
                borderTopWidth: 60,
                borderTopColor: "red",
                borderLeftWidth: 20,
                borderLeftColor: "transparent",
                borderStyle: "solid",
                borderTopRightRadius:3,
                borderBottomRightRadius:3,
            },
            buttongrp:{
                padding:16,
                flexDirection:"row"
            },
            buttonTextLeft:{
                fontSize:20,
                fontWeight:"bold",
                color:"#f1f1f2",
                textAlign:"center",
                marginTop:"10%",
            },
            buttonTextRight:{
                fontSize:20,
                fontWeight:"bold",
                color:"#f1f1f2",
                textAlign:"center",
                marginTop:"-36%",  
            },
            cardImage:{
                height:"30%",
                width:"30%",
            }
        }
    );
    const back=()=>{
        props.navigation.navigate("menu");
    }
    
    return(
        <View style={styles.container}>
            {isLoading?<Text>Loading</Text>:(
                <ScrollView style={styles.scroll}>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.cardTitle}>Employee Info</Card.Title>
                    <Card.Divider style={styles.cardDivider}/> 
               <View>
               <Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}/>    
                <Text style={styles.cardText}>First Name : {data.employee.first_name}</Text>
                <Text style={styles.cardText}>Last Name : {data.employee.last_name}</Text>
                <Text style={styles.cardText}>Email : {data.employee.email}</Text>
                <Text style={styles.cardText}>Mobile : {data.employee.mobile}</Text>
               </View>
            </Card>
            <Card containerStyle={styles.card}>
                <Card.Title style={styles.cardTitle}>Employeer Info</Card.Title>
                <Card.Divider style={styles.cardDivider}/>
                <View>
               <Image/>    
                <Text style={styles.cardText}>Organization Name : {data.employer.org_name}</Text>
                <Text style={styles.cardText}>Email : {data.employer.email}</Text>
                <Text style={styles.cardText}>Address : {data.employer.address}</Text>
               </View>
            </Card>
            <Card containerStyle={styles.card}>
               <Card.Title style={styles.cardTitle}>Transaction History</Card.Title>
               <Card.Divider style={styles.cardDivider}/> 
               <Text style={styles.cardText}>Transactions done as of today : 5</Text>
               <Text style={styles.cardText}>ID of Last Transaction : 5</Text>
               <Text style={styles.cardText}>Feedback of Last Transaction : Excellent</Text>
            </Card>
            <View style={styles.buttongrp}>
              <TouchableOpacity style={styles.trapezoidleft} onPress={back}>
                <Text style={styles.buttonTextLeft}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trapezoidright}>
                <Text style={styles.buttonTextRight}>Help</Text>
              </TouchableOpacity>
            </View>
            </ScrollView>
            )}
        </View>
    );
}
