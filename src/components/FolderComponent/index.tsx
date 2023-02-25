import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {Folder} from '../../store/folder/state';

interface Props {
  folder?: Folder;
}
export function FolderComponent(props: Props) {
  const {folder} = props;
  const navigation = useNavigation();

  const onFolderPress = useCallback(() => {
    // @ts-ignore
    navigation.navigate('NoteList', {folderId: folder?.id});
  }, [folder?.id, navigation]);

  return (
    <TouchableOpacity onPress={onFolderPress} style={styles.container}>
      <Text>{folder?.name ?? 'All Notes'}</Text>
    </TouchableOpacity>
  );
}
