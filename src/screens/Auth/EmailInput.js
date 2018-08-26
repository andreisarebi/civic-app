import React from 'react';
import PropTypes from 'prop-types';
import CivicTextInput from '../../util/components/CivicTextInput';

const EmailInput = props => (
  <CivicTextInput
    autoCapitalize="none"
    autoCorrect={false}
    autoFocus
    clearButtonMode="while-editing"
    keyboardType="email-address"
    onChangeText={props.onChangeText}
    value={props.value}
    placeholder={props.placeholder || 'E-mail address'}
  />
);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

EmailInput.defaultProps = { placeholder: undefined };

export default EmailInput;
