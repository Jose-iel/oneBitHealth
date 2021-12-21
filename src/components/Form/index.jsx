import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    Vibration, 
    TouchableOpacity,
    Pressable,
    Keyboard
} from "react-native";
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import styles from "./style"

import ResultImc from "./ResultImc/index"

export default function Form(){

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);

    // const [sexo, setSexo] = useState(null);
    // const [age, setAge] = useState(null);
    // const [idealImc, setIdealImc] = useState(null);

    function imcCalculator(){
        let heightFormat = height.replace(",", ".");
        return setImc((
            weight/(heightFormat * heightFormat)
        ).toFixed(2));
    }

    function verificationImc(){
        if(imc == null){
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório*");
        }
    }

    function validationImc(){
        if(height !== null && weight !== null) {
            Keyboard.dismiss();
            imcCalculator();
            setHeight(null);
            setWeight(null);
            // setAge(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);

            // if(sexo === 0){
            //     if (age >= 18 && age <= 24){
            //         if(imc === 19){
            //             setIdealImc("Abaixo do peso |  |")
            //         }
            //     }
            // } else if ( sexo === 1 ){
            //     if (age >= 18 || age <= 24){
            //         if(imc < 19){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         } else if ( imc > 19 || imc < 24) {
            //             setIdealImc("Peso ideal | PARABÉNS |")
            //         } else if ( imc > 24 || imc < 29) {
            //             setIdealImc("Pré obesidade | MUDE SEUS HÁBITOS |")
            //         } else if ( imc > 29 || imc < 39) {
            //             setIdealImc("Obesidade | ESTÁ NA HORA DE MUDAR |")
            //         } else if ( imc > 39) {
            //             setIdealImc("Obesidade grave | MELHORE A SUA SAÚDE |")
            //         }
            //     } else if (age >= 25 || age <= 34){
            //         if(imc <= 20){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         }
            //     } else if (age >= 35 || age <= 44){
            //         if(imc <= 21){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         }
            //     } else if (age >= 45 || age <= 54){
            //         if(imc <= 22){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         }
            //     } else if (age >= 55 || age <= 64){
            //         if(imc <= 23){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         }
            //     } else if (age > 65){
            //         if(imc <= 24){
            //             setIdealImc("Abaixo do peso | CONSULTE SEU MÉDICO |")
            //         }
            //     }
            // }
            
            return
        }
        verificationImc()
        setImc(null);
        // setIdealImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha todos os campos");
    }

    // var radio_props = [
    //     {label: 'M', value: 0 },
    //     {label: 'F', value: 1 }
    // ];

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                {/* <View style={styles.flex}>
                    <View style={styles.boxAge}>
                        <View style={styles.flex}>
                            <Text style={styles.formLabel}>Idade</Text>
                            <Text style={styles.errorMessage}>{errorMessage}</Text>
                        </View>
                        <TextInput 
                            style={styles.inputAge}
                            onChangeText={setAge}
                            value={age}
                            placeholder="Ex. 18" 
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={styles.boxAge}>
                        <Text style={styles.formLabel}>Sexo:</Text>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={setSexo}
                            formHorizontal={true}
                            style={styles.radio}
                            labelStyle={{fontSize: 20, color: '#000', marginTop: 5, marginRight: 10}}
                        />
                    </View>
                </View> */}
                <View style={styles.flex}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
                <TextInput 
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75" 
                    keyboardType="numeric"
                />
                <View style={styles.flex}>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
                <TextInput 
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 68.34" 
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={() => validationImc()} style={styles.buttonCalculator}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc 
                messageResultImc={messageImc} resultImc={imc}
            />
        </Pressable>
    );
}