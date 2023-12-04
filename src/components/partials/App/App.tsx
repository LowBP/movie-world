import React, { FunctionComponent, lazy, Suspense } from 'react';
import { configureStore } from '~/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { cn } from '@bem-react/classname';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import '@/assets/sass/main.sass';

import AppNav from 'components/partials/AppNav';
import AppSearch from 'components/partials/AppSearch';
import ErrorBoundary from 'components/partials/AppErrorBoundary';
import AppInitializer from 'components/partials/AppInitializer';
import AppScrollRestorator from 'components/partials/AppScrollRestorator/AppScrollResorator';

const Home = lazy(() => import('pages/Home'));
const Movie = lazy(() => import('pages/Movie'));
const Error404 = lazy(() => import('pages/Error404'));
const Search = lazy(() => import('pages/Search'));
const PopularMovies = lazy(() => import('pages/PopularMovies'));
const FavoriteMovies = lazy(() => import('pages/Favorite'));
const NowPlayingMovies = lazy(() => import('pages/NowPlayingMovies'));
const UpcomingMovies = lazy(() => import('pages/UpcomingMovies'));
const TopRatedMovies = lazy(() => import('pages/TopRatedMovies'));
const Person = lazy(() => import('pages/Person'));

const b = cn('App');
const w = cn('Wrapper');

const { store, persistor, history } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary className={b()}>
          <AppInitializer />
          <Router history={history}>
            <div className={w()}>
              <AppNav />
              <AppSearch />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route element={<AppScrollRestorator />} />
                  <Route path='/' element={<Home />} />
                  <Route path='/movie/:id' element={<Movie />} />
                  <Route path='/person/:id' element={<Person />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/popular' element={<PopularMovies />} />
                  <Route path='/favorite' element={<FavoriteMovies />} />
                  <Route path='/now-playing' element={<NowPlayingMovies />} />
                  <Route path='/top-rated' element={<TopRatedMovies />} />
                  <Route path='/upcoming' element={<UpcomingMovies />} />
                  <Route path='*' element={<Error404 />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
