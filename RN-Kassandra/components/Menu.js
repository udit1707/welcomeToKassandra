import React,{useState,useRef} from "react";
import {View,Text,Dimensions,TouchableOpacity,StyleSheet,Image} from "react-native";
import Carousel,{ParallaxImage} from "react-native-snap-carousel";
import * as Speech from 'expo-speech';
export default function Menu(props){
    const speak=()=>{
        const thingSay='1';
        Speech.speak(thingSay);
    };
    const styles = StyleSheet.create({
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#003b46",
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
        slidebutton:{
            backgroundColor:'#1995ad',
            height:"75%",
            padding:16,
            borderRadius:5,
            borderWidth:5,
            borderColor:"#c4dfe6",
        },
        slideTitle:{
            fontSize:30,
        },
        slideImage:{
            ...StyleSheet.absoluteFillObject,
            resizeMode:'cover',
        },
        slideItem:{
            flex:1,
            flexDirection:"column",
        },
        slideImgContainer:{
            flex:1,
            borderRadius:5,
        }
    });
    const back=()=>{
        props.navigation.navigate("login");
    }
    const myRef=useRef(null);
    const [activeIndex,setActiveIndex]=useState(0);
    const JobOptions=[
        {
            title:"Dashboard",
            text:"Find the employee details here",
            image:"../assests/retai.jpg",
            target:"dash"
        },
        {
            title:"Jobs",
            text:"Find the recommended jobs",
            image:"../assests/manufacturing.jpg",
            target:"jobs"
        },
        {
            title:"Meetings",
            text:"Schedule your meetings in here",
            image:"../assests/manufacturing.jpg",
            target:"meet"
        },
        {
            title:"Transactions",
            text:"Schedule your meetings in here",
            image:"../assests/manufacturing.jpg",
            target:"trans"
        },
    ];
    const {width: screenWidth} = Dimensions.get('window');
    const myrenderItem=({item,index},parallexProps)=>{
        return(
            <TouchableOpacity style={styles.slidebutton} onPress={()=>props.navigation.navigate(item.target)}>
                <View style={styles.slideItem}>
                <ParallaxImage
                    source={require("../assets/manufacturing.jpg")}
                    containerStyle={styles.slideImgContainer}
                    style={styles.Image}
                    parallaxFactor={0.4}
                    {...parallexProps}
                />
                <Text style={styles.slideTitle} numberOfLines={2}>{item.title}</Text>
                <Text>{item.text}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return(
        <View style={styles.container}>
            
            <Text>Menu</Text>
            <Carousel
                    layout={"default"}
                    ref={myRef}
                    data={JobOptions}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={myrenderItem}
                    onSnapToItem={index=>setActiveIndex(index)}
                    hasParallaxImages={true}
                />
            <View style={styles.buttongrp}>
            <TouchableOpacity style={styles.trapezoidleft} onPress={back}>
                <Text style={styles.buttonTextLeft}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trapezoidright}>
                <Text style={styles.buttonTextRight}>Help</Text>
            </TouchableOpacity>
            </View>  
        </View>
    );
}