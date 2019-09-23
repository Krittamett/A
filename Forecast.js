import React from 'react';
import {Text, View } from 'react-native';
export default class Forecast extends React.Component{
    render(){
        return(
            <View>
                <Text style={{color: 'white'}}>{this.props.main}</Text>
                <Text style={{color: 'white'}}>{this.props.description}</Text>
                <Text style={{color: 'white'}}>{this.props.temp} °C</Text>
            </View>
        );
    }
}