import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {lazy, Suspense} from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import Colors from './constants/Colors';
import {Provider, ActivityIndicator} from 'react-native-paper';

const Home = lazy(() => import('./screens/Home'));
const AnimTab1 = lazy(() => import('./bottomTab/AnimTab1'));
const AnimTab2 = lazy(() => import('./bottomTab/AnimTab2'));

const HomeScreen = ({navigation}) => {
  return (
    <Suspense
      fallback={
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      }>
      <Home navigation={navigation} />
    </Suspense>
  );
};

const AnimTab1Screen = () => {
  return (
    <Suspense
      fallback={
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      }>
      <AnimTab1 />
    </Suspense>
  );
};

const AnimTab2Screen = () => {
  return (
    <Suspense
      fallback={
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      }>
      <AnimTab2 />
    </Suspense>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white}
        />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Repack Baratona', headerShown: true}}
      />
      <Stack.Screen name="Tab1" component={AnimTab1Screen} />
      <Stack.Screen name="Tab2" component={AnimTab2Screen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
