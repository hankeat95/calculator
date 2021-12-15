import { render, screen } from '@testing-library/react';
import App from './App';

test('check header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Calculator/);
  expect(linkElement).toBeInTheDocument();
});
