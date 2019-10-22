
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  
} from 'react-native';




class Search extends React.Component {

  render() {
    return(
      <View style={styles.container}>
          <Image style={{width: 17.7, height: 17.7, margin: 10}} source={require('../assets/search.png')}/>
          <TextInput  style={styles.input} placeholder={'Pretraži mjesto...'}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 40,
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        flexDirection: 'row'
    },
    input: {
        marginTop: 5,
        height: 35,
        alignItems: 'center',
        width: 327 - 17.7 - 10,
    }
  
});

export default Search;
