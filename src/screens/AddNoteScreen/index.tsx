import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import {KeyboardAwareView} from '../../components/KeyboardAwareView';
import {RouteProp} from '@react-navigation/native';
import {useGoBackScreen} from '../../hooks/useGoBackScreen';
import {createRandomId} from '../../utils/createRandomId';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';
import {Note} from '../../store/note/state';
import {Header} from '../../components/Header';

type Props = {
  route?: RouteProp<{params: {folderId: number; note: Note}}, 'params'>;
};

export function AddNoteScreen(props: Props) {
  const {folderId, note} = props.route?.params || {};
  const dispatch = useDispatch();
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);
  const notes = useSelector((state: any) => state.note.notes);

  const updateNote = useCallback(() => {
    const noteToUpdate = notes.find((item: Note) => item.folderId === folderId);
    noteToUpdate.title = title;
    noteToUpdate.content = content;
    noteToUpdate.updatedAt = new Date();
    dispatch(addNoteAction([...notes]));
  }, [content, dispatch, folderId, notes, title]);

  const saveNote = useCallback(() => {
    const noteToSave = {
      id: createRandomId(),
      folderId: folderId,
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(addNoteAction([...notes, noteToSave]));
  }, [content, dispatch, folderId, notes, title]);

  useGoBackScreen(note?.id ? updateNote : saveNote);

  return (
    <View style={styles.container}>
      <Header title={'Note'} />
      <KeyboardAwareView>
        <View style={styles.body}>
          <TextInput
            defaultValue={note?.title}
            onChangeText={setTitle}
            placeholder={'Title'}
            style={styles.titleInput}
          />
          <TextInput
            defaultValue={note?.content}
            onChangeText={setContent}
            multiline={true}
            textAlignVertical={'top'}
            placeholder={'Content'}
            style={styles.contentInput}
          />
        </View>
      </KeyboardAwareView>
    </View>
  );
}
