import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blockchainActions from '../../redux/blockchain/actions';
import {Row , Col} from 'antd';
import CoinInfo from '../../component/coin/coinInfo';
import CoinHistory from '../../component/coin/coinHistory';
import Loading from '../../component/common/loading';


class CoinDetails extends Component {

  componentDidMount() {
    this.props.blockchainActions.loadCoinDetails(this.props.match.params.ticker);
    this.props.blockchainActions.loadCoinHistory(this.props.match.params.symbol);
  }
  render() {
    
    return (<React.Fragment>
        <Row>
          <Col span={6}>
            {
              this.props.coinDetails.loading ? <Loading/> : <CoinInfo coinDetails={this.props.coinDetails.coinDetails}/>
            }
          </Col>
          <Col span={16} offset={2}>
            {
              this.props.coinDetails.loading ? <Loading/> : <CoinHistory coinHistory={this.props.coinDetails.coinHistory}/>
            }
          </Col>
        </Row>
    </React.Fragment>);
  }
}
const mapStateToProps = (state) => ({coinDetails: state.coin});

const mapDispatchToProps = (dispatch) => ({
  blockchainActions: bindActionCreators(blockchainActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetails);
