import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 5,
  },
  deleteIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: colors.primary,
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
});
