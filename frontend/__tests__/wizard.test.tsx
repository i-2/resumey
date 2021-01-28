import * as  React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import {Wizard} from '../components/Wizard';

it('renders wizard correctly', () => {
  const mockStore = configureStore([]);
  let store = mockStore({publish: {hasPublished: false, urlLink: null}});
  const tree = renderer
    .create(<Provider store={store}><Wizard tabs={[]} count={0}/></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});