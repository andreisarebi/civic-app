import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList, Button, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
import Colors from '../../../styles/colors';
import PropTypes from 'prop-types';
import Mixins from '../../../styles/mixins';

class IssueCard extends Component {
  state = {
    isExpanded: false,
  }

  static propTypes = propTypes;
  toggleExpand = () => {
    this.setState({isExpanded:!this.state.isExpanded})
  }

  renderSeparator = () => {
    return(<View style = {{width: 10,}}/>)};

  render(){
    const { toggleExpand } = this;
    const { isExpanded } = this.state;
    const { type, body, source, agreesWithUser } = this.props;
    return(
      <View styles={styles.container}>
        <View style={styles.issueCard}>
          <View style={styles.issueCardTop}>
            <Icon
              name={agreesWithUser ? 'check' : 'close'}
              type="material-community"
              size={30}
              color={agreesWithUser ? Colors.green : Colors.red }
              containerStyle={styles.issueMatchIcon}
            />
            <Text style={styles.issueText}>
              {agreesWithUser ? 'Agree' : 'Disagree'} on {type} issues</Text>
            <View
              style={styles.issueExpandButton}
            >
              <TouchableHighlight
                onPressIn={ toggleExpand }
                underlayColor={'rgba(0,0,0,0.1)'}
              >
                <Icon
                  name="chevron-down"
                  type="material-community"
                  size={30}
                  color="#CDCDCD"
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ backgroundColor:Colors.white,}}>
            {isExpanded &&
                <Text style={styles.issueBody}>
                  {body}  
                </Text> 
            }
            { isExpanded &&  
                <FlatList 
                  data={source}
                  horizontal={true}
                  keyExtractor={(item) =>  item}
                  ItemSeparatorComponent={this.renderSeparator}
                  renderItem={({item, index}) => (
                    // <Button 
                    // style ={{padding: 15}}
                    //   onPress={() => this.props.navigation.navigate('Content', {
                    //     otherParam: this.props.type, uri: item})}
                    //   title={(++index).toString()}
                    // />
                    <Text style={styles.sourceText} onPress={() => this.props.navigation.navigate('Content', {
                      otherParam: this.props.type, uri: item})}>
                          [{(++index).toString()}]
                    </Text>
                  )}
                />
            }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: Colors.white
  },
  issueCard: {
    margin:5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: Colors.white,
    ...Mixins.shadow
  },
  issueCardTop: {
    flexDirection:'row',
    alignItems: 'center'
  },
  issueText: {
    fontSize: 16,
    backgroundColor: Colors.white
  },
  issueMatchIcon: {
    padding: 10
  },
  issueExpandButton: {
    position: 'absolute',
    right:10
  },
  sourceText:{
    fontSize: 16,
    color: Colors.lightBlue,
    fontWeight: 'bold'

  },
  issueBody: {
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 20,
    color: 'rgba(0, 0, 0, 0.5438)',
    paddingBottom: 20
  },
});

IssueCard.propTypes = {
  type: PropTypes.string,
  body: PropTypes.string,
  source:PropTypes.array,
  agreesWithUser: PropTypes.bool,
};

const propTypes = {
  navigation: PropTypes.objectOf({
    navigate: PropTypes.func,
    push: PropTypes.func,
  }),
};

export default IssueCard;
