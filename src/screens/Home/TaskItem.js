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
          <View>
            <Text>63% of Californians Agree!</Text>
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
    height: 166,
    marginRight: 10
  }
});

export default TaskItem;
