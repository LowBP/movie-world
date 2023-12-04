import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieVideosStartAction } from 'store/movie/videos/types';
import ApiService from '~/services/apiService';
import { fetchMovieVideosFailure, fetchMovieVideosSuccess } from 'store/movie/videos/actions';
import Notifications from 'react-notification-system-redux';
import { IVideos } from '~/common/types/videos';

const API = new ApiService();

function* fetchMovieVideosSaga(action: IFetchMovieVideosStartAction) {
  try {
    const movieVideos: IVideos = yield call(API.getMovieVideos, action.payload);
    yield put(fetchMovieVideosSuccess(movieVideos));
  } catch (error) {
    yield put(fetchMovieVideosFailure());
    yield put(
      Notifications.error({
        title: 'Movie videos',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_VIDEOS_START, fetchMovieVideosSaga)]);
}
