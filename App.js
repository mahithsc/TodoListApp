import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { FAB, Overlay } from 'react-native-elements';
import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [visible, changeVisible] = useState(false)

  const toggle = () => {
    changeVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LottieView
        source={require('./assets/51382-astronaut-light-theme.json')}
        loop
        autoPlay
        style={{
          width: '100%'
        }}
      />
      <FAB
      onPress={toggle}
        placement="right"
        icon={() => (
          <AntDesign name="plus"
            size={24} color="black" />
        )}
        color="white"
        style={{
          margin: 30
        }}
      />

      <Overlay isVisible={visible} onBackdropPress={() => {
        changeVisible(!visible)}}>
        <Text style={styles.textPrimary}>Hello!</Text>
        <Text style={styles.textSecondary}>
          Welcome to React Native Elements
        </Text>
        <Button
          title="Start Building"
        />
      </Overlay>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
