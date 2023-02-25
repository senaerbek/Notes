import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
  },
});
