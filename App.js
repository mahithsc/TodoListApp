import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import LottieView from 'lottie-react-native';
import { FAB, Overlay } from 'react-native-elements';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GREY } from './assets/constants';

export default function App() {

  const [lottieVisible, changeLottieVisible] = useState(true)

  const [visible, changeVisible] = useState(false)
  const [activity, changeActivity] = useState("")

  const toggle = () => {
    changeVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        lottieVisible ? <LottieView
          source={require('./assets/51382-astronaut-light-theme.json')}
          loop
          autoPlay
          style={{
            width: '100%'
          }}
        /> : null
      }
      <FAB
        onPress={toggle}
        placement="right"
        icon={() => (
          <AntDesign name="plus"
            size={25} color="black" />
        )}
        color="white"
        style={{
          margin: 25,
        }}
      />

      <Overlay
        isVisible={visible}
        onBackdropPress={() => { changeVisible(!visible) }}
        overlayStyle={{ backgroundColor: GREY, flex: 1, marginVertical: '70%', alignSelf: 'stretch', marginHorizontal: '10%', borderRadius: 10 }}
      >
        <Text>Enter your activity</Text>
        <TextInput
          value={activity}
          onChangeText={changeActivity}
          autoCorrect={false}
          style={{
            height: 20,
            borderWidth: 1
          }}
        />
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  textSecondary: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 17,
  },
});
