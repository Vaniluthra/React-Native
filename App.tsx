import React from 'react';
import { SafeAreaView } from 'react-native';
import PdpScreen from './components/PdpScreen';
import styles from './components/PdpStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <PdpScreen />
    </SafeAreaView>
  );
};

export default App;