import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../../../styles/colors';

// Components
import SocialLinks from '../SocialLinks';

const Biography = ({ bioContent }) => (
  /**
   * Biography Section > About Tab > CandidateDetail
   * - prop  platformData - Array List of Objects with "id" & "content" keys
   */
  <View style={styles.textContainer}>
    <Text style={styles.heading}>Biography</Text>
    <Text>{bioContent}</Text>
    <Text style={styles.readMoreText}>Read more</Text>
  </View>
);

Biography.propTypes = { bioContent: PropTypes.string.isRequired };

const Platform = ({ platformList }) => (
  /**
   * Platform Section > About Tab > CandidateDetail
   * - prop {array} platformList - Array List of Objects with "id" & "content" keys
   */
  <View style={styles.textContainer}>
    <Text style={styles.heading}>Platform</Text>
    <FlatList
      data={platformList}
      renderItem={({ item }) => (
        <Text key={item.id}>
•
          {item.content}
        </Text>
      )}
      keyExtractor={item => item.id}
    />
    <Text style={styles.readMoreText}>Read more</Text>
  </View>
);

Platform.propTypes = {
  platformList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

const AboutScreen = props => (
  <View style={styles.container}>
    <Biography bioContent={props.bioContent} />
    <Platform platformList={props.platformList} />
    <SocialLinks {...props.socials} size={28} color={Colors.lightBlue} />
  </View>
);

AboutScreen.propTypes = {
  bioContent: PropTypes.string.isRequired,
  platformList: PropTypes.arrayOf(PropTypes.string).isRequired,
  socials: PropTypes.shape(SocialLinks.propTypes).isRequired,
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  textContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
  },
  heading: {
    fontSize: 18,
    padding: 0,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  readMoreText: {
    color: Colors.lightGray,
    paddingTop: 10,
  },
});

export default AboutScreen;
