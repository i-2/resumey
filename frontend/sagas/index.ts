import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { createNewResume, cleanStartEnd, TimeBounded } from '../utils';


function* sendPublish() {
    const state = yield select();
    const idParams = yield call(createNewResume, {
        personal: state.personalDetail,
        summary: state.profSummary,
        skills: state.skill,
        social: state.social,
        education: state.education.map((x: TimeBounded) => cleanStartEnd(x)),
        employment: state.employment.map((x: TimeBounded) => cleanStartEnd(x))
    });
    const urlLink = `https://${window.location.origin}/r/${idParams.id}`;
    yield put({
        type: 'PUBLISH', payload: {
            url: urlLink
        }
    })
}

export function* rootSaga() {
    yield all([
        takeLatest('TRY_PUBLISH', sendPublish),
    ])
}
