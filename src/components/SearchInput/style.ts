import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  iconView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  inputView: {
    flex: 5,
  },
  textInput: {
    color: colors.text,
  },
});
