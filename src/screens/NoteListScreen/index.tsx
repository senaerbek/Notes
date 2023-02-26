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
import {Dropdown} from '../../components/Dropdown';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function NoteListScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const navigation = useNavigation();
  const [noteInputText, setNoteInputText] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
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

  const labelFilteredNotes = useMemo(() => {
    if (!selectedLabel) {
      return searchedNotes;
    }
    return searchedNotes.filter((note: Note) => note.label === selectedLabel);
  }, [selectedLabel, searchedNotes]);

  const labelList = useMemo(() => {
    const labels = filteredNotes
      .map((note: Note) => ({
        label: note?.label?.length > 0 ? note?.label : null,
        value: note?.label?.length > 0 ? note?.label : null,
      }))
      .filter((item: any) => item.label !== null);
    return [{label: 'All', value: ''}, ...labels].filter(
      (arr, index, self) =>
        index ===
        self.findIndex(t => t.value === arr.value && t.value === arr.value),
    );
  }, [filteredNotes]);

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
      {labelList.length > 0 ? (
        <View style={styles.dropdownContainer}>
          <Dropdown
            valueList={labelList}
            selectedValue={selectedLabel}
            setSelectedValue={setSelectedLabel}
          />
        </View>
      ) : null}
      <FlatList
        style={styles.noteList}
        data={labelFilteredNotes}
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
