/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './components/HomeScreen';
import './nativewind-output'

import Icon from 'react-native-vector-icons/Ionicons';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
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

function App(): JSX.Element {
  
  
  return (
    <SafeAreaView style={{flex:3 }}>
      <View style={{flex: .75, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#48C9B0', marginTop: 25, borderBottomColor: '#cccccc', borderBottomWidth: 2,  margin: 12, height: 100}}>
        <HomeScreen />
      </View>
      <View style={{flex:1, backgroundColor: '#FCF3CF'}}>
            <View style={{ flex: 1,  flexDirection: 'row', marginLeft:12 }}>
              <Icon name="ios-home" size={16}  />
              <Text style={{marginLeft:12}}>Home</Text>
            </View>
            <View style={{ flex: 1,  flexDirection: 'row', marginLeft:12 }}>
              <Icon name="train-sharp" size={16}  />
              <Text style={{marginLeft:12}}>Home</Text>
            </View>
            <View style={{ flex: 1,  flexDirection: 'row', marginLeft:12 }}>
              <Icon name="battery-full" size={16}  />
              <Text style={{marginLeft:12}}>Home</Text>
            </View>
            <View style={{ flex: 1,  flexDirection: 'row', marginLeft:12 }}>
              <Icon name="ios-bonfire-sharp" size={16}  />
              <Text style={{marginLeft:12}}>Home</Text>
            </View>
            <View style={{ flex: 1,  flexDirection: 'row', marginLeft:12 }}>
              <Icon name="bookmark" size={16}  />
              <Text style={{marginLeft:12}}>Home</Text>
            </View>
      </View>
      <View style={{flex:1}}>
          
      </View>      
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  highlight: {
    fontWeight: '700',
  },
});

export default App;
