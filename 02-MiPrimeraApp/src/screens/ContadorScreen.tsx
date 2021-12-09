import React from 'react'
import { 
    Text, 
    View 
} from 'react-native'

export const ContadorScreen = () => {
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: '#FFF',
                justifyContent: 'center'
            }}
        >
            <Text style={{
                color: '#000',
                textAlign: 'center',
                fontSize: 45,
                top: -15,
            }}
            >
                Contador XX
            </Text>
        </View>
    )
}
