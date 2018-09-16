import { combineReducers } from 'redux';
import { UserActionType } from '../user/sagas';

// Selectors
export const MATCH_NAMESPACE = 'match';
const SURVEY_NAMESPACE = 'survey';
const POSITIONS_NAMESPACE = 'userPositions';

export const getSurveyQuestions = (state) => (
  Object.values(state[MATCH_NAMESPACE][SURVEY_NAMESPACE])
);

export const getUserPositions = (state) => (
  state[MATCH_NAMESPACE][POSITIONS_NAMESPACE]
);

export const MatchActionType = {
  SurveyRequest: 'civicApp/match/survey/REQUEST',
  SurveyRequestSuccess: 'civicApp/match/survey/REQUEST_SUCCESS',
  UserPositionUpdate: 'civicApp/match/positions/UPDATE',
};

// Reducers
const surveyReducer = (state = {}, action) => {
  switch (action.type) {
    case MatchActionType.SurveyRequestSuccess:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const positionsReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionType.RequestSuccess:
      return {
        ...state,
        ...action.payload.responses,
      };
    default:
      return state;
  }
};

export default combineReducers({
  [SURVEY_NAMESPACE]: surveyReducer,
  [POSITIONS_NAMESPACE]: positionsReducer,
});
