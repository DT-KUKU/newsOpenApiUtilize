import { render, screen } from '@testing-library/react';
import NewsHeadline from 'pages/NewsHeadline';

test('renders learn react link', () => {
  render(<NewsHeadline />);
  const linkElement = screen.getByText('NewsHeadline');
  expect(linkElement).toBeInTheDocument();
});
