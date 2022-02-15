import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FAB } from 'react-native-elements';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LottieView
        source={require('./assets/51382-astronaut-light-theme.json')}
        loop
        autoPlay
        style = {{
          width: '100%'
        }}
      />
      <FAB
          visible={true}
          onPress={() => setVisible(!visible)}
          placement="right"
          icon={() => (
            <AntDesign name="plus" 
            size={24} color="black" />
          )}
          color="white"
          style = {{
            margin: 30
          }}
        />
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
});
