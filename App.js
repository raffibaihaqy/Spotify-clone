import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDBFrgUmw5J3nXPBQLCSC639AzjlTC60yo",
  authDomain: "spotifyclone-bd150.firebaseapp.com",
  projectId: "spotifyclone-bd150",
  storageBucket: "spotifyclone-bd150.appspot.com",
  messagingSenderId: "347665604604",
  appId: "1:347665604604:web:62b7c3edc3bbb2d0281c79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);