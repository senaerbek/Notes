import React, {useCallback, useState} from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';
import {FolderComponent} from '../../components/FolderComponent';
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
      <Header title={'Folders'} />
      <FlatList
        keyboardShouldPersistTaps={'always'}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.addNewFolderView}>
              <AddNewFolder
                onPress={onOpenModalPress}
                text={'Add New Folder'}
              />
            </View>
            <View style={styles.allFolderView}>
              <FolderComponent />
            </View>
          </View>
        }
        data={folders}
        renderItem={({item}) => (
          <View style={styles.folderView}>
            <FolderComponent folder={item} />
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
      <AddNewFolderModal
        isVisible={isAddFolderVisible}
        setVisible={setIsAddFolderVisible}
      />
    </View>
  );
}
