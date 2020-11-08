import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const mainMenu = () => {
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
            <Text style={styles.teks2}>Mulai Berbelanja?</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity style={styles.menu}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image
                    source={require('../assets/delivery.png')}
                    style={styles.gambarMenu}
                  />
                  <Text style={{fontSize: 36, color: 'rgba(0,0,0,0.5)'}}>
                    Antar
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('order')}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Image
                    source={require('../assets/bag.png')}
                    style={styles.gambarMenu}
                  />
                  <Text style={{fontSize: 36, color: 'rgba(0,0,0,0.5)'}}>
                    Ambil
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
  logo: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  teks2: {
    fontSize: 40,
    alignSelf: 'center',
    color: 'white',
  },
  menu: {
    width: '45%',
    height: 180,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  gambarMenu: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
});

export default mainMenu;
