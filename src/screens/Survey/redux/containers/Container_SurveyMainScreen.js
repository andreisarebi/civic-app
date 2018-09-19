import {connect} from 'react-redux';
import SurveyMainScreen from '../../SurveyMainScreen';
import {addKeyToSet,SURVEY_NAMESPACE} from '../actions/Actions_question';
import {loadSurvey} from '../../../../match/redux';
import {getSurveyQuestions} from '../../../../match/redux';

function mapStateToProps(state){
  return {
    questionResponses : state[SURVEY_NAMESPACE].questionResponses,
    index : state[SURVEY_NAMESPACE].index,
    totalNumQuestions: state[SURVEY_NAMESPACE].totalNumQuestions,
    surveyQuestions: getSurveyQuestions(state)
  }
}

const mapDispatchToProps = dispatch => ({
  addKeyToSet: (key) => dispatch(addKeyToSet(key)),
  loadSurvey: () => dispatch(loadSurvey()),
})

export default connect(mapStateToProps,mapDispatchToProps)(SurveyMainScreen);
