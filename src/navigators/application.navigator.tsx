import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {NoteListScreen} from '../screens/NoteListScreen';

type StackParamList = {
  Home: undefined;
  NoteList: {
    folderId: string;
  };
};

const Stack = createStackNavigator<StackParamList>();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="NoteList" component={NoteListScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
