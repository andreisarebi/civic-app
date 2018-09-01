import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import DistrictMatch from './DistrictMatch';

import styles from '../styles';

class DistrictMatchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DistrictMatch navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}

DistrictMatchScreen.propTypes = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
    push: PropTypes.func,
  }),
};

export default DistrictMatchScreen;
