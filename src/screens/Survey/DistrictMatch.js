import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Mixins from '../../styles/mixins';
import colors from '../../styles/colors';

import ButtonSubmit from '../components/ButtonSubmit';

const zipCodeImage = require('../../assets/images/district-match-zip.png');

const DistrictMatch = () => {
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
        />
        <ButtonSubmit/>
      </View>
    </View>
  )
}


        // onChangeText={email => this.setState({ email })}
        // value={this.state.email}

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
