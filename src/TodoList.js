import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import { FAB, Overlay } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { GREY, DARK_BLACK, LIGHT_BLACK, ORANGE } from '../assets/constants';
import { db } from '../Firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import RenderItem from './components/FlatListItem'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TodoList() {
  //use state hook
  const [lottieVisible, changeLottieVisible] = useState(true)
  const [visible, changeVisible] = useState(false)
  const [activity, changeActivity] = useState("")
  const [data, changeData] = useState([]);
  const [username, changeUsername] = useState("")

  useEffect(() => {
    console.log("1st here")
    getUsername();
  }, [])

  useEffect(() => {
    console.log("2nd here")
    read(username);
  }, [username])

  //toggles lottie view when data is added
  useEffect(() => {
    console.log("3rd here")
    if (data.length === 0) {
      changeLottieVisible(true)
    }
    else {
      changeLottieVisible(false)
    }
  }, [data])

  //using async storage to retrieve the username
  const getUsername = async () => {
    const tempUsername = await AsyncStorage.getItem('@username')
    console.log(tempUsername)
    changeUsername(tempUsername)
  }

  //this is the function which reads all the values upon starting the app
  const read = async (prop) => {
    const something = []
    try {
      const querySnapshot = await getDocs(collection(db, prop));
      querySnapshot.forEach((doc) => {
        something.push(
          {
            'title': doc.data().title,
            'bool': doc.data().bool,
            'id': doc.id
          }
        )
      })
      changeData(something);
      changeActivity("")
      // const docSNap = await getDoc(doc(db, 'trial', ))
    } catch (err) {
      console.log(err.message)
    }
  }

  //writes to firestore database
  const writing = async (prop) => {
    try {
      if (activity !== '') {
        await addDoc(collection(db, prop), {
          title: activity,
          bool: 'unchecked'
        }, { merge: true }) 
        changeVisible(!visible)
        // changeActivity("");
      }
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
          source={require('../assets/95147-rocket.json')}
          loop
          autoPlay
          style={{
            width: '100%'
          }}
        /> : <FlatList
          style={{
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
            writing(username)
            read(username)
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

