import { call, put, select, takeLatest } from 'redux-saga/effects';
import {connectToDatabase,update, disconnectDatabase,checkDatabaseConnection,checkThisPath, selectReference, writeItemToDatabase} from './lib/api'
import {storeQuestionKey, writeSuccess, writeFailure, SURVEY_NAMESPACE} from './redux/actions/Actions_question'
import * as actionType from './redux/actions/ActionType';

const getpath = state => state[SURVEY_NAMESPACE].databaseArgs.path;
const getarrayOfObjects = state => state[SURVEY_NAMESPACE].questionResponses;

export function* writeToDatabaseSaga() {
    let path = yield select(getpath);
    console.log(path)
    let arrayOfObjects = yield select(getarrayOfObjects);
    let dataBaseStatus = yield call(checkDatabaseConnection);
    if(dataBaseStatus === false){
      // Turn on the connection to the database
      yield call(connectToDatabase)
    }
    let refToDatabasePath = yield call(selectReference,path);
    console.log('refToDatabasePath: ' + refToDatabasePath)
    //console.log('arrayOfObjects: ' + arrayOfObjects)
    console.log('arrayOfObjects 1: ' + arrayOfObjects[0].questionResponse)
    let arrayid = ["afasdfsad","3243245325","234erewre","234rfwefw","dfsj89svxc56","2j3rnesfd","h2398rhfndba","32rjeufuiofwef","sdfnuw3298fds"]
    let update = {};
    //yield call(writeItemToDatabase,refToDatabasePath,arrayOfObjects)
    // console.log(action)
    // if(refToDatabasePath !== null){
    yield* arrayOfObjects.map(function* (item,index) {
      let actions = yield call(writeItemToDatabase,refToDatabasePath,arrayid[index],item,update)
    })

    // }

}

function* surveySaga() {
  yield takeLatest(actionType.WRITE_TO_DATABASE, writeToDatabaseSaga);
}

export default surveySaga;
