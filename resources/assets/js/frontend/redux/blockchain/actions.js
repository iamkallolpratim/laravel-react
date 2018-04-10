import * as types from './types';
import blockchainApi from '../../api/blockchain';

function loadingCoins(){
    return {
        type: types.LOADING_COINS
    }
}

function loadingCoinDetails(){
    return {
        type: types.LOADING_COIN_DETAILS
    }
}

function loadingCoinHistory(){
  return {
    type:types.LOADING_COIN_HISTORY
  }
}

function loadCoinsSuccess(coins) {
    return {
        type: types.LOAD_COINS_SUCCESS,
        coins
    };
}

function loadCoinDetailsSuccess(coinDetails) {
    return {
        type: types.LOAD_COIN_DETAILS_SUCCESS,
        coinDetails
    };
}

function loadCoinHistorySuccess(coinHistory){
  return {
    type:types.LOAD_COIN_HISTORY_SUCCESS,
    coinHistory
  }
}

export function getAllCoins() {
    return function (dispatch) {
        dispatch(loadingCoins());
        return blockchainApi.getAllCoins().then(coins => {
            dispatch(loadCoinsSuccess(coins));
        });
    };
}


export function loadCoinDetails(ticker) {
    return function (dispatch) {
        dispatch(loadingCoinDetails());
        return blockchainApi.getCoinDetails(ticker).then(coinDetails => {
            dispatch(loadCoinDetailsSuccess(coinDetails));
        });
    };
}

export function loadCoinHistory(symbol) {
    return function (dispatch) {
        dispatch(loadingCoinHistory());
        return blockchainApi.getCoinHistory(symbol).then(coinHistory => {
            dispatch(loadCoinHistorySuccess(coinHistory));
        });
    };
}
