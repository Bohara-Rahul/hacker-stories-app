import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const headerTitle = screen.getByText('My Hacker Stories');
  expect(headerTitle).toBe('My Hacker Stories');
});
