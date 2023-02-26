import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {styles} from './style';
import {colors} from '../../themes/colors';

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

  return (
    <TouchableOpacity disabled={isButtonVisible} onPress={onPress}>
      <View
        style={[
          styles.container,
          height ? {height} : {height: 50},
          borderRadius ? {borderRadius} : {borderRadius: 20},
          backgroundColor
            ? {backgroundColor}
            : {backgroundColor: colors.primary},
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
