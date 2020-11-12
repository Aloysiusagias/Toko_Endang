import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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

const DATA2 = [];

const order = () => {
  const [visible, useVisible] = useState(false);
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.items} onPress={clickmodal} key={item}>
        <View style={{backgroundColor: '#C4C4C4', width: '70%', height: 100}} />
        <Text style={{fontSize: 24, color: '#FFF8CD'}}>{item.nama}</Text>
        <View style={{flexDirection: 'row'}}>
          {item.tag.map((element) => {
            return <Text>#{element} </Text>;
          })}
        </View>
      </TouchableOpacity>
    );
  };

  const buckets = () => {
    useVisible(false)
  }

  const clickmodal = (item) => {
    useVisible(true)
    // console.log(item.nama)
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container5}>
          <Image
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            source={require('../assets/logo.png')}
          />
        </View>
        <Text style={styles.teks}>Ambil</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Product"
            underlineColorAndroid="black"
            style={styles.inputtext}
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.nama}
        numColumns={2}
        key={(item) => item.nama}
        onPress={() => console.log('masukk')}
      />
      <Modal visible={visible} transparent={true} onRequestClose={() => useVisible(false)}>
        <TouchableOpacity style={styles.modal} onPress={() => useVisible(false)}>
          <View
            style={{
              backgroundColor: '#FF78AE',
              padding: 10,
              alignItems: 'center',
              marginHorizontal: '10%',
            }}>
            <View
              style={{width: 100, height: 100, backgroundColor: '#F54291'}}
            />
            <Text style={styles.textModal}>Dancow</Text>
            <Text style={styles.textModal}>Rp. 5.500</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={styles.jumlah}>
                <View style={styles.btnJumlah}>
                  <Text>-</Text>
                </View>
                <Text style={{alignSelf: 'center', marginHorizontal: 10}}>
                  2
                </Text>
                <View style={styles.btnJumlah}>
                  <Text>+</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btnModal}>
                <Text
                  style={{alignSelf: 'center'}}
                  onPress={buckets}>
                  Tambah
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('bucket')}>
        <Image source={require('../assets/local_grocery_store.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    width: '100%',
    height: '42%',
    backgroundColor: '#F54291',
    alignItems: 'center',
  },
  teks: {
    color: '#FFF8CD',
    fontSize: 48,
    marginVertical: '2%',
  },
  container5: {
    width: '33%',
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
  input: {
    backgroundColor: '#FFF8CD',
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  inputtext: {
    width: '80%',
    fontSize: 22,
    textAlign: 'center',
  },
  items: {
    width: '45%',
    margin: 10,
    backgroundColor: '#FF78AE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(196, 196, 196, 0.7)',
    justifyContent: 'center',
    alignContent: 'center',
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
  textModal: {
    color: '#FFF8CD',
    fontSize: 20,
  },
  btnModal: {
    width: '22%',
    height: 30,
    backgroundColor: '#FFA0D2',
    borderRadius: 10,
    justifyContent: 'center',
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F54291',
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default order;
