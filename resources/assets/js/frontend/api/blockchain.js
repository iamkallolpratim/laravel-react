class BlockchainApi {
  static getAllCoins() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100', {credentials: 'same-origin'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCoinDetails(ticker) {
    return fetch(`https://api.coinmarketcap.com/v1/ticker/${ticker}/`, {credentials: 'same-origin'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCoinHistory(symbol) {
    return fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=30`, {credentials: 'same-origin'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getCoinNotices(symbol) {
    return fetch(`https://min-api.cryptocompare.com/data/news/`, {credentials: 'same-origin'}).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default BlockchainApi;
