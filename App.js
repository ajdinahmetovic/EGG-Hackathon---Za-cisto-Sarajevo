import React from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Notifications from './src/views/Notifications'
import Profile from './src/views/Profile';
import Scanner from './src/views/Scanner';

import {Provider} from 'react-redux'
import store from './src/redux/store'

const TabNavigator = createBottomTabNavigator ({
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarLabel: 'Notifications',
      tabBarIcon: () => <Image source={require('./src/assets/bell.png')} style={{width:22, height: 28}}/>
    }
  },
  Scanner: {
    screen: Scanner,
    navigationOptions: {
      tabBarLabel: 'Scanner',
      tabBarIcon: () => <Image source={require('./src/assets/nfcScan.png')} style={{ marginBottom: 60, width:73, height: 73}}/>
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profiles',
      tabBarIcon: () => <Image source={require('./src/assets/user.png')} style={{width:28, height: 28}}/>
    }
  }
},
{
  tabBarOptions: {
      showIcon: true,
      showLabel: false,
          activeTintColor: 'white',
          inactiveTintColor: 'white',
          style:{
          backgroundColor: '#BEBEBE',
              height: 66,
      },
  },
}

);

let BottomTabNavigation = createAppContainer(TabNavigator);



class App extends React.Component {



  render() {
      return(
        <Provider store={store}>
          <BottomTabNavigation/>
        </Provider>
      )
  }

}

const styles = StyleSheet.create({
  
});

export default App;
