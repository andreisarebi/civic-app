import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CandidateDetail from './CandidateDetailContainer';
import TabBar from './TabBar';

class CandidatesScreen extends React.Component {
  static navigationOptions = { title: 'Candidates' };

  static propTypes = propTypes;

  render() {
    return (
      <ScrollView style={styles.container}>
        <CandidateDetail candidateId={this.props.navigation.state.params.id} />
        <TabBar />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

const propTypes = { navigation: PropTypes.shape({ state: { params: { id: PropTypes.string } } }).isRequired };

export default CandidatesScreen;
