import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';
import {Folder} from '../../components/Folder';
import {AddNewFolder} from '../../components/AddNewFolder';
import {AddNewFolderModal} from '../../components/AddNewFolderModal';
import {useSelector} from 'react-redux';

export function MainScreen() {
  const [isAddFolderVisible, setIsAddFolderVisible] = useState(false);
  const folders = useSelector((state: any) => state.folder.folder);

  const onOpenModalPress = useCallback(() => {
    setIsAddFolderVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyboardShouldPersistTaps={'always'}
        ListHeaderComponent={
          <View style={styles.addNewFolderView}>
            <AddNewFolder onPress={onOpenModalPress} text={'Add New Folder'} />
          </View>
        }
        data={folders}
        renderItem={({item}) => (
          <View style={styles.folderView}>
            <Folder folder={item} />
          </View>
        )}
      />
      <AddNewFolderModal
        isVisible={isAddFolderVisible}
        setVisible={setIsAddFolderVisible}
      />
    </View>
  );
}
