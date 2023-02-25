import {StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  addNewFolderView: {
    marginBottom: 10,
    marginTop: 20,
  },
  folderView: {
    marginHorizontal: 15,
    marginBottom: 10,
  },
  allFolderView: {
    marginBottom: 10,
  },
  listHeader: {
    marginHorizontal: 15,
  },
});
