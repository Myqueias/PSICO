import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import ProgressBar from "../ProgressBar";
import { useState } from "react";


type ScrollProps ={
    layoutMeasurement:{
        height:number;
    },
    contentOffset:{
        y:number
    },
    contentSize:{
        height:number
    }
}

const Privacidade = ()=>{
    const dimensao = useWindowDimensions()
    
    {/* Definir porcetagem */}
    const [porcentagem,definirPorcentagem] = useState(0)
    
    {/* Conseguir porcetagem */}
    function scrollPercentage({ layoutMeasurement, contentOffset, contentSize}: ScrollProps){
        const conteudoVisivel = Math.ceil((dimensao.height  / contentSize.height) * 100);
        const value = (((layoutMeasurement.height + contentOffset.y)/contentSize.height) * 100);
        
        return(
            definirPorcentagem(value < conteudoVisivel ? 0 : value)
            )
    }
    
    return(
        <View
        style={styles.container}
        >

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                onScroll={(event)=> scrollPercentage(event.nativeEvent)}
            >           
                <Text 
                style={styles.title}>
                    Privacidade
                </Text>

                <View style={styles.division}/>
                {/*Para deixar mais limpo a tela */}
                <View>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius eos nesciunt fugiat, nam fugit aut. Odit eius minima ipsum quod error. Vero earum ex asperiores ullam architecto rem quas.
                    </Text>
                </View>
            </ScrollView>

            {/* Exibir a barra de progressão */}
            <ProgressBar
            value={porcentagem}
            />
        </View>
    )
}


export default Privacidade;