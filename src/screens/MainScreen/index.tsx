import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import {Header} from '../../components/Header';
export function MainScreen() {
  return (
    <View style={styles.container}>
      <Header />
      {/*<Text>Home Screen</Text>*/}
    </View>
  );
}
