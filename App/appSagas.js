import { all } from 'redux-saga/effects';
import authSaga from '../src/auth/sagas';
import surveySaga from '../src/screens/Survey/sagas'
import electionsScreenSaga from '../src/screens/Elections/sagas';

function* appSaga() {
  yield all([authSaga(), electionsScreenSaga(),surveySaga()]);
}

export default appSaga;
