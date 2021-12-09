import React from 'react'
import { 
    View,
    Text
} from 'react-native'

export const HolaMundoScreens = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center'
      
          }}>
            <Text
              style={{
                fontSize: 45,
                textAlign: 'center',
                color: '#000'
              }} 
            >
              Hola mundo cruel1</Text>
          </View>
    )
}
