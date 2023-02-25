import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 120,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 5,
    justifyContent: 'space-between',
  },
  deleteIconContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
  },
  labelIcon: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
  },
  label: {
    color: colors.primary,
    fontSize: 14,
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    color: colors.primary,
    fontSize: 14,
  },
  date: {
    color: colors.primary,
    fontSize: 12,
  },
});
