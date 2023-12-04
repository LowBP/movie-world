import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, IFetchTopRatedMoviesStartAction, ISetTopRatedSearchPage } from 'store/movie/top-rated/types';
import ApiService from '~/services/apiService';
import { fetchTopRatedMoviesFailure, fetchTopRatedMoviesSuccess } from 'store/movie/top-rated/actions';
import Notifications from 'react-notification-system-redux';
import { IMovie } from '~/common/types/movie';
import { ISearch } from '~/common/types/search';

const API = new ApiService();

function* saveTopRatedMovies(page = 1, shouldConcat = false) {
  try {
    const topRatedMovies: ISearch<IMovie> = yield call(API.getTopRatedMovies, page);
    yield put(
      fetchTopRatedMoviesSuccess({
        movies: topRatedMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchTopRatedMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Top rated movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

function* fetchTopRatedMoviesSaga(action: IFetchTopRatedMoviesStartAction) {
  yield saveTopRatedMovies(1, false);
}

function* fetchTopRatedMoviesWithPageSaga(action: ISetTopRatedSearchPage) {
  const page = action.payload;

  yield saveTopRatedMovies(page, true);
}

export default function* () {
  yield all([
    debounce(150, ActionTypes.SET_TOP_RATED_SEARCH_PAGE, fetchTopRatedMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_TOP_RATED_MOVIES_START, fetchTopRatedMoviesSaga),
  ]);
}
