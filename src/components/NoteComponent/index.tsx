import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Note} from '../../store/note/state';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';

interface NoteProps {
  note: Note;
}

export function NoteComponent(noteProps: NoteProps) {
  const {note} = noteProps;
  const dispatch = useDispatch();
  const notes = useSelector((state: any) => state.note.notes);

  const deleteNote = useCallback(() => {
    dispatch(addNoteAction(notes.filter((item: Note) => item.id !== note.id)));
  }, [dispatch, note.id, notes]);

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

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {note.title}
          </Text>
          <Text numberOfLines={2} style={styles.content}>
            {note.content}
          </Text>
        </View>
        <View style={styles.deleteIconContainer}>
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
