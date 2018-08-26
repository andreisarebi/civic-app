import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../../styles/colors';

export const mapAlertLevelToColor = (level) => {
  switch (level) {
    case 'high':
      return colors.red;
    case 'medium':
      return colors.darkBlue;
    default:
      return colors.darkBlue;
  }
};

const Banner = props => (
  <View style={[styles.container, props.style, { backgroundColor: props.color }]}>
    <TouchableHighlight onPress={props.onPress}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        <Entypo name={props.icon} color={colors.white} size={60} style={styles.icon} />
      </View>
    </TouchableHighlight>
  </View>
);

Banner.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: View.propTypes.style.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

Banner.defaultProps = { onPress: undefined };

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    minHeight: 100,
    padding: 16,
    borderRadius: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  icon: {
    opacity: 0.5,
    position: 'absolute',
    right: 20,
    bottom: 0,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '500',
  },
  subtitle: {
    color: colors.white,
    fontSize: 18,
    marginTop: 4,
  },
});

export default Banner;
