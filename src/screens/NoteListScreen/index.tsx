import {FlatList, View} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {NoteComponent} from '../../components/NoteComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import React, {useCallback, useMemo, useState} from 'react';
import {Note} from '../../store/note/state';
import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function NoteListScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const navigation = useNavigation();
  const [noteInputText, setNoteInputText] = useState('');
  const notes = useSelector((state: any) => state.note.notes);

  const filteredNotes = useMemo(() => {
    if (!folderId) {
      return notes;
    }
    return notes.length > 0
      ? notes?.filter((note: Note) => note.folderId === folderId)
      : [];
  }, [folderId, notes]);

  const searchedNotes = useMemo(() => {
    if (!noteInputText) {
      return filteredNotes;
    }
    return filteredNotes.length > 0
      ? filteredNotes?.filter((note: Note) =>
          note?.title?.toLowerCase().includes(noteInputText.toLowerCase()),
        )
      : [];
  }, [noteInputText, filteredNotes]);

  const navigateToAddNoteScreen = useCallback(() => {
    // @ts-ignore
    navigation.navigate('AddNote', {folderId});
  }, [folderId, navigation]);

  return (
    <View style={styles.container}>
      <Header title={'Notes'} />
      <View style={styles.searchInputContainer}>
        <SearchInput onChangeText={setNoteInputText} />
      </View>
      <FlatList
        style={styles.noteList}
        data={searchedNotes}
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
