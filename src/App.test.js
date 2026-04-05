import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio intro', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Hi, my\s+name is Alcy/i })
  ).toBeInTheDocument();
});
