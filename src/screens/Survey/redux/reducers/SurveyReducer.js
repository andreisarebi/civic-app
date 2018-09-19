import * as actionType from '../actions/ActionType';

const initialState = {
  index: 1,
  maxIndex: 1,
  totalNumQuestions: null,
  questionResponses : [],
  questionKeys: [],
  databaseArgs: {
    writeStatus: null,
    errorType: null
  }
}

const SurveyReducer = (state = initialState, action) => {
    let newState;
    let newIndex;
    switch(action.type){
      case actionType.LOAD_QUESTION_RESPONSE: {
        let currentResponse = {questionId: action.questionId, response: action.response}
        return newState = {
          ...state,
          questionResponses: [
            ...state.questionResponses.slice(0,state.index-1),
            currentResponse,
            ...state.questionResponses.slice(state.index,state.maxIndex+1)
          ]
        }
      }
      case actionType.INCREASE_INDEX: {
        if( state.index < state.totalNumQuestions){
          newIndex = state.index + 1
        } else if(state.index === state.totalNumQuestions){
          newIndex = state.index
        }
        return newState = {
          ...state,
          index : newIndex
        }
      }
      case actionType.DECREASE_INDEX: {
        if(state.index > 1) {
          newIndex = state.index - 1
        } else {
          newIndex = state.index
        }
        return newState = {
          ...state,
          index: newIndex
        }
      }
      case actionType.UPDATE_TOTAL_QUESTIONS: {
        return newState = {
          ...state,
          totalNumQuestions: action.payload
        }
      }
      case actionType.SET_MAX_INDEX: {
        if(state.index > state.maxIndex){
          return newState = {
            ...state,
            maxIndex : state.index + 1
          }
        }
      }
      case actionType.ADD_KEY_TO_SET: {
        return newState = {
          ...state,
          questionKeys: [
            ...state.questionKeys,
            action.key
          ]
        }
      }
      case actionType.WRITE_SUCCESS: {
        return newState = {
          ...state,
          databaseArgs:{
            ...state.databaseArgs,
            writeStatus: 'sucess',
            errorType: {}
          }
        }
      }
      case actionType.WRITE_FAILURE: {
        return newState = {
          ...state,
          databaseArgs: {
            ...state.databaseArgs,
            writeStatus: 'failure',
            errorType: action.error
          }
        }
      }
      default:
        return state
    }
}

export default SurveyReducer;
