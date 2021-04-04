
import React from 'react';
import {
 Route, Switch, withRouter,
} from 'react-router-dom';

import {AsyncPostsComponent} from '../../components/AsyncComponents'

const Posts = ({ match }) => {
  return (
  <div className="posts-wrapper">
     <Switch>
      <Route path={`${match.url}`} component={AsyncPostsComponent} />
    </Switch>
  </div>
)};
 
 export default withRouter(Posts);