import React from 'react';
import { Text } from 'react-native';

const DistrictSuccess = (props) => {
  const { district } = props.navigation.state.params;
  return (
    <Text>Your District Is: {district}</Text>
  )
}

export default DistrictSuccess;
