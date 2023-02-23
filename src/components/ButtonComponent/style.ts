import {StyleSheet} from 'react-native';
import {FONT_FAMILY_SEMI_BOLD, Theme} from '../../theme/themes';

export const style = (t: Theme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTextColor: {
      fontFamily: FONT_FAMILY_SEMI_BOLD,
    },
    passiveOpacity: {
      opacity: 0.2,
    },
  });
