import React, {Component} from 'react';
import {imageLink} from '../../utils/icons'
import {Button, Popover,Icon} from 'antd';

export default class CoinInfo extends Component {
  render() {
    const coin = this.props.coinDetails[0];

    const content_7 = (
    <React.Fragment>
      {
        coin ? coin.percent_change_7d > 0
          ? <span>
              + {coin.percent_change_7d}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#4CAF50'
                }} type="caret-up"/></span>

          : <span>{coin.percent_change_7d}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#f44336'
                }} type="caret-down"/></span>
              :
              ''
      }
    </React.Fragment>
    );

    const content_24 = (
    <React.Fragment>
      {
        coin ?
        coin.percent_change_24h > 0
          ? <span>
              + {coin.percent_change_24h}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#4CAF50'
                }} type="caret-up"/></span>

          : <span>{coin.percent_change_24h}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#f44336'
                }} type="caret-down"/></span>
              :
              ''
      }
    </React.Fragment>
    );

    const content_1 = (
    <React.Fragment>
      {
        coin ?
        coin.percent_change_1h > 0
          ? <span>
              + {coin.percent_change_1h}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#4CAF50'
                }} type="caret-up"/></span>

          : <span>{coin.percent_change_1h}
              % &nbsp;&nbsp;
              <Icon style={{
                  float: "right",
                  fontSize: 20,
                  color: '#f44336'
                }} type="caret-down"/></span>
              :
              ''
      }
    </React.Fragment>
    );

    return (<React.Fragment>
      {
        this.props.coinDetails[0]
          ? <div className="ant-card ant-card-bordered ant-card-hoverable">
              <div className="ant-card-cover coin-image">
                <img className="spin-image" src={imageLink+`${this.props.coinDetails[0].symbol}`} alt={this.props.coinDetails[0].name}/>
              </div>
              <div className="ant-card-body">
                <div className="ant-card-meta">
                  <div className="ant-card-meta-detail" style={{
                      textAlign: "center"
                    }}>
                    <div className="ant-card-meta-title">{this.props.coinDetails[0].name}</div>
                    <div className="ant-card-meta-description">{this.props.coinDetails[0].symbol}</div>
                    <p>
                      <b>Total Market Cap:
                      </b>
                      $ {this.props.coinDetails[0].market_cap_usd}
                    </p>
                    <p>
                      <b>Price in USD:
                      </b>
                      $ {this.props.coinDetails[0].price_usd}
                    </p>
                  </div>
                  <div style={{
                      textAlign: "center"
                    }}>
                    <Popover content={content_24} trigger="hover">
                      <Button size="small">24 hr
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                    </Popover>
                    <Popover content={content_7} trigger="hover">
                      <Button size="small">7 Day</Button>
                      &nbsp;&nbsp;&nbsp;
                    </Popover>
                    <Popover content={content_1} trigger="hover">
                      <Button size="small">1 hr</Button>
                    </Popover>
                  </div>
                </div>
              </div>
            </div>
          : ''
      }

    </React.Fragment>);
  }
}
