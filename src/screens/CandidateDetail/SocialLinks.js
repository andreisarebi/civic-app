import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const SocialLinks = ({ facebook, email, phone, twitter, color, size }) => (
  <View style={styles.container}>
    <View>
      <Icon name="phone" color={color} size={size} />
      <Text style={[styles.text, { color }]}>CALL</Text>
      <Text>{phone}</Text>
    </View>
    <View>
      <Icon name="email" color={color} size={size} />
      <Text style={[styles.text, { color }]}>EMAIL</Text>
      <Text>{email}</Text>
    </View>
    <View>
      <Icon name="twitter" type="material-community" color={color} size={size} />
      <Text style={[styles.text, { color }]}>TWITTER</Text>
      <Text>{twitter}</Text>
    </View>
    <View>
      <Icon name="facebook" type="material-community" color={color} size={size} />
      <Text style={[styles.text, { color }]}>FACEBOOK</Text>
      <Text>{facebook}</Text>
    </View>
  </View>
);

SocialLinks.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  facebook: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  twitter: PropTypes.string,
};

SocialLinks.defaultProps = { facebook: undefined, email: undefined, phone: undefined, twitter: undefined };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: { fontWeight: 'bold' },
});

export default SocialLinks;
