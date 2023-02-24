import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

interface HeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconOnPress?: () => void;
  rightIconOnPress?: () => void;
}

export function Header(props: HeaderProps) {
  const {title, leftIcon, rightIcon, leftIconOnPress, rightIconOnPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftIconContainer}>
        {leftIcon ? (
          <TouchableOpacity onPress={leftIconOnPress}>
            {leftIcon}
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightIconContainer}>
        {rightIcon ? (
          <TouchableOpacity onPress={rightIconOnPress}>
            {rightIcon}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
