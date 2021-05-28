import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, View, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.main}>
          <Image source={require('../assets/images/logo.png')} />
          <Text style={styles.text}>Ampersand Contacts</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabTwo', { text: "hi" })}>
            <Text style={styles.buttonText}>
              Get Started
            </Text>
            <View style={styles.line} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F0",
    alignItems: 'center'
  },
  main: {
    flex: 1,
    marginVertical: 80,
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    textTransform: "uppercase",
    color: "#555754",
    fontSize: 20,
    width: 200,
    letterSpacing: 4,
    textAlign: "center",
    lineHeight: 30
  },
  button: {
    
  },
  buttonText:{
    fontSize: 18,
    color: "#646460",
    letterSpacing: 0.25,
    marginRight: 5,
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
