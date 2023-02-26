import React, {useCallback} from 'react';
import DatePicker from 'react-native-date-picker';
interface DatePickerProps {
  selectDate: (date: Date) => void;
  date: Date;
}
export function DatePickerComponent(props: DatePickerProps) {
  const {date, selectDate} = props;

  const onSelectDate = useCallback(
    (date: Date) => {
      selectDate(date);
    },
    [selectDate],
  );

  return (
    <DatePicker
      minimumDate={new Date()}
      date={date}
      onDateChange={onSelectDate}
    />
  );
}
