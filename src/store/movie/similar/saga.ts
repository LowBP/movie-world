import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchSimilarMoviesStartAction } from 'store/movie/similar/types';
import ApiService from '~/services/apiService';
import { fetchSimilarMoviesFailure, fetchSimilarMoviesSuccess } from 'store/movie/similar/actions';
import Notifications from 'react-notification-system-redux';
import { ISearch } from '~/common/types/search';
import { IMovie } from '~/common/types/movie';

const API = new ApiService();

function* fetchSimilarMoviesSaga(action: IFetchSimilarMoviesStartAction) {
  try {
    const similarMovie: ISearch<IMovie> = yield call(API.getMovieSimilar, action.payload);
    yield put(fetchSimilarMoviesSuccess(similarMovie));
  } catch (error) {
    yield put(fetchSimilarMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Similar movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_SIMILAR_MOVIES_START, fetchSimilarMoviesSaga)]);
}
