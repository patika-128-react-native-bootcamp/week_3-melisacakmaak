import {Dimensions, StyleSheet} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: '#bdbdbd',
    margin: 10,
    top: 5,
  },
  image: {
    backgroundColor: '#bdbdbd',
    height: deviceSize.height / 5,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  name_label: {
    margin: 5,
    fontSize: 25,
    color: 'white',
    fontWeight: '200',
  },
  name_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
