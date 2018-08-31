import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Mixins from '../../styles/mixins';
import colors from '../../styles/colors';
import { CIVIC_API_KEY } from 'react-native-dotenv';
import ButtonSubmit from '../components/ButtonSubmit';

const zipCodeImage = require('../../assets/images/district-match-zip.png');

class DistrictMatch extends Component {
  state = {
    input: ''
  }

  fetchDistrict = async () => {
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${CIVIC_API_KEY}&address=${this.state.input}&includeOffices=true&roles=legislatorLowerBody`;
    try {
      const result = await fetch(url);
      const resultJson = await result.json();
      const officeName = resultJson.offices[0].name.split(' ');
      const district = officeName[officeName.length-1];
      this.props.navigate('DistrictSuccess', {district});
    } catch(error){
      this.setState({district: '', error:'Unable to locate that address.'})
    }
  }

  submit = () => {
    this.fetchDistrict()
  }

  render(){
    const { input, district } = this.state;
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
            onChangeText={(input)=>this.setState({input})}
            value={input}
          />
          <ButtonSubmit onPress={this.submit}/>
          <Text>{district && district}</Text>
        </View>
      </View>
    );
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
})

export default DistrictMatch;
