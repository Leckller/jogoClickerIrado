import { AnyAction } from 'redux';
import { STATS_ACTIONS } from '../actions/StatsActions';
import { Item } from '../../types/types';

const { UP_CLICK, USER_ACTION } = STATS_ACTIONS;

const INITIAL_STATE = {
  stats: {
    click: 1,
  },
};

const StatsReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case USER_ACTION: { return; }
    case UP_CLICK: {
      const item: Item = action.payload;
      return { ...state,
        stats: {
          ...state.stats, click: state.stats.click + item.efeito } };
    }
    default: { return { ...state }; }
  }
};

export default StatsReducer;
