import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  useColorScheme
} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    darktext: {
      color: '#000000',
      fontWeight: 'bold'
    },
    lighttext: {
      color: '#ffffff',  // Changed 'dark' to 'black'
      fontWeight: 'bold'
    }
  });

  return (
   
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.lighttext : styles.darktext}>
          Hello World
        </Text>
      </View>
   
  );

}

export default App;
