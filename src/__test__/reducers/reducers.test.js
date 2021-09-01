import ProductMock from '../../__mocks__/ProductMock';

import reducer from '../../reducers';

describe('Reducers', () => {
  test('Retornar initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const payload = ProductMock;
    const initialState = { cart: [] };
    const action = { type: 'ADD_TO_CART', payload };
    const expected = { cart: [payload] };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('REMOVE_FROM_CART', () => {
    const payload = ProductMock;
    const initialState = { cart: [payload] };
    const action = { type: 'REMOVE_FROM_CART', payload };
    const expected = { cart: [] };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
