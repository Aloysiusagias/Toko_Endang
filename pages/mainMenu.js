import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const mainMenu = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{alignSelf: 'center'}}>ini adalah main menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default mainMenu;
