import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/createSttore';
import HomeList from '../homeList';

test('testing homeList component', () => {
  const component = render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <HomeList
            name="etherium"
            img="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
            id="bitcoin"
            value={150}
            text="market"
          />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});

test('testing second homeList component', () => {
  const component = render(
    <React.StrictMode>

      <Provider store={store}>
        <BrowserRouter>
          <HomeList
            name="cordana"
            img="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
            id="cord"
            value={11357320}
            text="price"
          />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
  expect(component).toMatchSnapshot();
});
