
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { connect} from 'react-redux'
import Notification from './Notification'


class ContainerNotificationsList extends React.Component {

  render() {
    return(
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
        
            <View style={styles.container}>
                <View style={{width: 24}}>

                </View>
                {
                    this.props.notifications.map(notification => {
                        return (
                            <Notification
                                key={notification.id}
                                content={notification.message}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
    notifications: state.notificationReducer.notifications
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
});

export default connect(mapStateToProps) (ContainerNotificationsList);
