import Modal from 'react-native-modal';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import {ButtonComponent} from '../components/ButtonComponent';
import {colors} from '../themes/colors';

interface Props {}

export function AddNewItemModal() {
  return (
    <Modal avoidKeyboard={true} style={styles.modal} isVisible={true}>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <ScrollView>
            <Text style={styles.title}>Add Item</Text>
            <TextInput style={styles.input} />
            <View style={styles.buttonView}>
              <View style={styles.cancelButtonView}>
                <ButtonComponent
                  backgroundColor={colors.primary}
                  borderRadius={10}
                  fontSize={14}
                  text={'Add'}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.editButtonView}>
                <ButtonComponent
                  backgroundColor={colors.secondary}
                  borderRadius={10}
                  fontSize={14}
                  text={'Cancel'}
                  onPress={() => {}}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
