import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieCreditsStartAction } from 'store/movie/credits/types';
import ApiService from '~/services/apiService';
import { fetchMovieCreditsFailure, fetchMovieCreditsSuccess } from 'store/movie/credits/actions';
import Notifications from 'react-notification-system-redux';
import { IMovieCredits } from '~/common/types/movie-credits';

const API = new ApiService();

function* fetchMovieDetailsSaga(action: IFetchMovieCreditsStartAction) {
  try {
    const movieCredits: IMovieCredits = yield call(API.getMovieCredits, action.payload);
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMovieCreditsFailure());
    yield put(
      Notifications.error({
        title: 'Movie credits',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_CREDITS_START, fetchMovieDetailsSaga)]);
}
