

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import {setHome} from '../redux/actions/navIcon'
import { connect } from 'react-redux';


class Profile extends React.Component {

  constructor (props){
    super(props)
    this.props.setHome()
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.title}>
              <Text style={styles.titleTxt}>
                  Informacije
              </Text>
          </View>
        <View style={styles.statsContainer}>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>
              Skeniranje
            </Text>
            <Image 
              style={{width: 30, height: 30, marginTop: 16}} 
              source={require('../assets/nfcIcon.png')}/>
            <Text style={styles.statNumber}>
              16
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>
              Nagrade
            </Text>
            <Image 
              style={{width: 30, height: 30, marginTop: 16}} 
              source={require('../assets/gift.png')}/>
            <Text style={styles.statNumber}>
              4
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.statTitle}>
              Pitanja
            </Text>
            <Image 
              style={{width: 20, height: 31, marginTop: 16}} 
              source={require('../assets/questionMark.png')}/>
            <Text style={styles.statNumber}>
              8
            </Text>
          </View>
        </View>

        <View style={[styles.title, {marginTop: 32}]}>
              <Text style={styles.titleTxt}>
                  Moje nagrade
              </Text>
          </View>
        <View style={styles.awardList}>

        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View 
            style={styles.awardContainer}>
              <View 
                style={styles.award}>
                  <View
                    style={styles.awardImgContainer}>
                      <Image  
                        style={{width: 147, height: 175}}
                        source={require('../assets/promo1.png')}/>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text
                      style={{fontFamily: 'Montserrat-Medium', fontSize: 18, marginTop: 16}}>
                      Trgovina 1
                    </Text>
                    <Text 
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
                      Besplatan poklon paket
                    </Text>
                  </View>
              </View>
              <View 
                style={[styles.award, {marginLeft: 31}]}>
                  <View
                    style={styles.awardImgContainer}>
                      <Image  
                        style={{width: 147, height: 175}}
                        source={require('../assets/promo2.png')}/>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text
                      style={{fontFamily: 'Montserrat-Medium', fontSize: 18, marginTop: 16}}>
                      Trgovina 2
                    </Text>
                    <Text 
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
                      10% popusta na svaki račun
                    </Text>
                  </View>
              </View>
          </View>
          <View 
            style={styles.awardContainer}>
              <View 
                style={styles.award}>
                  <View
                    style={styles.awardImgContainer}>
                      <Image  
                        style={{width: 147, height: 175}}
                        source={require('../assets/theater.png')}/>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text
                      style={{fontFamily: 'Montserrat-Medium', fontSize: 18, marginTop: 16}}>
                      Pozorište
                    </Text>
                    <Text 
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
                      Besplatna ulaznica
                    </Text>
                  </View>
              </View>
              <View 
                style={[styles.award, {marginLeft: 31}]}>
                  <View
                    style={styles.awardImgContainer}>
                      <Image  
                        style={{width: 147, height: 175}}
                        source={require('../assets/promo4.png')}/>
                  </View>
                  <View style={styles.contentContainer}>
                    <Text
                      style={{fontFamily: 'Montserrat-Medium', fontSize: 18, marginTop: 16}}>
                      Trgovina 3
                    </Text>
                    <Text 
                      style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
                      
                    </Text>
                  </View>
              </View>
          </View>
          <View style={{height: 200}}>

          </View>
        </ScrollView>
      </View>
    )
  }

}

const mapDispatchToProps = ({
  setHome: () => setHome()
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
    alignItems:'center',
    justifyContent: 'center',
  },
  title: {
    width: 327,
    alignItems: 'flex-start',
  },
  titleTxt: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
  },
  statsContainer: {
    width: 327,
    flexDirection: 'row',
  },
  stat: {
    margin: 6,
    width: 102,
    height: 145,
    backgroundColor: '#EEEEEE',
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  statNumber: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    marginTop: 20,
  },
  awardContainer: {
    flexDirection: 'row',
    width: 327,
  },
  awardList: {
    marginTop: 24,
    flexDirection:'column',
  },
  award: {
    flexDirection: 'column',
    width: 150,
    height: 250,
    marginBottom: 16,
  },
  awardImgContainer: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {

  }
});

export default connect(null, mapDispatchToProps) (Profile);
