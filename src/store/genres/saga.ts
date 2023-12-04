import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieGenresStartAction, IGenresState } from 'store/genres/types';
import ApiService from '~/services/apiService';
import { fetchMovieGenresFailure, fetchMovieGenresSuccess } from 'store/genres/actions';

const API = new ApiService();

function* fetchMovieGenresSaga(action: IFetchMovieGenresStartAction) {
  try {
    const genres: IGenresState = yield call(API.getGenres);
    yield put(fetchMovieGenresSuccess(genres));
  } catch (error) {
    yield put(fetchMovieGenresFailure());
  }
}

export default function* () {
  yield all([takeEvery(ActionTypes.FETCH_MOVIE_GENRES_START, fetchMovieGenresSaga)]);
}
