import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

interface Props {
  folder: any;
}
export function Folder(props: Props) {
  const {folder} = props;
  const navigation = useNavigation();

  const onFolderPress = useCallback(() => {
    // @ts-ignore
    navigation.navigate('NoteList', {folderId: folder.id});
  }, [folder.id, navigation]);

  return (
    <TouchableOpacity onPress={onFolderPress} style={styles.container}>
      <Text>{folder.name}</Text>
    </TouchableOpacity>
  );
}
