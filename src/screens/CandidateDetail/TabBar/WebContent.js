import React, { Component } from 'react';
import { View, StyleSheet, WebView } from 'react-native';
import Colors from '../../../styles/colors';

class Content extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : 'Content',
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    const uri = params ? params.uri : null;

    return (
      <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          source={{uri: uri}}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: Colors.white
  },
});

export default Content;