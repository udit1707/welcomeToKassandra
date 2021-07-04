import React,{useRef,useEffect} from "react";
import {Animated,Text,StyleSheet,View,Image,LogBox} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@use-expo/font';

export default function Intro(props) {
useEffect(()=>{
    LogBox.ignoreAllLogs(true);
    const timer = setTimeout(()=>{
        props.navigation.navigate('landing');
    },3500);
    return ()=>clearTimeout(timer);
},[props]);
const FadingView = (props)=>{
    const fadeAnim=useRef(new Animated.Value(0)).current;
    React.useEffect(()=>{
        Animated.timing(
            fadeAnim,
            {
                toValue:1,
                duration:2000,
            }
        ).start();
    },[fadeAnim]);
    return(
        <Animated.View
        style={{
            ...props.style,
            opacity:fadeAnim
        }}
        >
            {props.children}
        </Animated.View>
    );
}
const [isLoaded] = useFonts({
    "RaceLine" : require("../assets/fonts/raceline-demo.otf"),
    "Rattoney" : require("../assets/fonts/rattoney-regular.ttf"),
});
const styles=StyleSheet.create({
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#2988bc',
    },
    fadingView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"transparent",
    },
    textHead:{
        fontSize:15,
        fontFamily:"Rattoney",
    },
    textTeam:{
        fontSize:15,
        fontFamily:"RaceLine",
    },
    logo:{
        width:60,
        height:60,
    }
});

if(!isLoaded){
    return <AppLoading/>
} else {
    return (
    <View style={styles.view}>    
    <FadingView style={styles.fadingView}>
        <Text style={styles.textHead}>Developed by </Text>
        <Image style={styles.logo} source={require('../assets/codex.png')}/>
        <Text style={styles.textTeam}>Team c0d3x</Text>
    </FadingView>
    </View>
    );
    }
}

