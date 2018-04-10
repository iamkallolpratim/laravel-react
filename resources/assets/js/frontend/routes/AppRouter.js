import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../component/common/loading';


const HomeContainer = Loadable({
    loader: () => import('../containers/home/home'),
    loading: Loading
});

const AboutContainer = Loadable({
    loader: () => import('../containers/about/about'),
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
                path={`${rest.match.path}about`}
                render={props => <AboutContainer {...props} />}
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
