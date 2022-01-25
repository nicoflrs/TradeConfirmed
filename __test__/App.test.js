import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    expect(screen.getByText('welcome to options tracker.')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});


