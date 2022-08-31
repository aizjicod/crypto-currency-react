import { render } from '@testing-library/react';
import React from 'react';
import DetailInformation from '../detailinformation';

test('tesing snapshot for DetailInformation component', () => {
  const component = render(
    <DetailInformation
      img="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
      name="bitcoin"
      totalSupply={200}
      circulatingSupply={20}
      priceChange1yr={-50}
      lastTickers={5}
    />,
  );
  expect(component).toMatchSnapshot();
});

test('tesing second snapshot for DetailInformation component', () => {
  const component = render(
    <DetailInformation
      img="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579"
      name="bitcoin"
      totalSupply={1111111000000}
      circulatingSupply={135464685}
      priceChange1yr={+1354200687651}
      lastTickers={3857351203571}
    />,
  );
  expect(component).toMatchSnapshot();
});
