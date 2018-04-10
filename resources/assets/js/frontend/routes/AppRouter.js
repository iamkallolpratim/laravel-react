import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../component/common/loading';


const HomeContainer = Loadable({
    loader: () => import('../containers/home/home'),
    loading: Loading
});

const NewsContainer = Loadable({
    loader: () => import('../containers/news/news'),
    loading: Loading
});

const ContactContainer = Loadable({
    loader: () => import('../containers/contact/contact'),
    loading: Loading
});

const CoinDetailsContainer = Loadable({
    loader: () => import('../containers/home/coinDetails'),
    loading: Loading
});


const AppRouter = ({...rest}) => {
    return (
        <Switch>
            <Route
                {...rest}
                exact
                path={`${rest.match.path}`}
                render={props => <HomeContainer {...props} />}
            />
            <Route
                {...rest}
                exact
                path={`${rest.match.path}news`}
                render={props => <NewsContainer {...props} />}
            />
            <Route
                {...rest}
                exact
                path={`${rest.match.path}contact-us`}
                render={props => <ContactContainer {...props} />}
            />
          <Route {...rest}
            exact
            path={`${rest.match.path}coins/:ticker&symbol=:symbol`}
            render={props => <CoinDetailsContainer {...props}/>}/>

        </Switch>
    );
};

export default AppRouter;
