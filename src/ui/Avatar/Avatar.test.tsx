import { render, screen, RenderResult } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(<Avatar src="./test.png" alt="test" className="test" />);
  });

  it('should render correctly', () => {
    const imageElement = screen.getByAltText('test');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', './test.png');
    expect(imageElement.getAttribute('class')).toMatch(/test/gi);
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
