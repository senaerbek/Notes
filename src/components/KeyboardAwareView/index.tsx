import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React, {PropsWithChildren, useContext} from 'react';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

const Style = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});

export function KeyboardAwareView(props: PropsWithChildren<{}>) {
  const safeAreaContext = useContext(SafeAreaInsetsContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.select<'height' | 'position' | 'padding'>({
        android: undefined,
        ios: 'padding',
      })}
      // @ts-ignore
      keyboardVerticalOffset={safeAreaContext.top}
      style={Style.keyboardAvoidingView}>
      {props.children}
    </KeyboardAvoidingView>
  );
}
