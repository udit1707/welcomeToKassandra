import React,{useState} from "react";
import {Text,StyleSheet,Image,View,TouchableOpacity} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from '@use-expo/font';
import ParticleBackground from "react-native-particle-background";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Landing(props){
    const [modalVisible,setModalVisible]=useState(false);
    const toggleModal=()=>{
        setModalVisible(!modalVisible);
    };
    const [isLoaded]=useFonts(
        {
            "Cinzel":require("../assets/fonts/cinzel-regular.ttf"),
            "Oswald":require("../assets/fonts/Oswald-Regular.ttf"),
            "Roboto":require("../assets/fonts/Roboto-Medium.ttf"),
            "Assassins":require("../assets/fonts/AssassinS.ttf"),
        }
    );
    const styles = StyleSheet.create(
        {   
            container:{
                flex:1,
                justifyContent:"center",
                alignItems:"center",
            },
            view:{
                alignItems:"center",
                justifyContent:"center",
            },
            footer:{
                alignItems:"center",
                justifyContent:"center",
            },
            textLogo:{
                fontSize : 20,
                fontFamily : "Cinzel",
                color : "#c4dfe6",
            },
            textFooter:{
                fontSize : 13,
                fontFamily : "Oswald",
                color:"#f1f1f2"
            },
            imageAzure:{
                width:40,
                height:40,
            },
            imageKass:{
                width:160,
                height:90,
            },
            bg:{
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
            },
            button:{
                alignItems:"center",
                padding:10,
                backgroundColor:"#063852",
                elevation:3,
                borderRadius:4,
            },
            buttonText:{
                fontSize:15,
                fontFamily:"Roboto",
                color:"#f1f1f2",
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
                width:"70%",
                height:"30%",
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#4cb5f5",
                borderRadius:5,
                borderWidth:5,
                borderColor:"#c4dfe6",    
            },
            modalTitle:{
                fontFamily:"Oswald",
                fontSize:20,
                color:"#cb0000",
                marginBottom:5,
            },
            modalText:{
                fontFamily:"Oswald",
                fontSize:15,
                color:"#f1f1f2",       
            },
            modalButton:{
                alignItems:"center",
                padding:10,
                elevation:3,
                borderRadius:4,
                backgroundColor:"#5c8f22",
                marginTop:10,    
            },
            modalButtonText:{
                fontSize:15,
                fontFamily:"Oswald",
                color:"#f1f1f2",
            }
        }
    );
    const Navigate= async ()=>{
        toggleModal();
        try{
            const token = await AsyncStorage.getItem("userToken");
            if(token !==null){
                props.navigation.navigate("menu");
            }
            else{
                props.navigation.navigate("login");
            }
        }catch(e){
            console.log(e);
        }
    }
    if (!isLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.container}>
             <View style={styles.bg}>
                <ParticleBackground
                particleColor="#rgba(196,223,230,0.5)"
                particleSize={20}
                particleDispersion={80}
                backgroundColor="#003b46"
               /> 
            </View>
            <View style={styles.view}>
                <Image style={styles.imageKass} source={require('../assets/kass.png')}/>
                <Text style={styles.textLogo}>KASSANDRA</Text>
                <Text style={styles.textSubLogo}>CompanioN{"\n\n"}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>TAP TO BEGIN !</Text>
            </TouchableOpacity>
            <Modal isVisible={modalVisible} style={styles.modal}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Please Note</Text>
                    <Text style={styles.modalText}>This is a prototype app</Text>
                    <Text style={styles.modalText}>Final Product may vary in places</Text>
                    <TouchableOpacity style={styles.modalButton} onPress={Navigate}>
                        <Text style={styles.modalButtonText}>Next</Text>    
                    </TouchableOpacity>
                </View>
            </Modal>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>{"\n\n"}Powered by {"\n"}</Text>
                <Image style={styles.imageAzure} source={require('../assets/azure.png')}></Image>
            </View>
        </View>
        );
    }

}