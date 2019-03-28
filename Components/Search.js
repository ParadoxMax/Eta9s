import React from 'react';
import {TextInput, Image, Button, View} from 'react-native';
import Style from '../Style';
import List from './List';
import { createStackNavigator, createAppContainer} from 'react-navigation';

class Search extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return   <Image source={require('./Icons/Home.png')} style={{width:20, height: 20}} />
        }

    }
    constructor (props) {
        super(props)
        this.state ={
            city: ''
        }
    }
    setCity (city) {
        this.setState({city})    
    }
    submit () {
        this.props.navigation.navigate('Result', {city: this.state.city})
        
    }

    render () {
        return (
          <View style={Style.container}>
            <TextInput
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.setCity(text)}
            style={Style.input}
            value={this.state.city} />
            <Button color={Style.color} onPress={() =>this.submit()} title="Rechercher"/>
          </View>
        )
    }
}

const navigationOptions = {
    headerStyle: Style.header,
    headerTitleStyle: Style.headerTitle,
}

  