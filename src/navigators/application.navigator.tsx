import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from '../screens/MainScreen';
import {NoteListScreen} from '../screens/NoteListScreen';
import {AddNoteScreen} from '../screens/AddNoteScreen';

type StackParamList = {
  Home: undefined;
  NoteList: {
    folderId: string;
  };
  AddNote: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const ApplicationNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="NoteList" component={NoteListScreen} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
