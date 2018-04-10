import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blockchainActions from '../../redux/blockchain/actions';
import Loading from '../../component/common/loading';
import CoinList from '../../component/coin/coinList'

class HomeContainer extends Component {
    componentDidMount() {
        this.props.blockchainActions.getAllCoins();
    }

    render() {

        return (
            <React.Fragment>
                {
                    this.props.coins.loading ?
                        <Loading/>
                        :
                        <CoinList match = {this.props.match} coins={this.props.coins.coins}/>

                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    coins: state.coin,
});

const mapDispatchToProps = (dispatch) => ({
    blockchainActions: bindActionCreators(blockchainActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
