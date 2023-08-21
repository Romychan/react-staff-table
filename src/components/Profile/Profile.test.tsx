import { RenderResult, render, screen } from '@testing-library/react';

import { Profile } from './Profile';

describe('Profile', () => {
  let container: RenderResult;

  beforeEach(() => {
    container = render(
      <Profile
        name="Test Name"
        username="Test Username"
        imageSrc="./test.png"
      />,
    );
  });

  it('should render correctly', () => {
    const profileElement = screen.getByText(/Test Username/i);
    const imageElement = screen.getByAltText(/Test Name/i);

    expect(profileElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', './test.png');
  });

  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
});
