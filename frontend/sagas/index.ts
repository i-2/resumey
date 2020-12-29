import { all, takeEvery } from 'redux-saga/effects';

function* testAction(){

}

export function* rootSaga() {
    yield all([
        takeEvery('TEST_ACTION', testAction),
    ])
}
