import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import Style from '../Style'

export default class About extends React.Component {

    static navigationOptions = {
        title: 'About',
        tabBarIcon: () => {
            return   <Image source={require('./Icons/user.png')}  style={{width:20, height: 20}} />
        }

    }
    search () {
        console.log(this.props.navigation.navigate('Search'))
    }

    render() {
        return (
            <View style={Style.container}>
              <Text style={Style.title}> A propos de l'application</Text>
              <Text> 
                 Lorem ipsum dolor sit amet, his graecis disputando in. Sed enim efficiantur ea. Vim ex explicari forensibus suscipiantur, agam duis deseruisse an qui. No adhuc ullum conceptam quo, duo an nihil salutandi, ei vis facete consectetuer.
                 In sale saperet quaerendum per, tota voluptaria temporibus vim et, elit legimus menandri nec ut. Id vel probo audire, habeo brute vim ei. Est sale tincidunt ne. Ius te luptatum voluptatibus, debet definitionem ne sea. Docendi verterem eum ut, ad sit doming alterum reprehendunt.
              </Text>
              <Button  color={Style.color} onPress = {() => this.search()} title='Rechercher une ville' />
                                            
            </View>
        );
    }
}
