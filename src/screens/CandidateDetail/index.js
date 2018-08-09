import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import CandidateDetail from './CandidateDetailContainer';
import PropTypes from 'prop-types';
import About from './About';

class ElectionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Candidates',
  };

  static propTypes = propTypes;

  render() {
    return (
      <ScrollView style={styles.container}>
        <CandidateDetail candidateId={this.props.navigation.state.params.id}/>
        <About/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

const propTypes = {
  navigation: PropTypes.objectOf({
    id: PropTypes.string,
  }),
};

export default ElectionsScreen;
