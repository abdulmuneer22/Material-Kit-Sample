import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Sliders from './Slider'
class SliderCard extends Component {

render(){
    return(
        <View style={{
            marginTop :10

        }}>
        
        <Sliders/>
        
        </View>

    );
}

}


export default SliderCard 