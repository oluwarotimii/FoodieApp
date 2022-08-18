import React, {useState} from 'react';
import { ScrollView, StyleSheet, TextInput} from 'react-native';
import { CardField} from ' @stripe/stripe-react-native'; 

export default function Card() {
    const [name, setName] = useState('');

    return (
        <ScrollView style={styles.container}>
            <TextInput
            autoCapitalize="none"
            placeholder="Name"
            keyboardType = "name-phone-pad"
            onChange={(value) => setName(value.nativeEvent.text)}
            style={styles.input}
             />
        <CardField style={styles.cardField} /> 
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: 'white',
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    cardField: {
        width: '100%',
        height: 50,
        marginVertical: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    Text: {
        marginLeft: 12,
        color: 'black',
        fontSize: 16,
    },
})