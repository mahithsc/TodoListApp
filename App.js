import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity, TextPropTypes, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import { CheckBox, FAB, Overlay } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GREY, DARK_BLACK, LIGHT_BLACK, ORANGE } from './assets/constants';
import { db } from './Firebase';
import { collection, doc, setDoc, addDoc, getDocs, onSnapshot, getDoc, query } from 'firebase/firestore'

const RenderItem = ({ item }) => {
  return (
    <View style={{height: 75, backgroundColor: '#2C343A', marginBottom: 10, borderRadius: 20, alignSelf: 'stretch', marginHorizontal: 20, justifyContent: 'center' }}>
      <Text style = {{color: 'white'}}>{item.title}</Text>
    </View>
  )
}

export default function App() {

  //use state hook
  const [lottieVisible, changeLottieVisible] = useState(true)
  const [visible, changeVisible] = useState(false)
  const [activity, changeActivity] = useState("")
  const [data, changeData] = useState([]);

  //toggles lottie view when data is added
  useEffect(() => {
    if (data.length === 0) {
      changeLottieVisible(true)
    }
    else {
      changeLottieVisible(false)
    }
  }, [data])

  //writes to firestore database
  const writing = async () => {
    try {
      if (activity !== '') {
        await addDoc(collection(db, 'trial'), {
          title: activity,
          bool: false
        }, { merge: true })
        changeVisible(!visible)
        changeActivity("");
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  //reads and appends to the data state array
  const read = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "trial"));
      querySnapshot.forEach((doc) => {
        changeData((oldData) => [...oldData, {
          'title': doc.data().title,
          'bool': doc.data().bool,
          'id': doc.id
        }])
      })
      // const docSNap = await getDoc(doc(db, 'trial', ))
    } catch (err) {
      console.log(err.message)
    }
  }

  //used to toggle the modal view
  const toggle = () => {
    changeVisible(!visible)
  }

  return (

    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <StatusBar style="auto" />
      {
        lottieVisible ? <LottieView
          source={require('./assets/95147-rocket.json')}
          loop
          autoPlay
          style={{
            width: '100%'
          }}
        /> : <FlatList
        style = {{
          alignSelf: 'stretch'
        }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
            />
          )}
        />
      }
      <FAB
        onPress={toggle}
        placement="right"
        icon={() => (
          <AntDesign name="plus"
            size={25} color="black" />
        )}
        color={ORANGE}
        style={{
          margin: 25,
        }}
      />

      <Overlay
        isVisible={visible}
        onBackdropPress={() => { changeVisible(!visible) }}
        overlayStyle={{ backgroundColor: LIGHT_BLACK, marginVertical: '70%', alignSelf: 'stretch', marginHorizontal: '10%', borderRadius: 20 }}
      >
        <Text style={{ color: ORANGE, fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Enter Your Activity</Text>
        <TextInput
          value={activity}
          onChangeText={changeActivity}
          autoCorrect={false}
          style={{
            height: 30,
            borderWidth: 1,
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 10,
            backgroundColor: DARK_BLACK,
            paddingLeft: 10,
            fontSize: 20
          }}
        />
        <TouchableOpacity
          style={{ alignSelf: 'center', backgroundColor: ORANGE, borderRadius: 10, padding: 10, marginTop: 20 }}
          onPress={() => {
            writing()
            read()
          }}
        >
          <Text style={{ color: DARK_BLACK, fontWeight: 'bold' }}>Something</Text>
        </TouchableOpacity>
      </Overlay>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BLACK,
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

