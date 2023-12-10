import { Item } from '../../types/types';

export const LOJA_ACTIONS = {
  BUY_ITEM: 'BUY_ITEM',
};

export const buyItem = (item: Item) => ({
  type: LOJA_ACTIONS.BUY_ITEM,
  payload: item,
});
