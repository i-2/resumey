import * as  React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as renderer from 'react-test-renderer';
import Completed from '../components/Completed';

it('renders completed correctly', () => {
  const mockStore = configureStore([]);
  let store = mockStore({publish: {hasPublished: false, urlLink: null}});

  const tree = renderer
    .create(<Provider store={store}>
      <Completed />
    </Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});