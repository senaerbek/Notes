import {FlatList, View} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {NoteComponent} from '../../components/NoteComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useCallback, useMemo} from 'react';
import {Note} from '../../store/note/state';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function NoteListScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const navigation = useNavigation();
  const notes = useSelector((state: any) => state.note.notes);

  const filteredNotes = useMemo(() => {
    return notes.filter((note: Note) => note.folderId === folderId);
  }, [folderId, notes]);

  const navigateToAddNoteScreen = useCallback(() => {
    // @ts-ignore
    navigation.nasvigate('AddNote', {folderId});
  }, [folderId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredNotes}
        renderItem={({item}) => (
          <View style={styles.notesView}>
            <NoteComponent note={item} />
          </View>
        )}
      />
      <View style={styles.floatButtonContainer}>
        <ButtonComponent
          text={'+'}
          fontSize={30}
          onPress={navigateToAddNoteScreen}
          borderRadius={50}
        />
      </View>
    </View>
  );
}
