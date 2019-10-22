

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';




class Notifications extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../assets/bell.png')} style={{width: 32, height: 30}} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black'
    }
  
});

export default Notifications;
