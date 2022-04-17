import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { sizes } from './sizes';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes.pequeno,
  },
  paragraph: {
    marginTop: sizes.medio,
    marginBottom: sizes.pequeno,
    fontSize: sizes.fonte,
    textAlign: 'center',
    color: colors.yellowGreen,
  },
  buttonView: {
    margin: sizes.pequeno,
  },
});