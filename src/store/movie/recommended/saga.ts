import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchRecommendedMoviesStartAction } from 'store/movie/recommended/types';
import ApiService from '~/services/apiService';
import { fetchRecommendedMoviesFailure, fetchRecommendedMoviesSuccess } from 'store/movie/recommended/actions';
import Notifications from 'react-notification-system-redux';
import { ISearch } from '~/common/types/search';
import { IMovie } from '~/common/types/movie';

const API = new ApiService();

function* fetchRecommendedMoviesSaga(action: IFetchRecommendedMoviesStartAction) {
  try {
    const recommendedMovie: ISearch<IMovie> = yield call(API.getMovieRecommendations, action.payload);
    yield put(fetchRecommendedMoviesSuccess(recommendedMovie));
  } catch (error) {
    yield put(fetchRecommendedMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Recommended movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

export default function* () {
  yield all([takeLatest(ActionTypes.FETCH_RECOMMENDED_MOVIES_START, fetchRecommendedMoviesSaga)]);
}
