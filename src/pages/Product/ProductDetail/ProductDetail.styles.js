import {Dimensions, StyleSheet} from 'react-native';
import radius from '../../../styles/radius';
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
  price: {
    margin: spacing.tiny,
    fontSize: 35,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  badge_container: {
    backgroundColor: '#37474f',
    margin: spacing.small,
    borderRadius: radius.soft,
    padding: spacing.small,
  },
  badge_label: {
    fontSize: 10,
    color: '#e0e0e0',
    fontWeight: '500',
  },
});
