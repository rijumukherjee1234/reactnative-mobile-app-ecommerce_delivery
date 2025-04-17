import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,  // Import SafeAreaView
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Authnavigation from "./src/navigation/authnavigate";
import Appnavigate from "./src/navigation/appnavigate";
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main from "./src/main"
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
// import { RootState } from './src/redux/rootTypes';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const loginStatus = useSelector((state: RootState) => state.loginCheck.login);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  const [login,setlogin]= useState(0)
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Main />
    {/* {login == 0 ? <Authnavigation /> : <Appnavigate />} */}
      {/* <Authnavigation />
      <Appnavigate /> */}
    </NavigationContainer>
  </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Make sure the container fills the screen
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',  // Center content horizontally
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default App;
