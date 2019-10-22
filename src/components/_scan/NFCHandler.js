
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';

//Import lottie library
import LottieView from 'lottie-react-native';


class NFCHandler extends React.Component {

  render() {
    return(
      <View style={styles.container}>
         <Text style={styles.titleTxt}>
            Približi telefon na 30 cm od kontejera i skeniraj NFC.
         </Text>

        <LottieView source={require('../../assets/lottie/nfc.json')} autoPlay loop />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0DAF53',
  },
  titleTxt: {
    marginTop: 88,
    marginLeft: 24,
    marginRight: 24,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium'
  }
});

export default NFCHandler;
