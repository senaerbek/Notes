import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Note} from '../../store/note/state';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';
import {useNavigation} from '@react-navigation/native';

interface NoteProps {
  note: Note;
}

export function NoteComponent(noteProps: NoteProps) {
  const {note} = noteProps;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const notes = useSelector((state: any) => state.note.notes);

  const deleteNote = useCallback(() => {
    dispatch(addNoteAction(notes.filter((item: Note) => item.id !== note?.id)));
  }, [dispatch, note?.id, notes]);

  const deleteNotePress = useCallback(() => {
    Alert.alert('Delete', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          deleteNote();
        },
      },
    ]);
  }, [deleteNote]);

  const navigateToNote = useCallback(() => {
    // @ts-ignore
    navigation.navigate('AddNote', {folderId: note.folderId, note: note});
  }, [navigation, note]);

  return (
    <TouchableOpacity onPress={navigateToNote}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: note?.backgroundColor,
          },
        ]}>
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {note?.title?.length > 0 ? note.title : 'Untitled'}
          </Text>
          <Text numberOfLines={2} style={styles.content}>
            {note?.content}
          </Text>
          <Text style={styles.date}>date</Text>
        </View>
        <View style={styles.deleteIconContainer}>
          {note?.label?.length > 0 ? (
            <Text numberOfLines={1} style={styles.label}>
              #{note?.label}
            </Text>
          ) : null}
          <TouchableOpacity
            onPress={deleteNotePress}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Image
              source={require('./images/delete.png')}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
