import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const DATA = [
  {
    nama: 'Dancow',
    tag: ['susu', 'dancow', 'sapi'],
  },
  {
    nama: 'Milo',
    tag: ['susu', 'milo', 'sapi'],
  },
  {
    nama: 'ZEE',
    tag: ['susu', 'zee', 'sapi'],
  },
  {
    nama: 'HILO',
    tag: ['susu', 'hilo', 'sapi'],
  },
  {
    nama: 'Anlene',
    tag: ['susu', 'anlene', 'sapi'],
  },
];

const bucket = () => {
  const [jumlah, setJumlah] = useState(2);
  const render = ({item}) => {
    return (
      <View
        key={item}
        style={{
          backgroundColor: '#FF78AE',
          margin: '2%',
          flexDirection: 'row',
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: 'black',
            width: 100,
            height: 100,
            alignSelf: 'flex-start',
            marginRight: 10,
          }}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>{item.nama}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Rp. 5.500 x 2</Text>
            <Text>Rp. 11.000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View style={styles.jumlah}>
              <TouchableOpacity
                style={styles.btnJumlah}
                onPress={() => setJumlah(1)}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={{alignSelf: 'center', marginHorizontal: 10}}>
                {jumlah}
              </Text>
              <TouchableOpacity
                style={styles.btnJumlah}
                onPress={() => setJumlah(3)}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnModal}>
              <Text style={{alignSelf: 'center'}}>Hapus</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const order = () => {};

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('../assets/logo.png')}
          />
        </View>
        <Text style={styles.teks}>Ambil</Text>
      </View>
      <FlatList data={DATA} renderItem={render} key={(item) => item.nama} />
      <View
        style={{
          width: '100%',
          height: '7%',
          alignSelf: 'flex-end',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 2,
            backgroundColor: '#FF78AE',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <Text style={{color: '#FFF8CD', fontSize: 24}}>Total</Text>
          <Text style={{color: '#FFF8CD', fontSize: 20, marginLeft: 10}}>
            Rp. 33.500
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#FFA0D2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() =>
            Linking.openURL(
              "https://wa.me/6281227990550?text=I'm%20interested%20in%20your%20car%20for\nsale",
            )
          }>
          <Text style={{fontSize: 20, color: 'white'}}>BELI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '30%',
    backgroundColor: '#F54291',
    alignItems: 'center',
  },
  container2: {
    width: '25%',
    height: '50%',
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
    elevation: 14,
    justifyContent: 'center',
    padding: '5%',
  },
  teks: {
    color: '#FFF8CD',
    fontSize: 48,
    marginVertical: '2%',
  },
  btnJumlah: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA0D2',
    borderRadius: 20,
  },
  jumlah: {
    backgroundColor: '#FFF8CD',
    flexDirection: 'row',
    borderRadius: 20,
  },
  btnModal: {
    width: '22%',
    height: 30,
    backgroundColor: '#FFA0D2',
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default bucket;
