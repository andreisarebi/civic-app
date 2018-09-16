import React from 'react';
import { Share, View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import SquareButton from './SquareButton';

class ActivismScreen extends React.Component {
  static navigationOptions = {
    title: 'Activism',
  };

  handlePress = () => {
    Share.share({
      message: "Check out the Civic App!",
      url: "https://www.getcivicapp.com/",
      title: "Civic App"
    },
    {
      dialogTitle: "Civic App"
    })
  }

  render() {
    const user = "Heather";
    const { handlePress } = this;
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{user}, how will you make change today?</Text>
        <View style={styles.buttonContainer}>
          <SquareButton handlePress={handlePress} text="Share"/>
        </View>
      </View>
    );
  }
}

ActivismScreen.propTypes = {
  user: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  heading: {
    fontSize: 20,
    margin: 20,
    marginTop: 0,
    marginBottom: 20,
    lineHeight: 23
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10
  }
})

export default ActivismScreen;
