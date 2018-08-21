import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Banner, { mapAlertLevelToColor } from './Banner';
import Colors from '../../styles/colors';
import DailyTasks from './DailyTasks';
import UpcomingActivism from './UpcomingActivism';

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
    userAgrees: null
  },
  {
    id: 'task2',
    heading: 'Narrow your matches',
    content: 'Should there be limits on donations to political campaigns?',
    userResponse: ''
  },
]

const upcomingActivism = [
  {
    id: 'activism1',
    title: `Women's March 2018`,
    imgUrl: '',
    dateTime: new Date(2018, 11, 18, 12)
  },
  {
    id: 'activism2',
    title: 'Some Other March 2018',
    imgUrl: '',
    dateTime: new Date(2018, 11, 19, 12)
  },
]

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
      >
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

        {/* Daily Tasks */}
        <Text style={styles.sectionHeader}>DAILY TASKS</Text>
        <DailyTasks data={dailyTasks}/>

        {/* Upcoming Activism */}
        <Text style={styles.sectionHeader}>UPCOMING ACTIVISM</Text>
        <UpcomingActivism data={upcomingActivism}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 0,
  },
  banner: {
    marginTop: 8,
  },
  sectionHeader: {
    fontSize: 14,
    margin: 18,
    color: Colors.gray
  }
});

export default HomeScreen;
