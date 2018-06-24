import React from 'react';
import renderer from 'react-test-renderer';
import Resume from './Resume';

describe('Resume page', () => {
  it('renders correctly', () => {
    const rendered = renderer.create(<Resume />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
