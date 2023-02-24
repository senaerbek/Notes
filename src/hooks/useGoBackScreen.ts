import {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const useGoBackScreen = (action: Function) => {
  const navigation = useNavigation();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      action,
    );

    return () => backHandler.remove();
  }, [action]);

  useEffect(() => {
    navigation.addListener('gestureEnd', action);

    return () => {
      navigation.removeListener('gestureEnd', action);
    };
  }, [action, navigation]);
};
