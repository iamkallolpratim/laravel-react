import React, {Component} from 'react';
import {Card,List} from 'antd';
import moment from 'moment';

export default class CoinNotice extends Component {

  render() {
    return (<React.Fragment>
      {
        this.props.news
          ?
          <Card>
            <List
            itemLayout="vertical"
            size="large"
            dataSource={this.props.news}
            renderItem={item => (
            <List.Item
              key={item.id}
              extra={<img width={300} height={200} alt="logo" src={`${item.imageurl}`} />}>
              <List.Item.Meta
                title={<a target="_blank" href={item.url}>{item.title}</a>}
                description={item.body}
              />
              Published On : {moment.unix(item.published_on).format('LLL')}
            </List.Item>
            )}/>
          </Card>
          :
          ''
      }
    </React.Fragment>);
  }
}
