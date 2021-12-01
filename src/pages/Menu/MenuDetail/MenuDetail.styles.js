import {StyleSheet} from 'react-native';
import radius from '../../../styles/radius';
import spacing from '../../../styles/spacing';

export default StyleSheet.create({
  container: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: spacing.normal,
    padding: spacing.normal,
    borderRadius: radius.smooth,
  },
  label: {
    color: 'black',
    fontSize: 12,
    marginVertical: 5,
  },
  ingredients: {
    flexDirection: 'row',
  },
  badge_container: {
    backgroundColor: '#37474f',
    margin: spacing.micro,
    borderRadius: radius.soft,
    padding: spacing.small,
  },
  badge_label: {
    fontSize: 13,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
});
