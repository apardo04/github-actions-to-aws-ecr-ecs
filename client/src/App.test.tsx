import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('app-root is present', () => {
  render(<App />);
  const linkElement = document.getElementById("app-root")
  expect(linkElement).toBeInTheDocument();
});