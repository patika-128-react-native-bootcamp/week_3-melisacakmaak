import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 3,
  },
  image: {
    backgroundColor: '#bdbdbd',
    height: deviceSize.height / 6,
  },
  name_label: {
    fontWeight: 'bold',
    padding: spacing.tiny,
    backgroundColor: '#e0e0e0',
    color: '#000000',
    letterSpacing: 1,
  },
  add_button_container: {
    bottom: 15,
    right: spacing.tiny,
    borderRadius: radius.smooth,
    position: 'absolute',
    backgroundColor: '#e0e0e0',
  },
});
