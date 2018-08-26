import React from 'react';
import PropTypes from 'prop-types';
import CivicTextInput from '../../util/components/CivicTextInput';

const PasswordInput = props => (
  <CivicTextInput
    autoCapitalize="none"
    autoCorrect={false}
    clearButtonMode="while-editing"
    onChangeText={props.onChangeText}
    value={props.value}
    secureTextEntry
    placeholder={props.placeholder || 'Password'}
  />
);

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

PasswordInput.defaultProps = { placeholder: undefined };

export default PasswordInput;
