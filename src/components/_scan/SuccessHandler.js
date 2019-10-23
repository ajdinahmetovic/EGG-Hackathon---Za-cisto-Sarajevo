
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  
} from 'react-native';
import LottieView from 'lottie-react-native';




class SuccessHandler extends React.Component {

  render() {
    return(
      <View style={styles.container}>
         <Text style={styles.message}>
            Uspješno ste skenirali!
         </Text>
         <View style={{width: 220, height: 220}}>
            <LottieView 
            source={require('../../assets/lottie/check.json')} 
            autoPlay 
            loop={false}
            />
        </View>
         
         <TouchableOpacity style={styles.button}>
            <Text
                style={{fontFamily: 'Montserrat-Medium', fontSize: 18, color: 'white'}}
            >
                Podijeli
            </Text>
         </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
    },
    button: {
        width: 327,
        height: 56,
        backgroundColor: '#DB3A16',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SuccessHandler;
