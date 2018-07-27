import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import CandidateDetail from './CandidateDetailContainer';

class ElectionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Candidates',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CandidateDetail />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    padding: 10,
  },
});

export default ElectionsScreen;
