import {connect} from 'react-redux';
import Question from '../../Question';
import {writeResponsesToDatabase,loadQuestionResponse,updateTotalQuestions,increaseIndex,decreaseIndex,setMaxIndex, SURVEY_NAMESPACE} from '../actions/Actions_question';
import {getSurveyQuestions} from '../../../../match/redux'

function mapStateToProps(state){
  return {
    questionResponses : state[SURVEY_NAMESPACE].questionResponses,
    index : state[SURVEY_NAMESPACE].index,
    totalNumQuestions: state[SURVEY_NAMESPACE].totalNumQuestions,
    databaseArgs: state[SURVEY_NAMESPACE].databaseArgs,
    surveyQuestions: getSurveyQuestions(state)
  }
}


const mapDispatchToProps = dispatch => ({
  loadQuestionResponse: (questionnum,response) => dispatch(loadQuestionResponse(questionnum,response)),
  increaseIndex: () => dispatch(increaseIndex()),
  decreaseIndex: () => dispatch(decreaseIndex()),
  setMaxIndex: () => dispatch(setMaxIndex()),
  updateTotalQuestions: (newNumQuestions) => dispatch(updateTotalQuestions(newNumQuestions)),
  writeResponsesToDatabase: () => dispatch(writeResponsesToDatabase()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Question);
