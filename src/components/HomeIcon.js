
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  
} from 'react-native';
import { connect } from 'react-redux';


class HomeIcon extends React.Component {
  render() {
    if(this.props.iconState){
        return(
            <Image
                style={{ marginBottom: 60, width:73, height: 73}}
                source={require('../assets/nfcScan.png')}/>
        )
    }
    else {
        return(
            <Image
                style={{ marginBottom: 60, width:73, height: 73}}
                source={require('../assets/nfcScan.png')}/>
        )
    }
  }
}

const mapStateToProps = (state) => ({
    iconState: state.navReducer.iconState
});

const styles = StyleSheet.create({

  
});

export default connect(mapStateToProps) (HomeIcon);
