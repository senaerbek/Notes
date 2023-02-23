import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 5,
  },
});
