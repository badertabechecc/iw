import { put, select } from 'redux-saga/effects';
import { addItemAction, updateItemAction } from '../cart.actions';
import { actionsTypes } from '../cart.actionTypes';
import { addToCartSaga } from '../cart.sagas';
import { getCartItems } from '../cart.selectors';

const voidFinalStepTest = (finalStep) => {
  expect(finalStep.value).toEqual(undefined);
  expect(finalStep.done).toEqual(true);
};

describe('cartSagas', () => {
  it('should add item to cart', () => {
    const action = { type: actionsTypes.startAdd, payload: { id: '123' } };
    const gen = addToCartSaga(action);

    const step1 = gen.next();
    expect(step1.value).toEqual(select(getCartItems));

    const cartItems = {};
    const step2 = gen.next(cartItems);
    expect(step2.value).toEqual(put(addItemAction({ id: action.payload.id })));

    voidFinalStepTest(gen.next());
  });

  it('should update item to cart', () => {
    const action = { type: actionsTypes.startAdd, payload: { id: '123' } };
    const gen = addToCartSaga(action);

    const step1 = gen.next();
    expect(step1.value).toEqual(select(getCartItems));

    const itemId = action.payload.id;
    const cartItems = {
      [itemId]: {
        id: itemId,
        quantity: 1,
      },
    };
    const itemQuantity = cartItems[itemId].quantity;
    const step2 = gen.next(cartItems);
    expect(step2.value).toEqual(
      put(updateItemAction({ id: itemId, quantity: itemQuantity + 1 }))
    );

    voidFinalStepTest(gen.next());
  });
});
