import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Data/i);
  expect(linkElement).toBeInTheDocument();
});
