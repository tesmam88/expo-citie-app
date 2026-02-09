import { City } from "@/data/data/types";
import { Link } from "expo-router";
import { Alert, Image, Pressable, StyleSheet, Text } from "react-native";

type CityItemProps = {
    city: City
}
export function CityItem({city}:CityItemProps){

      function onPress(){
      Alert.alert('HELLO!!!')
      }
    return (
        <Link href={'/about'} asChild>
        <Pressable style={styles.card} onPress={onPress}>
            <Image 
            source ={city.coverImage} 
            style= {{height:280,width:'100%',borderRadius :20}}
            
            //resizeMode="cover"
            />
            <Text style={styles.title}>{city.name}</Text> 
            <Text style={styles.description}>{city.description}</Text> 
        </Pressable>
        </Link>
        );
}

const styles = StyleSheet.create({
  card:{
    //borderWidth: 1,
    //borderColor: "#FF4B4B",
   // paddingHorizontal: 8,
    //paddingVertical: 16,

  },
  

  title:{
    color:'white',
    fontSize:24,
    fontWeight:600,
    marginTop:16,
  },

  description:{
    color:'white',
    fontSize:16,
    marginTop:8,
   
  }
});