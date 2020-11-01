import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container2} />
      <View style={styles.container3}>
        <View style={styles.container5}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../assets/logo.png')}
          />
        </View>
        <Text style={styles.teks}>Masuk</Text>
        <View style={styles.container4}>
          <View style={styles.container6}>
            <View style={styles.input}>
              <Image source={require('../assets/person_outline.png')} />
              <TextInput
                placeholder="Nama"
                underlineColorAndroid="black"
                style={styles.inputtext}
              />
            </View>
            <View style={[styles.input, {marginTop: '5%'}]}>
              <Image source={require('../assets/vpn_key.png')} />
              <TextInput
                placeholder="Password"
                underlineColorAndroid="black"
                style={styles.inputtext}
              />
            </View>
            <TouchableOpacity style={{marginVertical: '5%'}} onPress={() => navigation.navigate('mainMenu')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>MASUK</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.punyaAkun}>
              Belum punya akun?{' '}
              <Text
                style={{color: '#4D5BAA'}}
                onPress={() => navigation.navigate('register')}>
                Daftar
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/Toko_Endang.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: '100%',
    height: '40%',
    backgroundColor: '#F54291',
    position: 'absolute',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
  },
  teks: {
    color: '#FFF8CD',
    fontSize: 48,
    marginVertical: '2%',
  },
  container4: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  container5: {
    width: '30%',
    height: '18%',
    backgroundColor: '#FFF8CD',
    borderRadius: 100,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
    justifyContent: 'center',
    padding: '5%',
  },
  container6: {
    width: '90%',
    backgroundColor: '#FFA0D2',
    borderRadius: 20,
    alignSelf: 'center',
    position: 'absolute',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  input: {
    backgroundColor: '#FFF8CD',
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  inputtext: {
    width: '80%',
    marginLeft: '5%',
    fontSize: 22,
  },
  button: {
    backgroundColor: '#FF78AE',
    width: '50%',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '3%',
    marginBottom: '17%',
  },
  buttonText: {
    color: '#FFF8CD',
    fontSize: 20,
    textAlign: 'center',
  },
  punyaAkun: {
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});

export default login;
