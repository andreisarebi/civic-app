import {connect} from 'react-redux';
import SurveyMainScreen from '../../SurveyMainScreen';
import {SURVEY_NAMESPACE} from '../actions/Actions_question';

function mapStateToProps(state){
  return {
    questionResponses : state[SURVEY_NAMESPACE].questionResponses,
    index : state[SURVEY_NAMESPACE].index,
    totalNumQuestions: state[SURVEY_NAMESPACE].totalNumQuestions
  }
}

export default connect(mapStateToProps)(SurveyMainScreen);
