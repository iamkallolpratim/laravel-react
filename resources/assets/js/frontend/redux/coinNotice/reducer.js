import * as types from './types';

const initialState = {
  loading: false,
  coinNotices: {}
};

export default function coinNoticeReducer(state = initialState, action) {
  switch (action.type) {

    case types.LOADING_COIN_NOTICES:
      return {
        ...state,
        loading: true
      }
    case types.LOAD_COIN_NOTICE_SUCCESS:
      return {
        ...state,
        coinNotices: action.coinNotices,
        loading: false
      }
    default:
      return state;
  }
}
