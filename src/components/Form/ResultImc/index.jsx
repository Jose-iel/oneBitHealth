import React from "react";
import { View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style"

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:"Meu IMC hoje é: " + props.resultImc,
        })
    }

    return(
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != null ? 
                    <TouchableOpacity style={styles.share} onPress={onShare}>
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    :
                    <View/>
                }
            </View>
            <Text style={styles.information}>
                {props.messageResultImc}
            </Text>
            <Text style={styles.numberImc}>
                {props.resultImc}
            </Text>
            {/* <Text style={styles.information}>
                {props.imcIdeal}
            </Text> */}
        </View>
    );
}