import React from 'react';
import { StyleSheet, FlatList, View, Text, Image } from 'react-native';
import { distanceInWordsFromNow } from '../../util/functions';
import Colors from '../../styles/colors';
const img = require('../../assets/images/womens-march.png');

const UpcomingActivism = ({data}) =>
  <FlatList
    horizontal={true}
    style={styles.eventList}
    data={data}
    keyExtractor={item => item.id}
    renderItem={ ({item}) => (
      <View style={styles.eventItem}>
        <View sttyle={styles.dateTitleContainer}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>in {distanceInWordsFromNow(item.dateTime)}</Text>
        </View>
        <Image
          source={img}
          style={styles.eventImage}
        />
      </View>
    )}
  />;
  
const styles = StyleSheet.create({
  eventList: {
    flex: 1
  },
  eventItem: {
    backgroundColor: Colors.white,
    height: 112,
    width: 300,
    flex: 1,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  eventImage: {
    flex:1,
    height: 112
  },
  dateTitleContainer: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventTitle: {
    width: '66%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex:2,
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventDate: {
    width: '66%',
    paddingLeft: 20,
    flex:1,
    fontSize: 14,
    color: Colors.darkGray
  }
});

export default UpcomingActivism;
