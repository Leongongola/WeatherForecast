import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Calgary, Canada</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '8AA4D6',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#363B64',
  },
  text:{
    fontSize: "40px",
    fontWeight: 'bold',
    color: '#363B64',   
  }
 
});
