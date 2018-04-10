import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import AppLayout from './layout/AppLayout';

const Routes = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route
          path=""
          component={AppLayout}
        />
      </div>
    </ConnectedRouter>
  );
}

export default Routes;
