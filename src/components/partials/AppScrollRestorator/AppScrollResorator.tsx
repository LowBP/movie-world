import { FunctionComponent, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AppScrollRestorator: FunctionComponent = () => {
  const { pathname } = useLocation() || { pathname: '' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default AppScrollRestorator;
