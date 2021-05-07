import React from 'react';
import fetchMock from 'jest-fetch-mock';
import i18next from 'i18next';
import { render } from './settings/test-utils';
import App from '../src/App';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify('mock data'));
    fetchMock.mockRejectOnce(JSON.stringify('mock error'));
    wrapper = render(<App />);
  });
  test('should render App component', () => {
    const { asFragment } = wrapper;
    expect(asFragment(<App />)).toMatchSnapshot();
  });

  test('App component should contain About and Home pages', () => {
    const { getAllByText } = wrapper;
    const Home = getAllByText(i18next.t('home'));
    const AboutHome = getAllByText(i18next.t('about'));

    expect(Home[0]).toBeInTheDocument();
    expect(AboutHome[0]).toBeInTheDocument();
  });
});
