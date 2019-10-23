
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  
} from 'react-native';




class Notification extends React.Component {

  render() {
    return(
      <View style={styles.container}>
         <View style={styles.profileInfo}>  
            <Image
                style={{width: 40, height: 40}}
                source={require('../../assets/rad.png')}/>
            <Text style = {{marginLeft: 5, fontSize: 18, fontFamily:'Montserrat-Medium'}}>
                JKP Rad
            </Text>
         </View>

        <View style={styles.content}>
            <Text style = {styles.contentTxt}>
                {this.props.content}
            </Text>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'column',
    },
    profileInfo: {
        alignItems: 'center',
        marginBottom: 10,
        paddingStart: 5,
        flexDirection: 'row',
    },
    content: {
        width: 259,
        height: 112,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DB3A16',
        borderRadius: 15,
    },
    contentTxt:{
        width: 259 - 20,
        height: 112 - 20,
        fontSize: 18,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    }

  
});

export default Notification;
