
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  FlatList
  
} from 'react-native';
import { connect } from 'react-redux';
import ContainerListItem from './ContainerListItem';




class ContainerLocationList extends React.Component {

  render() {
      console.log(this.props.locationData)
    return(
        this.props.locationData.map((location) => {
            return (
                <ContainerListItem
                    key={location.id}
                    image={location.img}
                    location={location.location}
                    locationAdress={location.locationAdress}
                    recycleType={location.recycleType}
                />
            )
        })
    )
  }

}

const mapStateToProps = (state) => ({
    locationData: state.containerLocationsReducer.locationData
});


const styles = StyleSheet.create({

  
});



export default connect(mapStateToProps, null) (ContainerLocationList);
