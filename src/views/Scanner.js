import React from 'react';
import {
  StyleSheet,
  
} from 'react-native';

//Screens imports
import Home from '../components/_scan/Home';
import NFCHandler from '../components/_scan/NFCHandler';
//Navigation imports
import {createStackNavigator, createAppContainer} from 'react-navigation'
import { connect } from 'react-redux';
import { setNFC } from '../redux/actions/navIcon'
import SuccessHandler from '../components/_scan/SuccessHandler';
import ContainerSearch from '../components/_scan/ContainerSearch';

//Create navigator with 2 homepage screens
const Routes = createStackNavigator ({
    Home: {
        screen: Home
    },
    NFCHandler: {
        screen: NFCHandler
    },
    Success: {
      screen: SuccessHandler
    },
    Search: {
      screen: ContainerSearch
    }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}

)

//Create AppContainer
let InternalNavigator = createAppContainer(Routes);


class Scanner extends React.Component {
  constructor(props){
    super(props)
    this.props.setNFC();
  }
  render() {
    return <InternalNavigator/>
  }

}

const mapDispatchToProps = ({
  setNFC: () => setNFC()
})


const styles = StyleSheet.create({
 
});

export default connect(null, mapDispatchToProps) (Scanner);
