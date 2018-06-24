import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App page', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<App />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
