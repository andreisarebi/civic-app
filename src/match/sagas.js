import { fetchSurveyQuestions } from './api';

export const loadSurveyQuestions = function* () => {
  try {
    const surveyQuestions = yield call(fetchSurveyQuestions);
    yield put()
  }
}
