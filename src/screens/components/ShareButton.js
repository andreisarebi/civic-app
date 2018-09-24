import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';

const ShareButton = props => (
  <Button
    raised
    rightIcon={{name: 'launch', size:25}}
    borderRadius={5}
    title={props.title}
    buttonStyle={props.buttonStyle}
    containerViewStyle={props.containerViewStyle}
    textStyle={styles.buttonText}
    fontWeight="bold"
    onPress={props.onPress}
  />
);

ShareButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white
  }
});

export default ShareButton;
