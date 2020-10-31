import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const register = () => {
    return(
        <View style={styles.container}>
            <View style={styles.container2}/>
            <Text>Pendaftaran</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    container2:{
        width: "100%",
        height: "40%",
        backgroundColor: '#F54291'
    }
})

export default register;