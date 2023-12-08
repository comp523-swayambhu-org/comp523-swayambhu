import { render, screen } from '@testing-library/react';
import App from '../App';

// npm run test
test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Swayambhu Stories/i);

  expect(linkElement).toBeInTheDocument();
});
