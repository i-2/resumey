import * as  React from 'react';
import * as renderer from 'react-test-renderer';
import { ProfessionalSummary } from '../components/ProfessionalSummary';

it('renders completed correctly', () => {
  const tree = renderer
    .create(<ProfessionalSummary name="" title="" initValues={{}} onNext={() => { }} onPrev={() => { }} submitValues={(v) => { }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});