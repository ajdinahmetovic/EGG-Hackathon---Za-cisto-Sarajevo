import React from 'react';
import {
  StyleSheet,
  
} from 'react-native';

//Screens imports
import Home from '../components/_scan/Home';
import NFCHandler from '../components/_scan/NFCHandler';
//Navigation imports
import {createStackNavigator, createAppContainer} from 'react-navigation'

//Create navigator with 2 homepage screens
const Routes = createStackNavigator ({
    Home: {
        screen: Home
    },
    NFCHandler: {
        screen: NFCHandler
    }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}

)

//Create AppContainer
let InternalNavigator = createAppContainer(Routes);


class Scanner extends React.Component {
  render() {
    return <InternalNavigator/>
  }

}

const styles = StyleSheet.create({
 
});

export default Scanner;
