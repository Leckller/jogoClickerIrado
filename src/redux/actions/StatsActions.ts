import { Item } from '../../types/types';

export const STATS_ACTIONS = {
  UP_CLICK: 'UP_CLICK',
  USER_ACTION: 'USER_ACTION',
};

export const upClick = (item: Item) => ({
  type: STATS_ACTIONS.UP_CLICK,
  payload: item,
});

export const userClick = () => ({
  type: STATS_ACTIONS.USER_ACTION,
});
