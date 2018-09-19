import * as actionType from './ActionType';
export const SURVEY_NAMESPACE = 'Survey'

// Survey Questions Actions
export const loadQuestionResponse = (questionnum,response) => ({
  type: actionType.LOAD_QUESTION_RESPONSE,
  questionnum : questionnum,
  response: response
});

export const increaseIndex = () => ({
  type: actionType.INCREASE_INDEX
})

export const decreaseIndex = () => ({
  type: actionType.DECREASE_INDEX
})

export const setMaxIndex = () => ({
  type: actionType.SET_MAX_INDEX
})

export const updateTotalQuestions = (newNumQuestions) => ({
  type: actionType.UPDATE_TOTAL_QUESTIONS,
  payload: newNumQuestions
})

// Send to Database actions

export const writeResponsesToDatabase = () => ({
  type: actionType.WRITE_TO_DATABASE
})

export const writeSuccess = () => ({
  type: actionType.WRITE_SUCCESS
})

export const writeFailure = (errorMessage) => ({
  type: actionType.WRITE_SUCCESS,
  error: errorMessage
})

export const storeQuestionKey = (questionKey) => ({
  type: actionType.STORE_QUESTION_KEY,
  key: questionKey
})
