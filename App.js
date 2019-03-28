import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Search from './Components/Search';
import About from './Components/About';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

const Tabs = createBottomTabNavigator ({
  Search: {screen: Search},
  About: {screen: About}
},
{
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    inactiveTintColor: '#a2272f',
    labelStyle: {
      color: "black"
    },

    indicatorStyle: {
      height: 2,
      borderBottomWidth:10,
      borderBottomColor: 'black'
    },
 
    style: {
      backgroundColor: '#15E',
    }
  }
}
)

export default createAppContainer(Tabs);


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar hidden={true}/>
       <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})