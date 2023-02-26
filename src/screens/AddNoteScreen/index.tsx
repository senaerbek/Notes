import React, {useCallback, useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {KeyboardAwareView} from '../../components/KeyboardAwareView';
import {RouteProp} from '@react-navigation/native';
import {useGoBackScreen} from '../../hooks/useGoBackScreen';
import {createRandomId} from '../../utils/createRandomId';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';
import {Note} from '../../store/note/state';
import {Header} from '../../components/Header';
import {colors} from '../../themes/colors';
import {DatePickerModal} from '../../components/DatePickerModal';

type Props = {
  route?: RouteProp<{params: {folderId?: number; note?: Note}}, 'params'>;
};

const colorList = [
  '#ffffdc',
  '#e6f3cc',
  '#fddad9',
  '#ffe193',
  '#c6f6f5',
  '#ebd1e4',
];

export function AddNoteScreen(props: Props) {
  const {folderId, note} = props.route?.params || {};
  const dispatch = useDispatch();
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);
  const [label, setLabel] = useState(note?.label);
  const [selectedColor, setSelectedColor] = useState(
    note?.backgroundColor || colors.secondary,
  );
  const [reminderDate, setReminderDate] = useState<Date | null>(
    note?.reminderDate || null,
  );
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const notes = useSelector((state: any) => state.note.notes);

  const updateNote = useCallback(() => {
    const noteToUpdate = notes.find((item: Note) => item.id === note?.id);
    noteToUpdate.title = title;
    noteToUpdate.content = content;
    noteToUpdate.label = label;
    noteToUpdate.backgroundColor = selectedColor;
    noteToUpdate.reminderDate = reminderDate ?? note?.reminderDate;
    noteToUpdate.updatedAt = new Date();
    dispatch(addNoteAction([...notes]));
  }, [
    content,
    dispatch,
    label,
    note?.id,
    note?.reminderDate,
    notes,
    reminderDate,
    selectedColor,
    title,
  ]);

  const saveNote = useCallback(() => {
    if (!content && !title) {
      return;
    } else {
      const noteToSave = {
        id: createRandomId(),
        folderId: folderId,
        title: title ?? 'Untitled',
        content: content,
        label: label,
        backgroundColor: selectedColor,
        reminderDate: reminderDate ?? null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      dispatch(addNoteAction([...notes, noteToSave]));
    }
  }, [
    content,
    dispatch,
    folderId,
    label,
    notes,
    reminderDate,
    selectedColor,
    title,
  ]);

  useGoBackScreen(note?.id ? updateNote : saveNote);

  return (
    <View style={[styles.container, {backgroundColor: selectedColor}]}>
      <Header
        title={'Note'}
        rightIcon={
          <Image
            source={
              note?.reminderDate || reminderDate
                ? require('./images/alarm.png')
                : require('./images/alarm-close.png')
            }
            style={styles.alarmIcon}
          />
        }
        rightIconOnPress={() => setIsDatePickerVisible(true)}
      />
      <KeyboardAwareView>
        <View style={styles.body}>
          <TextInput
            placeholderTextColor={colors.placeholder}
            defaultValue={note?.title}
            onChangeText={setTitle}
            placeholder={'Title'}
            style={styles.titleInput}
          />
          <TextInput
            placeholderTextColor={colors.placeholder}
            defaultValue={note?.content}
            onChangeText={setContent}
            multiline={true}
            textAlignVertical={'top'}
            placeholder={'Content'}
            style={styles.contentInput}
          />
        </View>
        <TextInput
          placeholderTextColor={colors.placeholder}
          defaultValue={note?.label}
          onChangeText={setLabel}
          placeholder={'# Label'}
          style={styles.titleInput}
        />
        <View style={styles.colorContainer}>
          {colorList.map((color: string) => (
            <TouchableOpacity
              onPress={() => setSelectedColor(color)}
              style={[
                styles.color,
                color === selectedColor ? styles.selectedColor : undefined,
                {backgroundColor: color},
              ]}
            />
          ))}
        </View>
      </KeyboardAwareView>
      <DatePickerModal
        selectedDate={note?.reminderDate}
        selectDate={setReminderDate}
        isVisible={isDatePickerVisible}
        setIsVisible={setIsDatePickerVisible}
      />
    </View>
  );
}
