import React from 'react';
import {View,StyleSheet,Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

    const splash_scren = () => {
    
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('onboarding');
    }, 2000);

    return(
        <>
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={styles.teks}>TOKO ENDANG</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F54291',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    teks: {
        color: '#FFF8CD',
        fontFamily: 'Nunito',
        fontSize: 36,
        
    }
})

export default splash_scren;