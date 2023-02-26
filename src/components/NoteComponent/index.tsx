import {Alert, Image, Share, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Note} from '../../store/note/state';
import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNoteAction} from '../../store/note/action';
import {useNavigation} from '@react-navigation/native';
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

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

  const onSharePress = useCallback(async () => {
    try {
      await Share.share({
        message: `${note?.title} ${note?.content}`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }, [note?.content, note?.title]);

  const onDisplayNotification = useCallback(async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const reminderDateMinusFiveMinutes = new Date(
      note?.reminderDate.setMinutes(note?.reminderDate.getMinutes() - 5),
    );

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: reminderDateMinusFiveMinutes.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: 'Reminder',
        body: note?.title,
        android: {
          channelId,
        },
      },
      trigger,
    );
  }, [note?.reminderDate, note?.title]);

  useEffect(() => {
    if (note?.reminderDate) {
      onDisplayNotification();
    }
  }, [note?.reminderDate, onDisplayNotification]);

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
            {note?.title}
          </Text>
          <Text numberOfLines={2} style={styles.content}>
            {note?.content}
          </Text>
          <View style={styles.bottom}>
            <View style={styles.bottomSection}>
              <Text style={styles.date}>
                {new Date(note?.createdAt).toDateString()}
              </Text>
            </View>
            {note?.label?.length > 0 ? (
              <View style={styles.bottomSection}>
                <Text numberOfLines={1} style={styles.label}>
                  #{note?.label}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
        <View style={styles.deleteIconContainer}>
          <Image
            source={
              note?.reminderDate
                ? require('./images/alarm.png')
                : require('./images/alarm-close.png')
            }
            style={styles.icon}
          />
          <TouchableOpacity
            onPress={deleteNotePress}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Image
              source={require('./images/delete.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSharePress}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
            <Image source={require('./images/share.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
