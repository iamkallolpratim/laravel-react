import React , {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newsActions from '../../redux/coinNotice/actions';
import Loading from '../../component/common/loading';
import CoinNotice from '../../component/coin/coinNotice';

class NewsContainer extends Component{
  componentDidMount() {
      this.props.newsActions.loadCoinNotices();
  }
    render(){

        return(
            <React.Fragment>
              {
                this.props.news.loading?
                <Loading/>
                :
                <CoinNotice news={this.props.news.coinNotices}/>
              }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.coinNotice,
});

const mapDispatchToProps = (dispatch) => ({
    newsActions: bindActionCreators(newsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
