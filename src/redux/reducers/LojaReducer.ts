import { AnyAction } from 'redux';
import { LOJA_ACTIONS } from '../actions/LojaActions';

const { BUY_ITEM } = LOJA_ACTIONS;

const INITIAL_STATE = {
  mochila: [],
};

const LojaReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case BUY_ITEM: {
      const item = action.payload;
      return { ...state, mochila: [...state.mochila, item] }; }
    default: { return { ...state }; }
  }
};

export default LojaReducer;
