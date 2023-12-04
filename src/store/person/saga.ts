import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchPersonDetailsStartAction } from 'store/person/types';
import ApiService from '~/services/apiService';
import { fetchPersonDetailsFailure, fetchPersonDetailsSuccess } from 'store/person/actions';
import Notifications from 'react-notification-system-redux';
import { IPersonDetails } from '~/common/types/person-details';

const API = new ApiService();

function* fetchMovieDetailsSaga(action: IFetchPersonDetailsStartAction) {
  try {
    const personDetails: IPersonDetails = yield call(API.getPersonDetails, action.payload);
    yield put(fetchPersonDetailsSuccess(personDetails));
  } catch (error) {
    yield put(fetchPersonDetailsFailure());
    yield put(
      Notifications.error({
        title: 'Person details',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_PERSON_DETAILS_START, fetchMovieDetailsSaga)]);
}
