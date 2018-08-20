import React from 'react';
import { StyleSheet, ScrollView, FlatList, View, Text } from 'react-native';
import Banner, { mapAlertLevelToColor } from './Banner';
import TaskItem from './TaskItem';
import colors from '../../styles/colors';

// eventually this will be in state
const alerts = [
  {
    title: 'Not Registered to Vote?',
    subtitle: 'Click here to get started',
    level: 'high',
  },
  {
    title: 'Something is going on in your city!',
    subtitle: 'Click here to find out more',
    level: 'medium',
  },
];

const dailyTasks = [
  {
    id: 'task1',
    heading: 'Narrow your matches',
    content: 'Do you think the U.S. should be more lenient on immigration?',
  },
  {
    id: 'task2',
    heading: 'Narrow your matches',
    content: 'Should there be limits on donations to political campaigns?',
  },
]

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {alerts.map((alert, index) => (
          <Banner
            key={index}
            color={mapAlertLevelToColor(alert.level)}
            icon="megaphone"
            style={styles.banner}
            title={alert.title}
            subtitle={alert.subtitle}
          />
        ))}
        <View>
          <Text style={styles.sectionHeader}>DAILY TASKS</Text>
          <FlatList
            horizontal={true}
            style={styles.taskList}
            data={dailyTasks}
            keyExtractor={item => item.id}
            renderItem={({item}) => <TaskItem {...item} />}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  banner: {
    marginTop: 8,
  },
  taskList: {
    flex: 1
  },
  sectionHeader: {
    fontSize: 14,
    margin: 18,
    color: colors.gray
  }
});

export default HomeScreen;
