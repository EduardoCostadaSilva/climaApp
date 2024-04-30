import { Text, View } from "react-native";
import Icon  from "react-native-vector-icons/FontAwesome";




export default function HomeScreen() {
    return(
        <View>
            <Text><Icon name="sun-o" size ={20} color = "green" />Hoje fará sol.</Text>
           
        </View>
    )
}