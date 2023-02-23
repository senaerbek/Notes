import {
  ActivityIndicator,
  Appearance,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';
import {useGetTheme} from '../../hooks/theme';
import {style} from './style';
import {themes} from '../../theme/themes';

interface ButtonProps {
  text: string | ReactNode;
  onPress: () => void;
  backgroundColor?: string;
  borderRadius?: number;
  height?: number;
  isButtonVisible?: boolean;
  fontSize?: number;
  loading?: boolean;
  textColor?: string;
}

export function ButtonComponent(props: ButtonProps) {
  const colorScheme = Appearance.getColorScheme();
  const {
    text,
    onPress,
    backgroundColor,
    borderRadius,
    height,
    isButtonVisible,
    fontSize,
    loading,
    textColor,
  } = props;

  const styles = useGetTheme(style);
  return (
    <TouchableOpacity disabled={isButtonVisible} onPress={onPress}>
      <View
        style={[
          styles.container,
          height ? {height} : {height: 50},
          borderRadius ? {borderRadius} : {borderRadius: 20},
          backgroundColor
            ? {backgroundColor}
            : {backgroundColor: themes[colorScheme!].sixthColor},
          isButtonVisible ? styles.passiveOpacity : undefined,
        ]}>
        {typeof text === 'string' ? (
          <>
            {loading ? (
              <ActivityIndicator
                animating={true}
                size={'small'}
                color={'white'}
              />
            ) : (
              <Text
                style={[
                  styles.buttonTextColor,
                  fontSize ? {fontSize: fontSize} : {fontSize: 18},
                  textColor ? {color: textColor} : {color: 'white'},
                ]}>
                {text}
              </Text>
            )}
          </>
        ) : (
          text
        )}
      </View>
    </TouchableOpacity>
  );
}
