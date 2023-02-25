import Modal from 'react-native-modal';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './style';
import {ButtonComponent} from '../ButtonComponent';
import {colors} from '../../themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addFolderAction} from '../../store/folder/action';
import {createRandomId} from '../../utils/createRandomId';

interface Props {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
}

export function AddNewFolderModal(props: Props) {
  const {isVisible, setVisible} = props;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState<string>('');
  const folders = useSelector((state: any) => state.folder.folder);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onAddPress = useCallback(() => {
    dispatch(
      addFolderAction([{id: createRandomId(), name: inputValue}, ...folders]),
    );
    setInputValue('');
    closeModal();
  }, [closeModal, dispatch, folders, inputValue]);

  return (
    <Modal
      onBackdropPress={closeModal}
      avoidKeyboard={true}
      style={styles.modal}
      isVisible={isVisible}>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <Text style={styles.title}>Add Item</Text>
          <TextInput
            autoFocus={true}
            style={styles.input}
            onChangeText={setInputValue}
          />
          <View style={styles.buttonView}>
            <View style={styles.cancelButtonView}>
              <ButtonComponent
                backgroundColor={colors.primary}
                borderRadius={10}
                fontSize={14}
                text={'Cancel'}
                onPress={closeModal}
              />
            </View>
            <View style={styles.editButtonView}>
              <ButtonComponent
                backgroundColor={colors.secondary}
                borderRadius={10}
                fontSize={14}
                text={'Add'}
                onPress={onAddPress}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
