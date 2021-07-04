import React, { Component,useEffect,useState } from 'react';
import {
    LogBox,
  Platform,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import Preferences from "../components/Preferences"; 
import Modal from "react-native-modal";
import { Button } from 'react-native-elements/dist/buttons/Button';
export default function JobsManufacturer(props) {
{
    const ManuJobs=[];
    const RetailJobs=[];
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState([]);
    const [modalVisible,setModalVisible]=useState(false);
    const [key,setKey]=useState(0);
    const toggleModal=()=>{
      setModalVisible(!modalVisible);
    }
    const configure=(i)=>{
      toggleModal();
      setKey(i);
    }
    useEffect(()=>{
        LogBox.ignoreAllLogs(true);
        fetch("http://welcome-to-kassandra.azurewebsites.net/employee/recommendations")
        .then((response)=>response.json())
        .then((json)=>setData(json))
        .catch((error)=>console.log("Error"))
        .finally(()=>setIsLoading(false));
    },[]);
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#003b46',
        },
        card:{
          backgroundColor:"#4cb5f5",
          alignItems:"center",
          borderRadius:5,
          borderWidth:5,
          padding:0,
          marginBottom:10,
        },
        cardAlignment :{
          flexDirection:'row',
          justifyContent:'flex-end',
          alignItems:'stretch',
        },
        cardImageView:{
          width:'34%',
          height:'100%',
        },
        cardImage:{
          height:undefined,
          width:undefined,
          flex:1
        },
        infoSection:{
          backgroundColor:'#4cb5f5',
          width:'66%',
          height:'100%',
          padding:5,
        },
        cardButtonView:{
          flexDirection:'row',
          justifyContent:'space-evenly',
          padding:5,
        },
        cardButton:{
          backgroundColor:'green',
          alignItems:'center',
          padding:5,
          borderRadius:3,

        },
        cardDivider:{
          borderBottomWidth:2,
          borderBottomColor:"#c4dfe6"
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
          fontSize:20,
          color:"#cb0000",
          marginBottom:5,
        },
        modalText:{
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
          color:"#f1f1f2",
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
          flexDirection:"row",
          marginBottom:"15%"
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
    });
    /*
    <Card containerStyle={styles.card}>
            <View style={styles.cardAlignment}>
              <View style={styles.cardImageView}>
                <Image source={require("../assets/retai.jpg")} style={styles.cardImage}/>
              </View>
              <View style={styles.infoSection}>
                <Card.Title>ORG NAME</Card.Title>
                <Card.Divider style={styles.cardDivider}/>
                <Text>Happiness</Text>
                <View style={styles.cardButtonView}>
                  <TouchableOpacity style={styles.cardButton} onPress={toggleModal}>
                    <Text>MoreInfo</Text>
                    <Modal isVisible={modalVisible} style={styles.modal}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>OrgName</Text>
                        <Text style={styles.modalText}>Email</Text>
                        <Text style={styles.modalText}>Address</Text>
                        <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                          <Text style={styles.modalButtonText}>Back</Text>    
                        </TouchableOpacity>
                      </View>
                    </Modal>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cardButton}>
                    <Text>Apply</Text>
                  </TouchableOpacity>   
                </View>     
              </View>  
            </View> 
         </Card>
    
    */  
    const back = ()=>{
      props.navigation.navigate("jobs");
    } ;
    return (
      <View style={styles.container}>
         {isLoading?<Text>Loading</Text>:(   
        <ScrollView style={{flex:1}}>    
          {
            data.Manufacturer.map((manuInfo,index)=>{
              return(
                <Card containerStyle={styles.card} id={manuInfo.id}>
                  <View style={styles.cardAlignment}>
                    <View style={styles.cardImageView}>
                      <Image source={require("../assets/manufacturing.jpg")} style={styles.cardImage}/>
                    </View>
                    <View style={styles.infoSection}>
                      <Card.Title>{manuInfo.org_name}</Card.Title>
                      <Card.Divider style={styles.cardDivider}/>
                      <Text>Happiness Index : {manuInfo.employee_happ_index}</Text>
                      <View style={styles.cardButtonView}>
                        <TouchableOpacity style={styles.cardButton} onPress={()=>{configure(manuInfo.id-1)}}>
                          <Text>MoreInfo</Text>
                            <Modal isVisible={modalVisible} style={styles.modal} backdropOpacity={0.35}>
                              <View style={styles.modalView}>
                                <Text style={styles.modalTitle}>{data.Manufacturer[key].org_name}</Text>
                                <Text style={styles.modalText}>{data.Manufacturer[key].email}</Text>
                                <Text style={styles.modalText}>{data.Manufacturer[key].address}</Text>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>{configure(0)}}>
                                  <Text style={styles.modalButtonText}>Back</Text>    
                                </TouchableOpacity>
                              </View>
                            </Modal>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardButton}>
                          <Text>Apply</Text>
                        </TouchableOpacity>   
                      </View>     
                    </View>  
                  </View> 
                </Card>
              )
            }
          )
          }
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
}
 
