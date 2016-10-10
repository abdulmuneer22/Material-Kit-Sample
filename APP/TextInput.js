import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  MKTextField,
  MKColor,
  mdl,
} from 'react-native-material-kit';


const appStyles = require('./Styles');


const styles = Object.assign({}, appStyles, StyleSheet.create({
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7, marginRight: 7,
    // backgroundColor: MKColor.Lime,
  },
  textfield: {
    height: 28,  // have to do it on iOS
    marginTop: 10,
    marginBottom : 10
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
  },
}));


const Textfield = MKTextField.textfield()
  .withPlaceholder('SanFransisco,CA')
  .withStyle(styles.textfield)
  .build();

class TextInput extends Component{

    render(){
        return(
            <View style={{
              paddingLeft : 30,
              paddingRight : 30,
              marginTop : 30,
              borderColor : '#cbcbcb',
              borderRadius : 5,
              borderWidth :1,
              marginLeft : 20,
              marginRight : 20
            }}>
            <Text style={{marginTop :10,color : '#536a7a'}}>Choose your preferred city or airport</Text>
            <Textfield tintColor={'#00c00e'}/>
            </View>
             

        );
    }

}

export default TextInput



