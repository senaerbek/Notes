import {View} from 'react-native';
import Modal from 'react-native-modal';
import {DatePickerComponent} from '../DatePicker';
import React, {useCallback, useState} from 'react';
import {ButtonComponent} from '../ButtonComponent';
import {styles} from './style';

interface DatePickerComponentProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  selectDate: (date: Date | null) => void;
  selectedDate: Date | undefined;
}
export function DatePickerModal(props: DatePickerComponentProps) {
  const {isVisible, setIsVisible, selectDate, selectedDate} = props;
  const [date, setDate] = useState(new Date());

  const onCancelPress = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  const onSavePress = useCallback(() => {
    selectDate(date);
    onCancelPress();
  }, [date, onCancelPress, selectDate]);

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.pickerContainer}>
        <DatePickerComponent
          selectDate={setDate}
          date={selectedDate ? new Date(selectedDate) : date}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <ButtonComponent
              text={'Cancel'}
              onPress={onCancelPress}
              borderRadius={10}
            />
          </View>
          <View style={styles.saveButton}>
            <ButtonComponent
              text={'Save'}
              onPress={onSavePress}
              borderRadius={10}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
