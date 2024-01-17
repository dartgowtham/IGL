import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    baloo: require('./assets/fonts/Baloo-Regular.ttf'),
  });