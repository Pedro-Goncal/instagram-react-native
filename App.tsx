import {StyleSheet, Text, View} from 'react-native';

//Styles
import colors from './src/theme/colors';
import {fontSizes, fontWeight} from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
      <AntDesign name="doubleright" size={50} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontSize: fontSizes.xxl,
  },
});
