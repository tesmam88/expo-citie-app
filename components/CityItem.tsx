import { City } from "@/data/data/types";
import { Image, StyleSheet, Text, View } from "react-native";

type CityItemProps = {
    city: City
}
export function CityItem({city}:CityItemProps){
   
    return (
        <View style={styles.card}>
            <Image source ={city.coverImage} style= {{height:100,width:100}}/>
            <Text style={styles.title}>{city.name}</Text> 
            <Text style={styles.description}>{city.description}</Text> 
        </View>
        );
}

const styles = StyleSheet.create({
  card:{
    borderWidth: 1,
    borderColor: "#FF4B4B",
    paddingHorizontal: 8,
    paddingVertical: 16,

  },
  

  title:{
    color:'white',
    fontSize:24,
    fontWeight:600,
  },

  description:{
    color:'white',
    fontSize:16,
   
  }
});