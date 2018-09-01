import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
// Views
import {ZipCode, Address, Success, Failure} from './screens';
// API Method & Controller
import fetchDistrict from './fetchDistrict';

import Mixins from '../../styles/mixins';
import colors from '../../styles/colors';


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

  handleChange = (input) => {
    this.setState({...input});
  }

  renderScreen = () => {
    const methods = {
      handleChange: this.handleChange,
      submit: this.submit,
      navigate: this.props.navigate
    };
    switch(this.state.view){
      case 'ENTER_ZIPCODE':
        return <ZipCode styles={styles} {...this.state} {...methods} />;
      case 'ADDRESS_NEEDED':
        return <Address styles={styles} {...this.state} {...methods} />;
      case 'DISTRICT_FOUND':
        return <Success district={this.state.district} {...methods} />;
      case 'DISTRICT_NOT_FOUND':
        return <Failure {...methods}/>;
      default:
        return null;
    }
  }

  render(){
    const { zipcode, address, city, isLoading, view, district, error } = this.state;
    if(isLoading){
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    )
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
