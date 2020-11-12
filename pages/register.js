import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,

  TextInput,

  TouchableOpacity, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const register = () => {
  const navigation = useNavigation();
  const [nama, setNama] = useState('');
  const [telp, setTelp] = useState('');
  const [pass, setPass] = useState('');

  const goToMainMenu = () =>{ 
    if(nama == ''){
      alert('Nama tidak boleh kosong');
    } else if(telp == ''){
      alert('Nomor telp tidak boleh kosong');
    } else if(pass == ''){
      alert('nomor telp tidak boleh kosong');
    } else {
      navigation.replace('mainMenu', {paramKey: 'berhasil'});
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.container2} />
        
        <View style={styles.container3}>
          <Text style={styles.teks}>Pendaftaran</Text>
          <View style={styles.container4}>
            <View style={styles.container6}>
              <View style={[styles.input, {marginTop: '15%'}]}>
                <Image source={require('../assets/person_outline.png')} />
                <TextInput
                  placeholder="Nama"
                  underlineColorAndroid="black"
                  style={styles.inputtext}
                  onChangeText={(value) => setNama(value)}
                />
              </View>
              <View style={[styles.input, {marginVertical: 20}]}>
                <Image source={require('../assets/call.png')} />
                <TextInput
                  placeholder="Nomor Telepon"
                  underlineColorAndroid="black"
                  style={styles.inputtext}
                  onChangeText={(value) => setTelp(value)}
                  keyboardType={"phone-pad"}
                />
              </View>
              <View style={styles.input}>
                <Image source={require('../assets/vpn_key.png')} />
                <TextInput
                  placeholder="Password"
                  underlineColorAndroid="black"
                  style={styles.inputtext}
                  onChangeText={(value) => setPass(value)}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity style={{marginVertical: '5%'}} onPress={goToMainMenu}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>DAFTAR</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.punyaAkun}>
                Sudah punya akun?{' '}
                <Text
                  style={{color: '#4D5BAA'}}
                  onPress={() => navigation.navigate('login')}>
                  Masuk
                </Text>
              </Text>
            </View>
            <View style={styles.container5}>
              <Image source={require('../assets/person.png')} />
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
    height: 250,
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
    height: 120,
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
  },
  container6: {
    width: '90%',
    backgroundColor: '#FFA0D2',
    borderRadius: 20,
    alignSelf: 'center',
    position: 'absolute',
    paddingVertical: 20,
    marginTop: '13%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 12,
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

export default register;
