import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchMovieImagesStartAction } from 'store/movie/images/types';
import ApiService from '~/services/apiService';
import { fetchMovieImagesFailure, fetchMovieImagesSuccess } from 'store/movie/images/actions';
import Notifications from 'react-notification-system-redux';
import { IImages } from '~/common/types/images';

const API = new ApiService();

function* fetchMovieImagesSaga(action: IFetchMovieImagesStartAction) {
  try {
    const movieImages: IImages = yield call(API.getMovieImages, action.payload);
    yield put(fetchMovieImagesSuccess(movieImages));
  } catch (error) {
    yield put(
      Notifications.error({
        title: 'Movie images',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
    yield put(fetchMovieImagesFailure());
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_MOVIE_IMAGES_START, fetchMovieImagesSaga)]);
}
