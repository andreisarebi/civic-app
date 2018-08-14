import React from 'react';
import {View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import Colors from '../../../styles/colors';
import Mixins from '../../../styles/mixins';

const NewsTab = (props) => {
  return (
    <View>
      <View style={styles.newsCard}>
        <Image
          source={require('../../../assets/images/gavin.png')}
          style={styles.newsImage}
        />
        <View style={styles.newsBody}>
          <Text style={styles.newsBodyText}>Does Gavin Newsom represent a shift in California Democratic Party?</Text>
          <View style={styles.dateTag}>
            <Icon
              size={14}
              name="clock"
              type="material-community"
              iconStyle={{marginRight: 5}}
            />
            <Text>3 hr ago</Text>
          </View>
        </View>
      </View>
    </View>);
}

const styles = StyleSheet.create({
  newsCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 2,
    ...Mixins.shadow
  },
  newsImage: {
    width:175,
    height: 140
  },
  newsBody:{
    flex:1,
    padding: 10,
    backgroundColor: Colors.white
  },
  newsBodyText:{
    fontSize: 16,
    lineHeight: 22
  },
  dateTag:{
    flexDirection: 'row',
    marginTop: 5
  }
})

export default NewsTab;
