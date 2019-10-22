
import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import Search from '../../common/Search';
import ContainerLocationsList from './ContainerLocationsList';



class Home extends React.Component {
    

  render() {
    return(
        <View style={styles.container}>
          
        <View style={styles.title}>
            <Text style={styles.titleTxt}>
                Skeniraj NFC
            </Text>
        </View>
        <ImageBackground 
            style={styles.card} 
            source={require('../../assets/cardExample.png')}>
            <TouchableOpacity  
                onPress={() => this.props.navigation.navigate('NFCHandler')}
                style={styles.button}>
                <Text style={styles.buttonTxt}>
                    Probaj
                </Text>
            </TouchableOpacity>
        </ImageBackground>
            <View 
                style={[styles.title, {marginTop: 29}]}>
                <Text  
                    style={styles.searchTitle}>
                    Lokacije kontejnera
                </Text>
                    <Search/>
                    <ScrollView
                        style={{height: 320}}
                        showsVerticalScrollIndicator={false}
                    >
                        <ContainerLocationsList/>
                        <View style={{height: 100}}/>
                    </ScrollView>

            </View>
    </View>
    )
  }

}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 26,
    },
    title: {
        width: 327,
        alignItems: 'flex-start',
    },
    titleTxt: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 24,
    },
    card:{
        marginTop: 16,
        width: 327,
        height: 223,
    },
    button: {
      marginTop: 140,
      marginLeft: 16,
      borderRadius: 15,
      borderWidth: 3,
      alignItems: 'center',
      justifyContent: 'center',
      width:112,
      height: 40,
      borderColor: 'white',
    },
    buttonTxt: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
    },
    searchTitle:{
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
    }
  
});

export default Home;
