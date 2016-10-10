import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';


class StatusBar extends Component {

render(){
    return(
        <View 
      style={{flexDirection : 'row',
      paddingTop : 30,
      backgroundColor :'#f8f8f8'
    }}>
       
        <View style={{
            flex : 1, 
            //backgroundColor : 'green',
            height :40,
            alignItems : 'center',
            justifyContent :'center'
        
        }}>

        <Icon name="ios-menu" size={30} color="#555555" />
        
        </View>
        
        <View style={{
            flex : 4, 
            //backgroundColor : 'red',
            height : 40,
            alignItems : 'center',
            justifyContent : 'center',
            
        }}>
        <Text style={{
            fontSize : 18,
            color : '#555555',
            fontWeight : '300'
        
        }}>Discovery Settings</Text>
        </View>
        
        <View style={{
            flex : 1, 
            //backgroundColor : 'red',
            height : 40}}></View>



      </View>

    );
}

}


export default StatusBar 