import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    minHeight: '20%',
    marginTop: 'auto',
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
  },
  modal: {
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    margin: 20,
  },
  input: {
    borderColor: colors.primary,
    borderWidth: 4,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  buttonView: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  editButtonView: {
    flex: 1,
    marginLeft: 10,
  },
  cancelButtonView: {
    flex: 1,
    marginRight: 10,
  },
});
