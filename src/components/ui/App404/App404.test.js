import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App404 from './App404';

// Mock canvas
HTMLCanvasElement.prototype.getContext = () => {
  // return whatever getContext has to return
};

describe('App404', () => {
  afterEach(cleanup);

  it('renders the 404 component', () => {
    const { getByText } = render(<App404 />);
    expect(getByText('404 Not Found')).toBeInTheDocument();
  });
});
