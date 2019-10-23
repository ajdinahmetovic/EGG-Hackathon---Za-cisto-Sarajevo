
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import { connect} from 'react-redux'
import Search from '../../common/Search';
import ContainerLocationsList from './ContainerLocationsList';



class ContainerSearch extends React.Component {

  render() {
    return(
      <View style={styles.container}>
          <Search/>
          <ContainerLocationsList/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 48,
        alignItems: 'center',
        justifyContent: 'center'
    }
  
});
export default ContainerSearch;
