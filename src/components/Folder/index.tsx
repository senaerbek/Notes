import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface Props {
  folder: any;
}
export function Folder(props: Props) {
  const {folder} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{folder.name}</Text>
    </TouchableOpacity>
  );
}
