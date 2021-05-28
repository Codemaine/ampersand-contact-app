import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    return (
        <View style={styles.body}>
            <Image source={require('../assets/images/login_img.jpeg')} style={styles.image} />
            <View style={styles.main}>
                <View style={[styles.inputGroup, { marginBottom: 15 }]}>
                    <Text style={styles.inputCaption}>Email</Text>
                    <TextInput style={styles.input} placeholder="john.smith@mail.com" value={email} onChangeText={text => setEmail(text)} />
                </View>
                <View style={[styles.inputGroup, { borderBottomWidth: 0, marginBottom: 20 }]}>
                    <Text style={styles.inputCaption}>Password</Text>
                    <TextInput style={styles.input} placeholder="••••••" secureTextEntry={true} value={password} onChangeText={text => setPass(text)} />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.forgotTextContainer}>
                    <Text style={styles.forgotText}>Forgot? </Text>
                    <TouchableOpacity style={styles.forgotLinkContainer}>
                        <Text style={styles.forgotLinkText}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: '100%'
    },
    image: {
        width: 450,
        height: 300
    },
    main: {
        marginHorizontal: 20,
        marginTop: 100,
        padding: 6,
    },
    button: {
        backgroundColor: "#FF0044",
        borderRadius: 5
    },
    buttonText: {
        padding: 20,
        color: "#fff",
        fontSize: 18,
        letterSpacing: 4,
        textAlign: "center"
    },
    inputCaption: {
        fontSize: 18
    },
    input: {
        fontSize: 15
    },
    inputGroup: {
        display: "flex",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 2,
        borderBottomColor: "#F1F2F3"
    },
    forgotTextContainer: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: "row"
    },
    forgotText: {
        fontSize: 18
    },
    forgotLinkContainer: {
        borderBottomWidth: 2,
        borderBottomColor: "#CB6E55"
    },
    forgotLinkText: {
        paddingBottom: 5,
        fontSize: 18
    }
})
