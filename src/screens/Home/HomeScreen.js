import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Banner, { mapAlertLevelToColor } from './Banner';
import colors from '../../styles/colors';
import DailyTasks from './DailyTasks';

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
        <DailyTasks data={dailyTasks}/>
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
});

export default HomeScreen;
