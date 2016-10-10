import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const textColor = ''


import Icon from 'react-native-vector-icons/Ionicons';


class ChipTag extends Component {
    constructor(props){
        super(props);
        this.state ={
            chipColor : this.props.chipColor,
            textColor : this.props.textColor,
            text : this.props.text,
        }

    if(this.props.chipColor =='green'){
        textColor='white'
        var CheckMark = <Icon name="ios-checkmark-outline" size={20} color="white" /> 
        
    }
    else{textColor = 'black'}

    


    }

    
    
    render(){
        return(
        <View
        style={{
            backgroundColor : this.state.chipColor,
            //width : 80,
            height : 20,
            padding :6,
            alignItems :'center',
            borderRadius : 2,
            margin :5,
            justifyContent : 'center',
            flexDirection :'row'
        }}
        >

        <Text style={{color : textColor,fontSize : 10}}>
        {this.state.text}
        </Text>
        {this.CheckMark}
        
        </View>
        );
        
    }

}

export default ChipTag