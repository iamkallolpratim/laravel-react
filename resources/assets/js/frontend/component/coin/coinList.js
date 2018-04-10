import React, {Component} from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import {images} from '../../utils/icons'

export default class SuperHeroList extends Component {

  constructor(props) {
    super(props);
    this.singleCoin = this.singleCoin.bind(this);
  }

  singleCoin(coin) {
    const {match} = this.props;
    return (<tr key={coin.id}>
      <td><img src={images[coin.symbol]} alt={coin.name} className="icon"/></td>
      <td>
        <Link to={`${match.path}coins/${coin.id}&symbol=${coin.symbol}`}>{coin.name}</Link>
      </td>
      <td>{coin.symbol}</td>
      <td>$ {Math.round(coin.price_usd * 100) / 100}</td>
      <td>$ {Math.round(coin.market_cap_usd * 100) / 100}</td>
      <td>
        {
          coin.percent_change_7d > 0
            ? <span>
                + {coin.percent_change_7d}
                %
                <Icon style={{
                    float: "right",
                    fontSize: 20,
                    color: '#4CAF50'
                  }} type="smile"/></span>

            : <span>{coin.percent_change_7d}
                %
                <Icon style={{
                    float: "right",
                    fontSize: 20,
                    color: '#f44336'
                  }} type="frown"/></span>
        }
      </td>

    </tr>);
  }

  render() {
    return (<React.Fragment>
      <div className="ant-table ant-table-large ant-table-bordered ant-table-scroll-position-left">
        <div className="ant-table-content">
          <div className="ant-table-body">
            <table className="table">
              <thead className="ant-table-thead">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Price</th>
                  <th>Total Market Capture</th>
                  <th>Change (7 Days)</th>
                </tr>
              </thead>
              <tbody className="ant-table-tbody">
                {
                  this.props.coins
                    ? this.props.coins.map(coin => this.singleCoin(coin))
                    : <tr>
                        <td colSpan={6} style={{
                            textAlign: "center"
                          }}>--</td>
                      </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>);
  }
}
