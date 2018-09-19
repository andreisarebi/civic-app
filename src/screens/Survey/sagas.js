import { call, put, select, takeLatest } from 'redux-saga/effects';
import {selectUserReference, writeResponsesToUserRef} from './lib/api'
import {storeQuestionKey, writeSuccess, writeFailure, SURVEY_NAMESPACE} from './redux/actions/Actions_question'
import * as actionType from './redux/actions/ActionType';
import {AUTH_NAMESPACE} from '../../auth/redux';

const getarrayOfObjects = state => state[SURVEY_NAMESPACE].questionResponses;
const getuser = state => state[AUTH_NAMESPACE].user;

export function* writeToDatabaseSaga() {
  try{
    let arrayOfObjects = yield select(getarrayOfObjects);
    let user = yield select(getuser)
    let refToDatabasePath = yield call(selectUserReference,"users",user.id,"responses");
    yield* arrayOfObjects.map(function* (item,index) {
      yield call(writeResponsesToUserRef,refToDatabasePath,index,item)
    })

    yield put(writeSuccess())
  } catch(error){
    console.log(error)
    yield put(writeFailure(error))
  }

}

function* surveySaga() {
  yield takeLatest(actionType.WRITE_TO_DATABASE, writeToDatabaseSaga);
}

export default surveySaga;
