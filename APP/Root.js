import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';


import StatusBar from './StatusBar'
import InputCard from './InputCard'
import SliderCard from './SliderCard'
import TextCard from './TextCard'
import ChipsCard from './ChipsCard'
import ChipTag from './ChipTag'
import SearchButton from './SearchButton'




class Root extends Component {

render(){
    return(
        <View style={{flex : 1}}>
        <View style={{flex : 6}}>

            <StatusBar/>
            <InputCard/>
            <SliderCard/>
            <TextCard/>


        </View>
        
        <ScrollView style={{
            flex : 4,
            marginTop : 25,
            flexDirection : 'column',
            backgroundColor :'#536979',
            marginLeft : 15,
            marginRight : 15,
            borderTopLeftRadius :5,
            borderTopRightRadius :5,
            
        }}>

        <View style={{flex : 8 }}>

        <View style={{
            flexWrap : 'wrap',
            flexDirection :'row',
            justifyContent : 'center'
        }}>
        <ChipTag text={'CHEAP +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'AFFORDABLE '} chipColor = {'#00c10f'}{...this.props}/>
        <ChipTag text={'EXPENSIVE +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'COLD +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'WARM +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'HOT +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FEMALE FRIENDLY +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'BIG CITY +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'CHEAP FLIGHT (ID) +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FREEDOM OF SPEECH +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FREE WIFI +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'HEALTHY MALE BMI +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'CHEAP FLIGHT (ID) +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FREEDOM OF SPEECH +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FREE WIFI +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'HEALTHY MALE BMI +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'OUTSIDE SCHENGEN +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'HAS AIRCON +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FREE WIFI +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'NOT RELIGIOUS +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'FEW MOSQUITOS +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'LOW TRAFFIC +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'GOOD ENGLISH +'} chipColor = {'white'}{...this.props}/>
        <ChipTag text={'GOLF +'} chipColor = {'white'}{...this.props}/>
        
        
        
        </View>
        
        </View>




        
        
            
            
        </ScrollView>

        <View style={{
            
            alignItems: 'center',
            marginLeft : 15,
            marginRight : 15,
            backgroundColor :'#00c00e',
            marginBottom : 10,
            height : 60

        }}>
        <SearchButton/>
        </View>
        
        
        
        



        </View>

    );
}

}


export default Root 