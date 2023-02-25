import {FlatList, View} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {NoteComponent} from '../../components/NoteComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import React, {useCallback, useMemo} from 'react';
import {Note} from '../../store/note/state';
import {Header} from '../../components/Header';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function NoteListScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const navigation = useNavigation();
  const notes = useSelector((state: any) => state.note.notes);

  const filteredNotes = useMemo(() => {
    if (!folderId) {
      return notes;
    }
    return notes.length > 0
      ? notes?.filter((note: Note) => note.folderId === folderId)
      : [];
  }, [folderId, notes]);

  const navigateToAddNoteScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate('AddNote', {folderId});
  }, [folderId, navigation]);
  console.log('filteredNotes', filteredNotes);
  return (
    <View style={styles.container}>
      <Header title={'Notes'} />
      <FlatList
        style={styles.noteList}
        data={filteredNotes}
        renderItem={({item}) => (
          <View style={styles.notesView}>
            <NoteComponent note={item} />
          </View>
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
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
