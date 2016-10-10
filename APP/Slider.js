/**
 * Created by ywu on 15/8/31.
 */

import React, { Component } from 'react';
const appStyles = require('./Styles');

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
} from 'react-native-material-kit';



const styles = Object.assign({}, appStyles, StyleSheet.create({
  slider: {
    width: 130,
  },
}));


class ValueText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: props.initial,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <Text style={styles.legendLabel}>
        ${this.state.curValue}
      </Text>
    );
  }
}

class Sliders extends Component {

  componentDidMount() {
    const slider = this.refs.sliderWithValue;
    const ranged = this.refs.rangeSlider;
    

    
  }

render() {
  return (<View style={{
  padding :10,
  borderColor : '#cbcbcb',
  marginLeft : 20,
  marginRight : 20,
  borderRadius : 5,
  borderWidth :1,
  paddingLeft :30,
  paddingRight :30
}}>


<View style={{
  flexDirection :'row',
  
  }}
>

<View style={{
      
      height : 40,
      flex :1}}>

<Text style={{color : '#536a7a'}}>Budget</Text>
</View>

<View style={{
      height : 40,
      alignItems : 'flex-end',
      flex : 1}}>
      <Text>
      <ValueText ref="rangeValueText"  initial="100-$500" rangeText="$10~$100" />
      </Text>
</View>


</View>






<View style={{
  alignItems :'center',
}}>

        
        <MKRangeSlider
        ref="rangeSlider"
        min={50}
        max={3000}
        lowerTrackColor = {'#00c00e'}
        
        minValue={50}
        maxValue={800}
        style={{
            width : 300,
            
        }}
        onChange={(curValue) => this.refs.rangeValueText.onChange(curValue.min.toFixed(2) + '-' + curValue.max.toFixed(2))}
        />
</View>
    

</View> 

    
      
    );
  }
}

module.exports = Sliders;