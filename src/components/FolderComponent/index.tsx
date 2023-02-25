import React, {useCallback} from 'react';
import {Alert, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {Folder} from '../../store/folder/state';
import {useDispatch, useSelector} from 'react-redux';
import {addFolderAction} from '../../store/folder/action';
import {addNoteAction} from '../../store/note/action';

interface Props {
  folder?: Folder;
}
export function FolderComponent(props: Props) {
  const {folder} = props;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const folders = useSelector((state: any) => state.folder.folder);
  const notes = useSelector((state: any) => state.note.notes);

  const deleteFolderNotes = useCallback(() => {
    const deleteNotes = notes.filter(
      (item: Folder) => item.folderId !== folder?.id,
    );
    dispatch(addNoteAction(deleteNotes));
  }, [dispatch, folder?.id, notes]);

  const deleteFolder = useCallback(() => {
    const deleteFolder = folders.filter(
      (item: Folder) => item.id !== folder?.id,
    );

    dispatch(addFolderAction(deleteFolder));

    deleteFolderNotes();
  }, [deleteFolderNotes, dispatch, folder?.id, folders]);

  const deleteFolderPress = useCallback(() => {
    Alert.alert('Delete', 'Are you sure you want to delete this folder?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          deleteFolder();
        },
      },
    ]);
  }, [deleteFolder]);

  const onFolderPress = useCallback(() => {
    // @ts-ignore
    navigation.navigate('NoteList', {folderId: folder?.id});
  }, [folder?.id, navigation]);

  return (
    <TouchableOpacity onPress={onFolderPress} style={styles.container}>
      <Text>{folder?.name ?? 'All Notes'}</Text>
      {folder?.name ? (
        <TouchableOpacity
          onPress={deleteFolderPress}
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
          <Image
            source={require('./images/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
}
