import * as  React from 'react';
import * as renderer from 'react-test-renderer';
import {Wizard} from '../components/Wizard';

it('renders wizard correctly', () => {
  const tree = renderer
    .create(<Wizard tabs={[]} count={0}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});