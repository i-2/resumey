import * as  React from 'react';
import * as renderer from 'react-test-renderer';
import Completed from '../components/Completed';

it('renders completed correctly', () => {
  const tree = renderer
    .create(<Completed />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});