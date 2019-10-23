import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import ContainerNotificationsList from '../components/_notifications/ContainerNotificationsList';
import { TextInput } from 'react-native-gesture-handler';


class Notifications extends React.Component {
  render() {
    return(
      <View style={styles.container}> 
        <View style={styles.title}>
          <Text style={styles.titleTxt}>
              Obavijesti
          </Text>
        </View>
        <View style={{height: 27}}/>
          <ContainerNotificationsList />
        <View style={styles.questions}>
          <Text style={styles.questionsTitle}> 
            Pitanje
          </Text>
          <Text style={styles.questionDesc}>
              Postavite pitanje i primite brz i automatski odgovor ovdje.
          </Text>
        </View>


        <View style={styles.inputQuestion}>
            <TextInput style={styles.questionField} placeholder={'Unesite pitanje...'}/>
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
    questions: {
      marginTop: 40,
      width: 327,
    },
    questionsTitle: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 24,
    },
    questionDesc: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      marginTop: 16,
    },
    inputQuestion: {
      marginTop: 16,
      width: 327,
      height: 80,
      borderRadius: 15,
      borderColor: 'black',
      borderWidth: 1,
    },
    questionField: {
      marginLeft: 16,
      fontFamily: 'Monsterrat-Regular'
    }
  
});

export default Notifications;
