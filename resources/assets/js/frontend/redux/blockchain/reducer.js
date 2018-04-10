import * as types from './types';

const initialState = {
  loading: false,
  coins: [],
  coinDetails: {},
  coinHistory:{},
};

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOADING_COINS:
      return {
        ...state,
        loading: true
      }
    case types.LOAD_COINS_SUCCESS:
      return {
        ...state,
        coins: action.coins,
        loading: false
      }

    case types.LOADING_COIN_DETAILS:
      return {
        ...state,
        loading: true
      }
    case types.LOAD_COIN_DETAILS_SUCCESS:
      return {
        ...state,
        coinDetails: action.coinDetails,
        loading: false
      }

      case types.LOADING_COIN_HISTORY:
        return {
          ...state,
          loading: true
        }
      case types.LOAD_COIN_HISTORY_SUCCESS:
        return {
          ...state,
          coinHistory: action.coinHistory,
          loading: false
        }
    default:
      return state;
  }
}
