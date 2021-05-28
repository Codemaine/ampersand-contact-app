import { useNavigation } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View, Image, TouchableOpacity } from 'react-native';

export default function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/authImage.png')} style={styles.image} />
      <View style={styles.main}>
        <Text style={styles.title}>Keep in touch with the people of Ampersand</Text>
        <Text style={styles.caption}>Sign in or register with your Ampersand email</Text>
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabTwo', { text: "hi" })}>
          <Text style={styles.buttonText}>
            Register
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabThree')}>
          <Text style={styles.buttonText}>
            Sign in
            </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 6,
    width: 500
  },
  main: {
    flex: 4,
    padding: 20
  },
  title: {
    color: "#6C6C6C",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 20
  },
  caption: {
    color: "#C0C7C7",
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    width: '100%',
    left: 20,
    right: 20,
    bottom: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "flex-end"
  },
  button: {
    borderBottomWidth: 2,
    borderColor: "#D57F65",
  },
  buttonText: {
    paddingHorizontal: 5,
    fontSize: 18,
    color: "#646460",
    letterSpacing: 0.25,
    textTransform: "uppercase"
  },
  line: {
    width: 100,
    marginTop: 2,
    alignSelf: "flex-end",
    backgroundColor: "#D57F65",
    height: 2
  }
});
