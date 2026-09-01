// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockCorePro title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockCorePro/i);
    expect(titleElement).toBeInTheDocument();
});
