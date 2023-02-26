import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  icon: {
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
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSection: {
    flex: 1,
  },
});
