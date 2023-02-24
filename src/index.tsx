import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationNavigator} from './navigators/application.navigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import {persistor, store} from './store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function AppContainer() {
  return (
    <NavigationContainer>
      <ApplicationNavigator />
    </NavigationContainer>
  );
}
export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading...</Text>}>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
