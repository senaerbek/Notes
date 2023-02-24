import React, {useCallback, useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import {KeyboardAwareView} from '../../components/KeyboardAwareView';
import {RouteProp} from '@react-navigation/native';
import {useGoBackScreen} from '../../hooks/useGoBackScreen';
import {createRandomId} from '../../utils/createRandomId';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function AddNoteScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const notes = useSelector((state: any) => state.note.notes);

  const saveNote = useCallback(() => {
    const note = {
      id: createRandomId(),
      folderId: folderId,
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(addNoteAction([...notes, note]));
  }, [content, dispatch, folderId, notes, title]);

  useGoBackScreen(saveNote);
  return (
    <View style={styles.container}>
      <KeyboardAwareView>
        <View style={styles.body}>
          <TextInput
            onChangeText={setTitle}
            placeholder={'Title'}
            style={styles.titleInput}
          />
          <TextInput
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
