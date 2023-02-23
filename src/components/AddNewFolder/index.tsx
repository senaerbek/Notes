import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface Props {
  onPress: () => void;
  text: string;
}
export function AddNewFolder(props: Props) {
  const {onPress, text} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={require('./images/add-folder.png')}
        style={styles.icon}
        resizeMode={'contain'}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
