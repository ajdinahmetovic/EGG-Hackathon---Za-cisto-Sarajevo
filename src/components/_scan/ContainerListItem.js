
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  
} from 'react-native';




class ContainerListItem extends React.Component {

  render() {
    return(
      <View style={styles.container}>
         <Image style={styles.img} source={this.props.image}/>
         <View style={styles.info}>
            <Text style={styles.infoLocation}>
                {this.props.location}
            </Text>
            <Text style={styles.infoAdress}>
                {this.props.locationAdress}
            </Text>
            <Text style={styles.recycleType}>
                {this.props.recycleType}
            </Text>
         </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        width: 327,
        height: 120,
        backgroundColor: '#EEEEEE',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 15,
        resizeMode: 'contain'
    },
    info: {
        marginLeft: 10,
        flexDirection: 'column',
        width: 327 - 16 - 28 - 16 -50,
    },
    infoLocation: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
    infoAdress: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    recycleType: {
        marginTop: 10,
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#DB3A16'
    }
    
  
});

export default ContainerListItem;
