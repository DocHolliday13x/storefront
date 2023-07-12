import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer component', () => {
  test('It should render content as intended', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent('Code Fellows')
  })
})


