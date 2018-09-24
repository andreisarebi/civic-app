import React from 'react';
import { View, Text, StyleSheet, Share } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../../styles/colors';
import IssueCard from './IssueCard';
import ShareButton from '../../components/ShareButton';

const MatchCard = props =>
  <View style={styles.matchCard}>
    <Text style={styles.matchCardText}>
      You're a <Text style={styles.matchCardPercentText}>{props.matchPercent}%</Text> match!
    </Text>
    <ShareButton
      title={"Share"}
      containerViewStyle={styles.containerViewStyle}
      buttonStyle={styles.buttonStyle}
      onPress={()=>{
        const url = "https://www.getcivicapp.com/";
        Share.share({
          message: `I'm a ${props.matchPercent} with ${'candidate name placeholder'}! Checkout the civic app at ${url}.`,
          url: url,
          title: "Civic App"
        },
        {
          dialogTitle: "Civic App"
        })
      }}
    />
  </View>

MatchCard.propTypes = {
  matchPercent: PropTypes.number,
};

const MatchTab = props => {
  return (
    <View style={styles.container}>
      <MatchCard matchPercent={props.matchPercent} />
      {
        props.issueMatchData.map(({id, ...rest}) =>
          <IssueCard key={id} {...rest} />
        )
      }
    </View>
  );
};

MatchTab.propTypes = {
  matchPercent: PropTypes.number,
  issueMatchData: PropTypes.array,
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  matchCard:{
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: 2,
    height:70
  },
  containerViewStyle: {
    width: '33%',
    height: '60%',
  },
  buttonStyle: {
    backgroundColor: Colors.lightBlue,
  },
  matchCardText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.white,
    flex:2
  },
  matchCardPercentText:{
    fontSize: 24
  }
});

export default MatchTab;
