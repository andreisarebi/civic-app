import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../../styles/colors';

const StyledButton = ({title}) =>
  <Button
    raised
    borderRadius={2}
    title={title}
    containerViewStyle={{ flex: 1, width:'50%'}}
    buttonStyle={{ backgroundColor: Colors.red, height: 36 }}
    titleStyle={{color:Colors.white, fontSize: 14}}
  />

const TaskItem = ({heading, content}) =>
  <View style={styles.taskItem}>
    <Text style={styles.heading}>{heading}</Text>
    <Text style={styles.content}>{content}</Text>
    <View style={styles.buttonBox}>
      <StyledButton title="Yes"/>
      <StyledButton title="No"/>
    </View>
  </View>

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: Colors.white,
    width: 300,
    height: 166,
    marginRight: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    paddingBottom: 10
  },
  content: {
    padding: 20,
    paddingTop: 0,
    fontSize: 16,
  },
  buttonBox:{
    flexDirection:'row',
    justifyContent: 'space-between',
  }
});

export default TaskItem;
