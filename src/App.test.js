import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Development/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/Driven/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/test1/i);
  expect(linkElement).toBeInTheDocument();
});