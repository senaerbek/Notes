import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Klasorler</Text>
    </View>
  );
}
