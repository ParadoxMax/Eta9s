import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment';
import Style from '../../Style';


export default class Row extends React.Component {

    static propTypes = {
        day: '',
        index: ''
    }
    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[specifiedStyle.white, specifiedStyle.bold]}>{day.toUpperCase()}</Text>
        )
    }

    icon(size= 50){
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch(type){
            case 'clouds':
              image = require('./Icons/Cloudy.png')
            break;
            case 'rain':
              image = require('./Icons/Rainy.png')
            break;
            default:
              image = require('./Icons/Sunny.png')
        }
        return <Image source={image} style={{width: size, height: size}}/>
    }

    date(){
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{ day }</Text>
        )
    }



    render() {
        if (this.props.index === 0) {
            return (
                <View style={[specifiedStyle.flex, specifiedStyle.view, specifiedStyle.firstView]}>
                    <View style={specifiedStyle.flex}>
                      <Text>{this.icon()}</Text>
                      <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={specifiedStyle.temp}>{this.props.day.temp.day}°C</Text>
                </View>  
            );
        } else {
            return (
                <View style={[specifiedStyle.flex, specifiedStyle.view]}>
                    <View style={specifiedStyle.flex}>
                      <Text>{this.icon()}</Text>
                      <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={specifiedStyle.temp}>{this.props.day.temp.day}°C</Text>
                </View>  
            );
        }
    }
}

const specifiedStyle = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22,

    },
    firstView: {
        backgroundColor: '#e54b65'
    }
})