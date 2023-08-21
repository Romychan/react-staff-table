import { render, screen } from '@testing-library/react';

import { Badge } from './Badge';

describe('Badge', () => {
  it('should render correctly', () => {
    render(<Badge>Default</Badge>);
    const badgeElement = screen.getByText(/Default/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.getAttribute('class')).toMatch(/default/gi);
  });

  it('should render correctly with green color scheme', () => {
    render(<Badge colorScheme="green">Success</Badge>);
    const badgeElement = screen.getByText(/Success/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.getAttribute('class')).toMatch(/green/gi);
  });

  it('should render correctly with red color scheme', () => {
    render(<Badge colorScheme="red">Error</Badge>);
    const badgeElement = screen.getByText(/Error/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.getAttribute('class')).toMatch(/red/gi);
  });

  it('should render correctly with yellow color scheme', () => {
    render(<Badge colorScheme="yellow">Warning</Badge>);
    const badgeElement = screen.getByText(/Warning/i);

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement.getAttribute('class')).toMatch(/yellow/gi);
  });

  it('should match snapshot', () => {
    const container = render(<Badge>Default</Badge>);
    expect(container).toMatchSnapshot();
  });
});
