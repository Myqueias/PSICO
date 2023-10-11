import { Text, View } from "react-native";
import { styles } from "./styles";

type Props ={
    value:number;
}

export default function ProgressBar({value}: Props){
    return(
        <View style={styles.container}>
            <Text
            style={styles.value}
            >
                {/*Exibir porcetagem */}
                {value.toFixed(0)}%
            </Text>

            <View style={styles.tracker}>
                {/*Exibir barra */}
                <View style={[styles.progress, {width: `${value}%` } ]}/>
            </View>
        </View>
    )
}