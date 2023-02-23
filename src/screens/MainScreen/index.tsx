import React from 'react';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';
import {Folder} from '../../components/Folder';
import {AddNewItem} from '../../AddNewItem';
import Modal from 'react-native-modal';
import {AddNewItemModal} from '../../AddNewItemModal';

const folders = [
  {
    id: 1,
    name: 'is',
  },
  {
    id: 2,
    name: 'Okul',
  },
  {
    id: 3,
    name: 'Folder 3 onemli isler',
  },
];

export function MainScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{marginHorizontal: 15, marginBottom: 10, marginTop: 20}}>
        <AddNewItem onPress={() => {}} image={null} text={'New Folder'} />
      </View>
      <FlatList
        data={folders}
        renderItem={({item}) => (
          <View style={{marginHorizontal: 15, marginBottom: 10}}>
            <Folder folder={item} />
          </View>
        )}
      />
      <AddNewItemModal />
    </View>
  );
}
