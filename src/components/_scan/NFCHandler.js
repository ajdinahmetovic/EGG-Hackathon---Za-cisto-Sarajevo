
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

//Import lottie library
import LottieView from 'lottie-react-native';


class NFCHandler extends React.Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('Success')
    }, 7000)
  }

  render() {
    return(
      <View style={styles.container}>
         <Text style={styles.titleTxt}>
            Približi telefon na 30 cm od kontejera i skeniraj NFC.
         </Text>

        <LottieView 
          source={require('../../assets/lottie/nfc.json')} 
          autoPlay 
          loop />

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.cancelTxt}>
                Otkaži skeniranje
            </Text>
          </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DAF53',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 88,
    marginLeft: 24,
    marginRight: 24,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium'
  },
  cancelTxt: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: 'white',
    marginTop: 400,
  } 
});

export default NFCHandler;
