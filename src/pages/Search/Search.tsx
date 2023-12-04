import React, { FunctionComponent, useCallback, useEffect } from 'react';

import AppContent from 'components/ui/AppContent';
import AppFooter from 'components/partials/AppFooter';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchContent, getSearchPage, getSearchStatus, hasMorePages } from 'store/search/selectors';
import { AppCardInfinityList } from 'components/ui/AppCardList';
import { b } from 'components/ui/AppContent/AppContent';
import { FetchStatus } from 'common/types/fetch-status';
import { setSearchPage, setSearchQuery, toggleSearchBarVisibility } from 'store/search/actions';
import { getCurrentLocation } from 'store/router/selectors';

const Search: FunctionComponent = () => {
  const location = useSelector(getCurrentLocation);
  const searchResult = useSelector(getSearchContent);
  const dispatch = useDispatch();
  const hasMoreElements = useSelector(hasMorePages);
  const currentPage = useSelector(getSearchPage);
  const requestStatus = useSelector(getSearchStatus);

  const loadMoreCards = useCallback(() => {
    if (requestStatus !== FetchStatus.PENDING) {
      const nextPage = currentPage + 1;
      dispatch(setSearchPage(nextPage));
    }
  }, [dispatch, requestStatus, currentPage]);

  useEffect(() => {
    return () => {
      dispatch(toggleSearchBarVisibility(false));
    };
  }, [dispatch]);

  useEffect(() => {
    // @ts-ignore
    if (location?.search) {
      // @ts-ignore
      dispatch(setSearchQuery(location.search));
    }
  }, [dispatch]);

  useEffect(() => {
    // @ts-ignore
    document.title = `Search result for "${location.search}"`;
  }, [location]);

  return (
    <>
      <AppContent className={b({ withPaddings: true })}>
        {searchResult?.results && (
          <AppCardInfinityList
            currentPage={currentPage}
            hasMoreElements={hasMoreElements}
            title='Search Result'
            movies={searchResult.results}
            onLoadHandler={loadMoreCards}
          />
        )}
      </AppContent>
      <AppFooter />
    </>
  );
};

export default Search;
