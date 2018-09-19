import React from 'react';
import { Text, View, Button,StyleSheet,TouchableHighlight,TouchableOpacity, Image, BackHandler} from 'react-native';
import PropTypes from 'prop-types';

class checkbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      responseList : ["stronglyDisagree","disagree","noOpinion","agree","stronglyAgree"],
      responseOption : {
        stronglyDisagree : false,
        disagree: false,
        noOpinion: false,
        agree: false,
        stronglyAgree: false
      },
        previousResponse: null
      }
      this.toggleSelection = this.toggleSelection.bind(this)
      this.startNewResponse = this.startNewResponse.bind(this)
  }


  componentDidMount(){
    // Checks if the Question Response exists and then toggles to that response
    let arrayIndex = this.props.index-1;
    if(this.props.questionResponses[arrayIndex] != null){
      this.toggleSelection(this.state.responseList[this.props.questionResponses[arrayIndex].questionResponse])
    }
  }

  toggleSelection(currentResponse){
    // A different way to set State might make this faster
    var responseOption = {...this.state.responseOption}
    if(this.state.previousResponse === null){
      responseOption[currentResponse] = true;
    } else {
      responseOption[this.state.previousResponse] = false;
      responseOption[currentResponse] = true;
    }
    this.setState({responseOption});
    this.setState({previousResponse: currentResponse});
  }

  startNewResponse(currentSelection, response){
    this.toggleSelection(currentSelection);
    this.props.changeUserResponseField("questionResponse", response , this.props.nextScreen);
  }

  render(){
    return(
      <View style= {styles.option_box}>
        <View style={styles.line}></View>
         <View style={styles.circles_bar}>
            <TouchableHighlight style= {styles.outer_circle} underlayColor="white" onPress = {() => this.startNewResponse('stronglyDisagree', 0)}>
              <View>{this.state.responseOption['stronglyDisagree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} underlayColor="white" onPress = {() => this.startNewResponse('disagree', 1)}>
              <View>{this.state.responseOption['disagree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} underlayColor="white" onPress = {() => this.startNewResponse('noOpinion', 2)}>
              <View>{this.state.responseOption['noOpinion'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} underlayColor="white" onPress = {() => this.startNewResponse('agree', 3)}>
              <View>{this.state.responseOption['agree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
            <TouchableHighlight style= {styles.outer_circle} underlayColor="white" onPress = {() =>  this.startNewResponse('stronglyAgree',4)}>
              <View>{this.state.responseOption['stronglyAgree'] && <View style={styles.inner_circle}></View> }
              </View>
            </TouchableHighlight>
          </View>
        </View>
    )
  }
}

checkbox.propTypes = {
  optionalFunc: PropTypes.func,
  optionalObject: PropTypes.shape({
    questionId: PropTypes.string,
    response: PropTypes.number
  }),
  optionalNumber: PropTypes.number,
  optionalFunc: PropTypes.func
}

const styles = StyleSheet.create({
  option_box:{
    width: 262,
    height:30 ,
    marginTop: 57
  },
  line:{
    width: 262,
    position: 'absolute',
    borderBottomColor: '#2D9CDB',
    borderBottomWidth: 2
  },
  circles_bar :{
    width: 262,
    position: 'absolute',
    top:-14,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  outer_circle: {
    width: 30,
    height: 30,
    borderRadius: 150/2,
    borderWidth: 2,
    borderColor: '#0A4362',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_circle: {
    width: 20,
    height: 20,
    borderRadius: 150/2,
    backgroundColor: '#2D9CDB'
  }
})

export default checkbox;
