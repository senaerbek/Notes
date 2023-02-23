import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

export function Note() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text>asdf</Text>
      </View>
    </TouchableOpacity>
  );
}
