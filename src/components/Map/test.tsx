import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    // screen.logTestingPlaygroundURL();

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Porto Alegre, RS',
      slug: 'poa',
      location: {
        latitude: -30.1084987,
        longitude: -51.3172258,
      },
    };

    const placeTwo = {
      id: '2',
      name: 'Florianópolis, SC',
      slug: 'floripa',
      location: {
        latitude: -27.5707056,
        longitude: -48.7504644,
      },
    };

    render(<Map places={[place, placeTwo]} />);

    // screen.logTestingPlaygroundURL();

    expect(screen.getByTitle(/porto alegre, rs/i)).toBeInTheDocument();
    expect(screen.getByTitle(/florianópolis, sc/i)).toBeInTheDocument();
  });
});
