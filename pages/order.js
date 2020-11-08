import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

const order = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.items}>
        <View style={{backgroundColor: '#C4C4C4', width: '70%', height: 100}} />
        <Text style={{fontSize: 24, color: '#FFF8CD'}}>{item.nama}</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>#{item.tag[0]} </Text>
          <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>#{item.tag[1]} </Text>
          <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.5)'}}>#{item.tag[2]} </Text>
        </View>
      </View>
    );
  };

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
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.nama}
          numColumns={2}
          key={(item) => item.nama}
        />
      </ScrollView>
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
    borderRadius: 10
  },
});

export default order;
