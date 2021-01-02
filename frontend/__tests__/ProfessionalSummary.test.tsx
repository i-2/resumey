import * as  React from 'react';
import * as renderer from 'react-test-renderer';
import {ProfessionalSummary } from '../components/ProfessionalSummary';

it('renders completed correctly', () => {
  const tree = renderer
    .create(<ProfessionalSummary />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});