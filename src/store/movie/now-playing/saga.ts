import { all, call, debounce, put, takeLatest } from 'redux-saga/effects';
import {
  ActionTypes,
  IFetchNowPlayingMoviesStartAction,
  ISetNowPlayingSearchPage,
} from 'store/movie/now-playing/types';
import ApiService from '~/services/apiService';
import { fetchNowPlayingMoviesFailure, fetchNowPlayingMoviesSuccess } from 'store/movie/now-playing/actions';
import Notifications from 'react-notification-system-redux';
import { ISearch } from '~/common/types/search';
import { IMovie } from '~/common/types/movie';

const API = new ApiService();

function* saveNowPlayingMovies(page = 1, shouldConcat = false) {
  try {
    const nowPlayingMovies: ISearch<IMovie> = yield call(API.getNowPlayingMovies, page);
    yield put(
      fetchNowPlayingMoviesSuccess({
        movies: nowPlayingMovies,
        shouldConcat,
      })
    );
  } catch (error) {
    yield put(fetchNowPlayingMoviesFailure());
    yield put(
      Notifications.error({
        title: 'Now playing movies',
        message: 'Error during request, please reload page',
        autoDismiss: 3,
      })
    );
  }
}

function* fetchNowPlayingMoviesSaga(action: IFetchNowPlayingMoviesStartAction) {
  yield saveNowPlayingMovies(1, false);
}

function* fetchNowPlayingMoviesWithPageSaga(action: ISetNowPlayingSearchPage) {
  const page = action.payload;

  yield saveNowPlayingMovies(page, true);
}

export default function* () {
  yield all([
    debounce(150, ActionTypes.SET_NOW_PLAYING_SEARCH_PAGE, fetchNowPlayingMoviesWithPageSaga),
    takeLatest(ActionTypes.FETCH_NOW_PLAYING_MOVIES_START, fetchNowPlayingMoviesSaga),
  ]);
}
