import {FlatList, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {Note} from '../../components/Note';
import {ButtonComponent} from '../../components/ButtonComponent';

type Props = {
  route?: RouteProp<{params: {folderId: number}}, 'params'>;
};

export function NoteListScreen(props: Props) {
  const {folderId} = props.route?.params || {};
  const notes = useSelector((state: any) => state.note.s);

  return (
    <View style={styles.container}>
      <FlatList
        data={[{}, {}]}
        renderItem={() => (
          <View style={styles.notesView}>
            <Note />
          </View>
        )}
      />
      <View style={styles.floatButtonContainer}>
        <ButtonComponent
          text={'+'}
          fontSize={30}
          onPress={() => {}}
          borderRadius={50}
        />
      </View>
    </View>
  );
}
