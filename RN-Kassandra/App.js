import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Intro from "./components/Intro";
import Landing from "./components/Landing";
import Login from "./components/Login"; 
import SignUp from "./components/SIgnUp";
import MR from "./components/MixedReality";
import Dashboard from "./components/Dashboard";
import JobsManufacturer from "./components/JobsManufacturer";
import JobSelection from "./components/JobSelection";
import JobsRetailer from "./components/JobsRetailer";
import Menu from "./components/Menu";
import Meetings from "./components/MeetingSchedule";
import Transaction from "./components/Transaction";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    intro: Intro,
    landing:Landing,
    login:Login,
    signup:SignUp,
    menu:Menu,
    mr:MR,
    dash:Dashboard,
    jobs:JobSelection,
    manu:JobsManufacturer,
    ret:JobsRetailer,
    meet:Meetings,
    trans:Transaction,
  },
  {
    initialRouteName: "login",
    defaultNavigationOptions: {
      title: "App",
      headerMode:'none',
      headerVisible: false,
      header: null,
    },
  }
);

export default createAppContainer(navigator);
