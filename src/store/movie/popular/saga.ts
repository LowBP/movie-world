import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchPopularMoviesStartAction, ISetPopularSearchPage } from 'store/movie/popular/types';
import ApiService from '~/services/apiService';
import { fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from 'store/movie/popular/actions';
import Notifications from 'react-notification-system-redux';
import { ISearch } from '~/common/types/search';
import { IMovie } from '~/common/types/movie';

const API = new ApiService();

function* savePopularMovies(page = 1, shouldConcat = false) {
  try {
    const popularMovies: ISearch<IMovie> = yield call(API.getPopularMovies, page);
    yield put(
      fetchPopularMoviesSuccess({
        movies: popularMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(fetchPopularMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Popular movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

function* fetchPopularMoviesSaga(action: IFetchPopularMoviesStartAction) {
  yield savePopularMovies(1, false);
}

function* fetchPopularMoviesWithPageSaga(action: ISetPopularSearchPage) {
  const page = action.payload;

  yield savePopularMovies(page, true);
}

export default function* () {
  yield all([
    debounce(150, ActionTypes.SET_POPULAR_SEARCH_PAGE, fetchPopularMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_POPULAR_MOVIES_START, fetchPopularMoviesSaga),
  ]);
}
