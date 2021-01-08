import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation} from "react-native";
import firebase from 'firebase'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false    
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const {email, password} = this.state

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({errorMessage: error.message}));
    }

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image
                    style={{width: 128, height: 128, marginLeft: 116, marginTop: 60}} 
                    source={require('../assets/spotify.png')}>
                </Image>
                <Text style={styles.greeting}>{'Spotify'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none" 
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
                
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color:'#D0D3D4', fontWeight: "500"}}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}} onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{ color: "#B3B6B7", fontSize: 13, fontWeight:"bold" }}>
                        New to Spotify? <Text style={{fontWeight: "500" ,color:"#27AE60"}}>SignUp</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2F2F2F"
    },
    greeting: {
        marginTop: 12,
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        marginHorizontal: "center"
    },
    form: {
        marginBottom: 40,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "white",
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#27AE60",
        borderRadius: 25,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
})