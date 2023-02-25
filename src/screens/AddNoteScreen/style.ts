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
  },
  contentInput: {
    flex: 1,
    height: height - 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
});
