import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './style';

export interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  valueList: DropdownItem[];
  selectedValue: string;
  setSelectedValue: (value: any) => void;
}
export function Dropdown(props: DropdownProps) {
  const {selectedValue, setSelectedValue, valueList} = props;
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      style={styles.dropdownPickerStyle}
      dropDownContainerStyle={styles.dropdownPickerContainer}
      containerStyle={styles.dropdownPickerStyle}
      open={open}
      value={selectedValue}
      items={valueList}
      setOpen={setOpen}
      setValue={setSelectedValue}
      zIndex={9999}
    />
  );
}
