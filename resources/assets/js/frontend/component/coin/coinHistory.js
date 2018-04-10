import React, {Component} from 'react';
import {Card} from 'antd';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';
import moment from 'moment';

export default class CoinHistory extends Component {

  constructor(props) {
    super(props);
    this.formatXAxis = this.formatXAxis.bind(this);
  }

  formatXAxis(tickItem) {

    return moment.unix(tickItem).format('LL');
  }
  render() {
    return (<Card title="Last 30 Days Data">
      <AreaChart width={830} height={340} data={this.props.coinHistory.Data} margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="time" tickFormatter={this.formatXAxis}/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip labelFormatter={this.formatXAxis}/>
        <Area type="monotone" dataKey="low" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
        <Area type="monotone" dataKey="high" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
      </AreaChart>

    </Card>);
  }
}
