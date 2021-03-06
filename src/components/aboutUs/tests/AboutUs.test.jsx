import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs component', () => {
  afterEach(() => cleanup());
  it('renders AboutUs', () => {
    const { asFragment } = render(<AboutUs />);
    expect(asFragment()).toMatchSnapshot();
  });
});
