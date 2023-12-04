import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AppButton from './AppButton';

describe('AppButton', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<AppButton className='test-button'>Test Button</AppButton>);
    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('renders the button with the correct class', () => {
    const { container } = render(<AppButton className='test-button'>Test Button</AppButton>);
    expect(container.firstChild).toHaveClass('test-button');
  });
});
