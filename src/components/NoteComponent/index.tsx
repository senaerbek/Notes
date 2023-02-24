import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Note} from '../../store/note/state';

interface NoteProps {
  note: Note;
}

export function NoteComponent(noteprops: NoteProps) {
  const {note} = noteprops;

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>{note.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
