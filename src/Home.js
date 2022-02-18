import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DARK_BLACK, ORANGE } from '../assets/constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { async } from '@firebase/util'

const OnOpen = ({ navigation }) => {

    const signin = async () => {
        let signin = null
        setTimeout(async () => {
            const username = await AsyncStorage.getItem('@username')
            console.log(username)
            if (username !== null) {
                // changeIsSignedIn(true)
                signin = true
            } else {
                // changeIsSignedIn(false)
                signin = false
            }

            if(signin === true){
                navigation.navigate('TodoList')
            }else{
                navigation.navigate('Signup')
            }
        })
    }

    useEffect(() => {
        signin()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: DARK_BLACK, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: ORANGE, fontSize: 20, fontWeight: 'bold' }}>TodoList</Text>
        </View>
    )
}

export default OnOpen

const styles = StyleSheet.create({})