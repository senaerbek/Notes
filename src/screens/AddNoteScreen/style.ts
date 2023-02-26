import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

const {height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  body: {
    flex: 1,
  },
  titleInput: {
    height: 50,
    paddingHorizontal: 10,
    color: colors.text,
  },
  contentInput: {
    flex: 1,
    height: height - 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    color: colors.text,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  color: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  alarmIcon: {
    width: 25,
    height: 25,
    tintColor: '#000000',
  },
});
