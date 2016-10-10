import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


class SearchButton extends Component {
render(){
    return(

        <TouchableOpacity style={{
            backgroundColor : '#00c00e',
            flex : 1,
            alignItems : 'center',
            justifyContent :'center',
            padding : 10,

            
        }}>
        <Text style={{color :'white',fontSize : 18}}>Search</Text>
        </TouchableOpacity>
    );
}
}


export default SearchButton