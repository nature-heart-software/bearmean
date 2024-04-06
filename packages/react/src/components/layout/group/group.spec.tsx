import React from 'react';
import { render } from '@testing-library/react';
import { BasicGroup } from './group.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicGroup />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
