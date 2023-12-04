import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AppIntro from 'components/ui/AppIntro';
import AppContent from 'components/ui/AppContent';
import AppCarousel from 'components/ui/AppCarousel';
import AppFooter from 'components/partials/AppFooter';
import AppSpin from 'components/ui/AppSpin/AppSpin';
import AppTabs, { ITab } from 'components/ui/AppTabs/AppTabs';
import AppDetails from 'components/ui/AppDetails/AppDetails';
import AppCardList from 'components/ui/AppCardList';

import { clearMovieDetails, fetchMovieDetailsStart } from 'store/movie/details/actions';
import { fetchRecommendedMoviesStart } from 'store/movie/recommended/actions';
import { fetchSimilarMoviesStart } from 'store/movie/similar/actions';
import { getMovieDetails, getMovieDetailsFetchStatus } from 'store/movie/details/selectors';
import { getRecommendedMovies } from 'store/movie/recommended/selectors';
import { getSimilarMovies } from 'store/movie/similar/selectors';
import { parseMovieDetails } from 'components/ui/AppDetails/parseMovieDetails';
import { getMovieCredits, getMovieCreditsFetchStatus } from 'store/movie/credits/selectors';
import { fetchMovieCreditsStart } from 'store/movie/credits/actions';
import { fetchMovieVideosStart } from 'store/movie/videos/actions';
import { getMovieVideos } from 'store/movie/videos/selectors';
import { getMovieImages } from 'store/movie/images/selectors';
import { fetchMovieImagesStart } from 'store/movie/images/actions';
import { IVideo } from 'common/types/videos';
import { IImage } from 'common/types/images';
import { FetchStatus } from 'common/types/fetch-status';

interface IRouteParams {
  id: string;
  [key: string]: string | undefined;
}

const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const params = useParams<IRouteParams>();
  const movie = useSelector(getMovieDetails);
  const detailsFetchStatus = useSelector(getMovieDetailsFetchStatus);
  const credits = useSelector(getMovieCredits);
  const creditFetchStatus = useSelector(getMovieCreditsFetchStatus);
  const videos = useSelector(getMovieVideos);
  const images = useSelector(getMovieImages);
  const recommended = useSelector(getRecommendedMovies);
  const similar = useSelector(getSimilarMovies);

  useEffect(() => {
    dispatch(fetchMovieDetailsStart(Number(params.id)));
    dispatch(fetchMovieCreditsStart(Number(params.id)));
    dispatch(fetchRecommendedMoviesStart(Number(params.id)));
    dispatch(fetchSimilarMoviesStart(Number(params.id)));
    dispatch(fetchMovieVideosStart(Number(params.id)));
    dispatch(fetchMovieImagesStart(Number(params.id)));

    return () => {
      dispatch(clearMovieDetails());
      setTab('movie-overview');
    };
  }, [dispatch, params]);

  useEffect(() => {
    if (!movie) {
      return;
    }

    document.title = `${movie.original_title} – ${new Date(movie.release_date).getUTCFullYear()}`;
  }, [movie]);

  const getAvailableTabs = (): ITab[] => {
    const tabs = [
      {
        id: 'movie-overview',
        title: 'Overview',
        component: renderMovieOverview(),
      },
    ];

    if (videos?.results?.length) {
      tabs.push({
        id: 'movie-videos',
        title: 'Videos',
        component: renderMovieVideos(),
      });
    }

    if (images?.backdrops?.length) {
      tabs.push({
        id: 'movie-photos',
        title: 'Photos',
        component: renderMoviePhotos(),
      });
    }

    return tabs;
  };

  const [currentTab, setTab] = useState('movie-overview');

  const renderMovieOverview = useCallback(() => {
    if (!movie) {
      return null;
    }

    const parsedDetails = parseMovieDetails(movie);
    return (
      <>
        <AppDetails title='Storyline' poster={movie.poster_path} overview={movie.overview} details={parsedDetails} />
        {creditFetchStatus === FetchStatus.PENDING ? <AppSpin minHeight={563} /> : null}
        {credits?.cast?.length ? <AppCarousel title='Cast' cast={credits.cast} /> : null}
      </>
    );
  }, [credits, movie, creditFetchStatus]);

  const renderMovieVideos = useCallback(() => {
    if (!videos) {
      return null;
    }

    const youTubeVideos = videos.results.filter((video: IVideo) => video.site === 'YouTube');

    return (
      <>
        <AppCardList title='Videos' videos={youTubeVideos} />
      </>
    );
  }, [videos]);

  const renderMoviePhotos = useCallback(() => {
    if (!images) {
      return null;
    }

    const sortedBackdrops = images.backdrops.sort((a: IImage, b: IImage) => b.vote_average - a.vote_average);

    return (
      <>
        <AppCardList title='Images' images={sortedBackdrops} />
      </>
    );
  }, [images]);

  return (
    <>
      <AppContent>
        <AppIntro
          overview={movie?.overview}
          backdrop_path={movie?.backdrop_path}
          id={movie?.id}
          original_title={movie?.title}
          release_date={movie?.release_date}
          runtime={movie?.runtime}
          vote_average={movie?.vote_average}
          fetchStatus={detailsFetchStatus}
          isBreadcrumbVisible={true}
        />
        <AppTabs tabs={getAvailableTabs()} currentTab={currentTab} onTabClick={(id) => setTab(id)} />
        {recommended && Boolean(recommended.total_results) && (
          <AppCarousel title='Recommended movies' items={recommended.results} />
        )}
        {similar && Boolean(similar.total_results) && <AppCarousel title='Similar movies' items={similar.results} />}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Movie;
