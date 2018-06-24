import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('Home page', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Home />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
