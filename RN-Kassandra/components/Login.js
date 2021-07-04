import React,{useState,useEffect} from "react";
import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity,Dimensions,LogBox } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@use-expo/font';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Preferences from "../components/Preferences";
import Dialogues from "../components/AssisstantDialogue";
import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from "react-native-textinput-effects";
import Modal from  "react-native-modal";
import * as Speech from "expo-speech";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login(props){
    useEffect(
      ()=>{
        LogBox.ignoreAllLogs(true);
      },[]);

    const [loginName,setLoginName]=useState('');
    const [Password,setPassword]=useState('');
    const requestOptions={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({kassandraPortalId:loginName,password:Password})
    };               
    const [modalVisible,setModalVisible]=useState(false);
    const toggleModal =()=>{
      setModalVisible(!modalVisible);
    }
    const setToken= async (json) => {
      try{
        await AsyncStorage.setItem("userToken",json.token);
      }catch(e){
        console.log(e);
      }
    };
    const getToken = async () =>{
      try{
        const value = await AsyncStorage.getItem("userToken");
        console.log("my value");
        console.log(value);
        if (value !== null){
          if(value === undefined){
            console.log("value undefined");
          }
          return value;
        }
      }catch(e){
        console.log(e)
      }
    };
    const postData=()=>{
        fetch("http://welcome-to-kassandra.azurewebsites.net/login",requestOptions)
        .then((response)=>response.json())
        .then((json)=>{console.log(json);console.log(loginName);console.log(Password);setToken(json);})
        .catch((error)=>console.log(error))
        .finally(()=>console.log("Login Posted"));
    };

    const {height} = Dimensions.get('window');
    const [screenHeight,setScreenHeight]=useState(0);
    const onContentSizeChange = (contentWidth,contentHeight)=>{
        setScreenHeight(contentHeight);
    };
    const [isLoaded]=useFonts(
        {
            "Cinzel":require("../assets/fonts/cinzel-regular.ttf"),
            "Assassins":require("../assets/fonts/AssassinS.ttf"),
        }
    );
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#011a27",
        },
        content: {
          // not cool but good enough to make all inputs visible when keyboard is active
          paddingBottom: 0,
        },
        card1: {
          paddingVertical: 16,
        },
        card2: {
          padding: 16,
          marginTop:"15%"
        },
        input: {
          marginTop: 4,
        },
        title: {
          paddingBottom: 16,
          textAlign: "center",
          color: "#f1f1f2",
          fontSize: 20,
          fontWeight: "bold",
          opacity: 0.8,
        },
        trapezoidleft: {
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
        footer:{
            marginTop:"12%",
            alignItems:"center",
            justifyContent:"center",
        },
        textLogo:{
            fontSize : 20,
            fontFamily : "Cinzel",
            color : "#c4dfe6",
        },
        textSubLogo:{
            fontFamily:"Assassins",
            color:"red",
            fontSize:25,
        },
        modal:{
          alignItems:"center",
          justifyContent:"center",
        },
        modalView:{
          width:"90%",
          height:"50%",
          alignItems:"center",
          justifyContent:"center",
          backgroundColor:"#4cb5f5",
          borderRadius:5,
          borderWidth:5,
          borderColor:"#c4dfe6",
          padding:10,    
        },
        modalImgView:{
          width:'50%',
          height:'35%',
          borderRadius:3,
          borderWidth:3,
          borderColor:"#c4dfe6",
          margin:15,
        },
        modalImg:{
          height:undefined,
          width:undefined,
          flex:1,
        },
        modalInfoView:{
          width:"100%",
          height:"60%",
          alignItems:"center",
        },
        modalTitle:{
          fontSize:20,
          color:"#cb0000",
          marginBottom:5,
        },
        modalText:{
          fontSize:15,
          color:"#f1f1f2",       
        },
        modalButtonGrp:{
          padding:5,
          flexDirection:"row",
        },
        modalButton:{
          alignItems:"center",
          padding:10,
          elevation:3,
          borderRadius:4,
          backgroundColor:"#5c8f22",
          marginTop:10,    
          marginHorizontal:5,
        },
        modalButtonText:{
          fontSize:15,
          color:"#f1f1f2",
        },
        modalQuitView:{
          height:"5%",
          position:"absolute",
          top:0,
          right:0,
        },
        modalQuitBtn:{
          alignItems:"center",
          padding:10,
          elevation:3,
          borderRadius:4,
          backgroundColor:"red",
          marginTop:10,    
          marginHorizontal:5,
        }
      });
    const logOut = ()=>{props.navigation.navigate("landing")};
    const signup =()=>{props.navigation.navigate('signup')};
    const login =()=>{
      
      postData();
      props.navigation.navigate("menu");
    };
    const [modalIndex,setModalIndex]=useState(0);
    const indexNextToggle=()=>{
      if (modalIndex<2){
        setModalIndex(modalIndex+1);
      }
    }
    const indexPrevToggle=()=>{
      if (modalIndex>0){
        setModalIndex(modalIndex-1);
      }
    }
    const speechassist=()=>{
      let speech=Dialogues.login.hindi[modalIndex];
      let speechconfig={language:"hi",pitch:1.1};
      if(modalVisible===true){
        Speech.speak(speech,speechconfig);
      } else {
        Speech.stop();
      }
    };
    const Quit = ()=>{
      toggleModal();
      setModalIndex(0);
      Speech.stop();
    }
    const modalInfo=[
    {
      title:"Login",
      text1:"Fill in the login details",
      text2:"Then press the Done button"
    },
    {
      title:"SignUp",
      text1:"If you dont have an existing account",
      text2:"Press the SignUp button"
    },
    {
      title:"LogOut",
      text1:"If you want to exit from the account",
      text2:"Press the LogOut button"
    }
  ];
    if(!isLoaded){
            return <AppLoading/>
        }
    else{
        const scrollEnabled = screenHeight>height;
        return(<ScrollView style={styles.container} contentContainerStyle={styles.content} scrollEnabled={false} onContentSizeChange={onContentSizeChange}>
          <View style={[styles.card2, { backgroundColor: "transparent" }]}>
          <Text style={styles.title}>Employee Login</Text>
            <Kohana
              style={{ backgroundColor: "#a1de62" }}
              onChangeText={(text)=>setLoginName(text)}
              value={loginName}
              label={"Portal Name"}
              iconClass={FontAwesomeIcon}
              iconName={"user"}
              iconColor={"#cb0000"}
              iconSize={20}
              labelStyle={{ color: "#91627b" }}
              inputStyle={{ color: "#91627b" }}
              useNativeDriver
            />
            <Kohana
              style={[styles.input, { backgroundColor: "#a1d6e2" }]}
              secureTextEntry={true}
              onChangeText={(text)=>setPassword(text)}
              value={Password}
              label={"Password"}
              iconClass={FontAwesomeIcon}
              iconName={"lock"}
              iconColor={"#1995ad"}
              iconSize={20}
              labelStyle={{ color: "#91627b" }}
              inputStyle={{ color: "#91627b" }}
              useNativeDriver
            />
          </View>
          <View style={styles.buttongrp}>
              <TouchableOpacity style={styles.trapezoidleft} onPress={signup}>
                <Text style={styles.buttonTextLeft}>SignUp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trapezoidright} onPress={logOut}>
                <Text style={styles.buttonTextRight}>LogOut</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.buttongrp}>
              <TouchableOpacity style={styles.trapezoidleft} onPress={login}>
                <Text style={styles.buttonTextLeft}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.trapezoidright} onPress={toggleModal}>
                <Text style={styles.buttonTextRight}>Help</Text>
                <Modal isVisible={modalVisible} style={styles.modal}>
                  <View style={styles.modalView}>
                    <View style={styles.modalQuitView}>
                      <TouchableOpacity style={styles.modalQuitBtn} onPress={Quit}>
                          <Text style={styles.modalButtonText}>Quit</Text>    
                      </TouchableOpacity>
                      </View>
                      <View style={styles.modalImgView}><Image source={require("../assets/assistimg/login/login0.png")} style={styles.modalImg}/></View>
                      <View style={styles.modalInfoView}>
                      <Text style={styles.modalTitle}>{modalInfo[modalIndex].title}</Text>
                      <Text style={styles.modalText}>{modalInfo[modalIndex].text1}</Text>
                      <Text style={styles.modalText}>{modalInfo[modalIndex].text2}</Text>
                      <View style={styles.modalButtonGrp}>
                      <TouchableOpacity style={styles.modalButton} onPress={indexPrevToggle}>
                          <Text style={styles.modalButtonText}>Prev</Text>    
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalButton} onPress={speechassist}>
                          <Text style={styles.modalButtonText}>Help</Text>    
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.modalButton} onPress={indexNextToggle}>
                          <Text style={styles.modalButtonText}>Next</Text>    
                      </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
          </View>
          
          <View style={styles.footer}>
            
            <Text style={styles.textLogo}>KASSANDRA</Text>
            <Text style={styles.textSubLogo}>ComapanioN</Text>
          </View>
        </ScrollView>
        );
    }
};