import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Linking} from 'react-native';
import { Icon } from 'react-native-elements'
import Colors from '../../../styles/colors';
import PropTypes from 'prop-types';
import Mixins from '../../../styles/mixins';
import { WebView } from 'react-native-gesture-handler';

class IssueCard extends Component {
  state = {
    isExpanded: false,
    check: false,
  }

  toggleExpand = () => {
    this.setState({isExpanded:!this.state.isExpanded})
  }
  renderView = (val) => {
    this.setState({check:!this.state.check});
    // console.log(val);
  }

  render(){
    const { toggleExpand } = this;
    const { renderView } = this;
    const { isExpanded } = this.state;
    const { check } = this.state;
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
              {source.map((val, idx) => {
                return ( 
                  <TouchableHighlight key={idx} 
                    onPressIn={ renderView }>
                    <Text style={{color:'blue'}}>
                      {++idx}
                    </Text>
                  </TouchableHighlight>
                )
              })}
            </View>
          </View>
          <View
            style={{backgroundColor:Colors.white}}
          >
            {isExpanded &&
                <Text style={styles.issueBody}>
                  {body}  
                </Text>
            }
            {isExpanded && check && source.map((val, idx) => {
              return (
                <View key={idx}>
                  <Text>{idx++}</Text>
                </View>
              );
            })}
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
    flexDirection: 'row'
  },
  issueBody: {
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 20,
    color: 'rgba(0, 0, 0, 0.5438)',
    paddingBottom: 20
  }
});

IssueCard.propTypes = {
  type: PropTypes.string,
  body: PropTypes.string,
  source:PropTypes.array,
  agreesWithUser: PropTypes.bool,
};

export default IssueCard;
