import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ChipsCard extends Component {

render(){
    return(
        <View style={{
            paddingLeft : 30, 
            paddingRight: 30,
            height : 250,
            borderRadius : 5,
            borderWidth : 1,
            borderColor : '#536979',
            backgroundColor :'#536979',
            alignSelf :'flex-end'
            }}>
        <Text>
        Chips Cards
        </Text>

        </View>

    );
}

}


export default ChipsCard 