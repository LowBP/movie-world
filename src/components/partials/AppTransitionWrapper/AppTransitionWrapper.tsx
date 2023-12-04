import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import * as H from 'history';

interface IProps {
  location: H.Location;
  children?: string | ReactNode;
}

const b = cn('Layout');
const history = H.createBrowserHistory();
const AppTransitionWrapper: FunctionComponent<IProps> = ({ children }) => {
  const onEnterHandler = (): void => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <TransitionGroup className={b()}>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 400 }}
        classNames={'fade'}
        onEnter={onEnterHandler}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppTransitionWrapper;
