import React from 'react';
import { Image, StyleSheet } from 'react-native';

const candidatesIcon = require('../../assets/images/welcome-candidates-icon.png');
const stayInformedIcon = require('../../assets/images/welcome-stay-informed-icon.png');
const getInvolvedIcon = require('../../assets/images/welcome-get-involed-icon.png');

export const CandidatesImage = props => <Image {...props} style={styles.candidates} source={candidatesIcon} />;

export const StayInformedImage = props => <Image {...props} style={styles.stayInformed} source={stayInformedIcon} />;

export const GetInvolvedImage = props => <Image {...props} style={styles.getInvolved} source={getInvolvedIcon} />;

const styles = StyleSheet.create({
  candidates: {
    height: 138,
    width: 138,
  },
  stayInformed: {
    height: 148,
    width: 110,
  },
  getInvolved: {
    height: 144,
    width: 180,
  },
});
