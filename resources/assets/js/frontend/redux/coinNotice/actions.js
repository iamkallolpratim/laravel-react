import * as types from './types';
import blockchainApi from '../../api/blockchain';


function loadingCoinNotices(){
  return {
    type:types.LOADING_COIN_NOTICES
  }
}


function loadCoinNoticeSuccess(coinNotices){
  return {
    type:types.LOAD_COIN_NOTICE_SUCCESS,
    coinNotices
  }
}

export function loadCoinNotices(symbol) {
    return function (dispatch) {
        dispatch(loadingCoinNotices());
        return blockchainApi.getCoinNotices(symbol).then(coinNotices => {
            dispatch(loadCoinNoticeSuccess(coinNotices));
        });
    };
}
