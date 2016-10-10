import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';



class TextCard extends Component {

render(){
    return(
        <View style={{paddingLeft : 30,paddingRight :30}}>
        
        <Text style={{
            textAlign:'center',
            marginTop :15,
            marginBottom : 15,
            color : '#536979',
            fontWeight : '300'
        }}>
        NomadApp uses these preferances to suggest destinations
        Some destination suggestion may not fall within
        desired parameters
        </Text>

        </View>

    );
}

}


export default TextCard 