import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView} from 'react-native';
import { styles } from './styles';
import { SectionItems } from './components/MySectionList';




export default function App() {
  
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.listContainer}>
        <SectionItems/>
      </SafeAreaView>  

      <StatusBar style="auto" />
    </View>
  );
}
