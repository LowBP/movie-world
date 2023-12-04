import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchLatestMovieStartAction } from 'store/movie/latest/types';
import ApiService from '~/services/apiService';
import { fetchLatestMovieFailure, fetchLatestMovieSuccess } from 'store/movie/latest/actions';
import Notifications from 'react-notification-system-redux';
import { IMovie } from '~/common/types/movie';

const API = new ApiService();

function* fetchLatestMovieSaga(action: IFetchLatestMovieStartAction) {
  try {
    const latestMovie: IMovie = yield call(API.getLatestMovie);
    yield put(fetchLatestMovieSuccess(latestMovie));
  } catch (error) {
    yield put(fetchLatestMovieFailure());
    yield put(
      Notifications.error({
        title: 'Latest movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_LATEST_MOVIE_START, fetchLatestMovieSaga)]);
}
