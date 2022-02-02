import {
  addItemAction,
  removeItemAction,
  clearItemsAction,
  startAddItemAction,
  startRemoveItemAction,
  updateItemAction,
} from '../cart.actions';
import { actionsTypes } from '../cart.actionTypes';

describe('Cart Actions', () => {
  it('addItemAction', () => {
    const payload = { id: '1' };
    const type = actionsTypes.add;
    expect(addItemAction(payload)).toEqual({ type, payload });
  });

  it('removeItemAction', () => {
    const type = actionsTypes.remove;
    const payload = { id: '1' };
    expect(removeItemAction(payload)).toEqual({ type, payload });
  });

  it('clearItemsAction', () => {
    const type = actionsTypes.clear;
    expect(clearItemsAction()).toEqual({ type });
  });

  it('startAddItemAction', () => {
    const payload = { id: '1' };
    const type = actionsTypes.startAdd;
    expect(startAddItemAction(payload)).toEqual({ type, payload });
  });

  it('startRemoveItemAction', () => {
    const payload = { id: '1' };
    const type = actionsTypes.startRemove;
    expect(startRemoveItemAction(payload)).toEqual({ type, payload });
  });

  it('updateItemAction', () => {
    const payload = { id: '1', quantity: 2 };
    const type = actionsTypes.update;
    expect(updateItemAction(payload)).toEqual({ type, payload });
  });
});
