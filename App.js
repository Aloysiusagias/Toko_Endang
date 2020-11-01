import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import splash_screen from './pages/splash_screen';
import login from './pages/login';
import OnBoarding from './pages/OnBoarding';
import register from './pages/register';
import mainMenu from './pages/mainMenu';

const App = () => {
  const stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="splash_screen"
            component={splash_screen}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="onboarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="register"
            component={register}
            options={{headerShown: false}}
          />
          <stack.Screen
            name="mainMenu"
            component={mainMenu}
            options={{headerShown: false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
