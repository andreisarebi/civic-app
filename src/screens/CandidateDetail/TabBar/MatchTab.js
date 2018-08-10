import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements'
import Colors from '../../../styles/colors';

const MatchTab = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.matchCard}>
        <Text style={styles.matchCardText}>You're a <Text style={styles.matchCardPercentText}>98%</Text> match!</Text>
        <Button
          raised
          rightIcon={{name: 'launch', size:25}}
          borderRadius={5}
          title="Share"
          buttonStyle={styles.shareButton}
          containerViewStyle={styles.buttonView}
          textStyle={styles.buttonText}
          fontWeight="bold"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  matchCard:{
    borderWidth:1,
    borderColor:'black',
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: 2,
  },
  matchCardText: {
    textAlign: 'center',
    fontSize: 20,
    color: Colors.white
  },
  matchCardPercentText:{
    fontSize: 24
  },
  shareButton: {
    backgroundColor: Colors.lightBlue
  },
  buttonView: {
    borderWidth:1,
    borderColor:'black',
  },
  buttonText: {
    color: Colors.white
  }
});

export default MatchTab;
