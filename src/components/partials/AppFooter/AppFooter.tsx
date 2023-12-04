import React, { FunctionComponent } from 'react';
import { cn } from '@bem-react/classname';

import AppSocials from 'components/ui/AppSocials';

import './AppFooter.sass';

const b = cn('PageFooter');

const AppFooter: FunctionComponent = () => {
  return (
    <footer className={b()}>
      <p className={b('Text')}>© 2023 Pranav Venkitesan</p>
      <p className={b('Text')}>
        Built on React/Redux/Saga and Ts.
        <br />
        API provided by TMDb.
      </p>
    </footer>
  );
};

export default AppFooter;
