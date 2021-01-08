import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import firebase from 'firebase'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: false    
    };

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({errorMessage: error.message}));
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image
                    style={{width: 128, height: 128, marginLeft: 116, marginTop: 60}} 
                    source={require('../assets/spotify.png')}>
                </Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={32} color="#B3B6B7"></Ionicons>
                </TouchableOpacity>

                <Text style={styles.greeting}>{'Spotify'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Username</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={name => this.setState({name})}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
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
                
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color:'#D0D3D4', fontWeight: "500"}}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}} onPress={() => this.props.navigation.navigate("Login")}>
                    <Text style={{ color: "#B3B6B7", fontSize: 13, fontWeight:"bold" }}>
                        Have an account? <Text style={{fontWeight: "500" ,color:"#27AE60"}}>Login</Text>
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
    },
    back: {
        position: "absolute",
        top: 28,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#2F2F2F",
        alignItems: "center",
        justifyContent: "center"        
    }
})