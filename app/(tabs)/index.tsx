import { cities } from '@/data/data/cities';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style ={styles.container}>
      <FlatList data={cities} renderItem = {({item}) =><Text style={styles.title}>{item.name}</Text>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#1B1B1B',
    flex:1,
  },

  title:{
    color:'white',
    fontSize:24,
    fontWeight:600,
  }
});