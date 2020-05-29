import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Dashboard />);
    const dashboard = getByTestId('Dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});