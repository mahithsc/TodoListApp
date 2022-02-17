import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, FlatList, TouchableOpacity, TextPropTypes, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GREY, DARK_BLACK, LIGHT_BLACK, ORANGE } from '../../assets/constants';
import { Checkbox } from 'react-native-paper';

const RenderItem = ({ item }) => {
    const [checked, setChecked] = React.useState('unchecked');
  
    return (
      <View style={{ height: 75, backgroundColor: '#2C343A', marginBottom: 15, borderRadius: 15, alignSelf: 'stretch', marginHorizontal: 20, alignItems: 'center', flexDirection: 'row' }}>
        <Checkbox.Android 
          status= {checked}
          onPress = {() => {
            if(checked === 'checked'){
              setChecked('unchecked')
            }
            else{
              setChecked('checked')
            }
          }}
          color = {ORANGE}
        />
        <Text style={{ color: 'white' }}>{item.title}</Text>
      </View>
    )
  }

  export default RenderItem