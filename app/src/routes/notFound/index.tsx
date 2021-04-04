
import React from 'react';
import {
 Route, Switch, withRouter,
} from 'react-router-dom';

import {AsyncNotFoundComponent} from '../../components/AsyncComponents'

const NotFound = ({ match }) => {
  return (
  <div className="notfound-wrapper">
     <Switch>
      <Route path={`${match.url}`} component={AsyncNotFoundComponent} />
    </Switch>
  </div>
)};
 
 export default withRouter(NotFound);