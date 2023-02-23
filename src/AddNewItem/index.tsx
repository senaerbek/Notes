import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Modal from 'react-native-modal';

interface Props {
  onPress: () => void;
  image: any;
  text: string;
}
export function AddNewItem(props: Props) {
  const {onPress, image, text} = props;
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </>
  );
}
