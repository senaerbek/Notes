import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  searchInputContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  floatButtonContainer: {
    position: 'absolute',
    width: 50,
    height: 50,
    bottom: 20,
    right: 20,
  },
  noteList: {
    marginTop: 20,
  },
  notesView: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
