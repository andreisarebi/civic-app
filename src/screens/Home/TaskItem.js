import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../styles/colors';
import SurveyQuestion from './SurveyQuestion';

class TaskItem extends Component {
  render(){
    const { heading, content, updateResponse, userResponse } = this.props;
    return(
      <View style={styles.taskItem}>
        {
          !userResponse ?
          <SurveyQuestion {...this.props}/>
          :
          <View style={styles.responseView}>
            <Text style={styles.responseHeader}>63%</Text>
            <Text style={styles.responseText}>63% of California also said {userResponse.toLowerCase()}.</Text>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: Colors.white,
    width: 300,
    height: 180,
    marginRight: 10
  },
  responseView: {
    padding: 20,
    backgroundColor: Colors.darkBlue,
    flex: 1,
  },
  responseHeader: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.white
  },
  responseText: {
    fontSize: 18,
    color: Colors.white
  }
});

export default TaskItem;
