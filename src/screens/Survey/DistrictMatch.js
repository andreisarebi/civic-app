import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Mixins from '../../styles/mixins';
import colors from '../../styles/colors';
import ButtonSubmit from '../components/ButtonSubmit';
import fetchDistrict from './fetchDistrict';

const zipCodeImage = require('../../assets/images/district-match-zip.png');
const addressImage = require('../../assets/images/district-match-address.png');

class DistrictMatch extends Component {
  constructor(props){
    super(props);
    this.fetchDistrict = fetchDistrict.bind(this);
  }
  state = {
    zipcode: '',
    address: '',
    city: '',
    isLoading: false,
    view:'ENTER_ZIPCODE',
    district: '',
    error: ''
  };

  submit = () => {
    this.setState({isLoading: true, error: ''}, () => {
      this.fetchDistrict();
    })
  }

  render(){
    const { zipcode, address, city, isLoading, view, district, error } = this.state;
    if(isLoading) return <View><Text>Loading...</Text></View>;
    switch(view){
      case 'ENTER_ZIPCODE':
        return(
          <View style={styles.container}>
            <Text style={styles.header}>Just one more thing</Text>
            <Image style={styles.image} source={zipCodeImage}/>
            <Text style={styles.bodyText}>We need your zip code to find your district.</Text>
            <View style={styles.inputContainer}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={false}
                clearButtonMode="while-editing"
                keyboardType="numeric"
                style={styles.textInput}
                placeholder="ZIP code"
                onChangeText={(zipcode)=>this.setState({zipcode})}
                value={zipcode}
              />
              {
                <View>
                  <Text style={styles.errorText}>{error && error}</Text>
                </View>
              }
              <ButtonSubmit onPress={this.submit}/>
            </View>
          </View>
        );
        case 'ADDRESS_NEEDED':
          return(
            <View style={styles.container}>
              <Text style={styles.bodyText}>Oops! Your zip code spans several districts. To help us identify your district, please enter your home address.</Text>
              <Image style={styles.image} source={addressImage}/>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  style={styles.textInput}
                  placeholder="Street Address"
                  onChangeText={(address)=>this.setState({address})}
                  value={address}
                />
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={false}
                  clearButtonMode="while-editing"
                  keyboardType="default"
                  style={styles.textInput}
                  placeholder="City"
                  onChangeText={(city)=>this.setState({city})}
                  value={city}
                />
                {
                  <View>
                    <Text style={styles.errorText}>{error && error}</Text>
                  </View>
                }
                <ButtonSubmit onPress={this.submit}/>
              </View>
            </View>
          );
        case 'DISTRICT_FOUND':
        return <Text>Your District Is: {district}</Text>
        case 'WE_FAILED':
        return <Text>Sorry We Just Can't Figure This One Out.</Text>
      default:
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 25,
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    ...Mixins.shadow
  },
  header: {
    fontSize: 28,
    paddingTop: 20
  },
  bodyText: {
    fontSize: 18,
    width: 230,
    paddingTop: 20,
    textAlign: 'center'
  },
  image: {
    marginTop: 25,
    marginBottom:20
  },
  textInput: {
    color: colors.black,
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    padding: 20,
  },
  errorText: {
    color: colors.orange
  }
})

export default DistrictMatch;
