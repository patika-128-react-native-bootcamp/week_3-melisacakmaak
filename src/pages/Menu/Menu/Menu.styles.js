import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../../styles/spacing';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: deviceSize.height / 4,
    backgroundColor: '#e0e0e0',
  },
  name_label: {
    fontWeight: '200',
    fontSize: 25,
  },
  name_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.tiny,
  },
  description: {
    margin: spacing.tiny,
    fontSize: 12,
  },
  description_container: {
    flex: 1,
  },
});
