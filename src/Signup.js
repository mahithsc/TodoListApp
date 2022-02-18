import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ORANGE, DARK_BLACK, LIGHT_BLACK } from '../assets/constants'
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {

    const [input, changeInput] = useState("")
    const letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const storeUsername = async () => {
        try{
            let temp = "";
            for(let i = 0; i<15; i++){
                temp = temp + letters[Math.floor(Math.random() * letters.length)]
            }
            await AsyncStorage.setItem('@username', (input + temp))
            const val = await AsyncStorage.getItem('@username')
            console.log(val)
        }catch(err){
            console.log(err.message)
        }
    }
    
    return (
        <View style={styles.container}>
            <SafeAreaView></SafeAreaView>
            <Text>Introduce yourself, whats your name</Text>
            <View>
                <TextInput
                    mode='outlined'
                    style={{
                        marginHorizontal: 20,
                        backgroundColor: LIGHT_BLACK,
                        color: 'white'
                    }}
                    error={false}
                    activeOutlineColor={ORANGE}
                    placeholderTextColor={'white'}
                    onChangeText = {changeInput}
                    value = {input}
                />
            </View>
            <TouchableOpacity 
                style={{ backgroundColor: ORANGE, alignItems: 'center', marginHorizontal: 100, borderRadius: 10, padding: 10 }}
                onPress = {() => {
                    storeUsername()
                    navigation.navigate('TodoList')
                }}
            >
                <Text style={{ color: DARK_BLACK, fontWeight: 'bold' }}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DARK_BLACK
    }
})