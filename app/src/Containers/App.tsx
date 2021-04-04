
import React, { Component } from 'react';
import {
  Link,
   Route, Switch, withRouter,
} from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import routeService from '../services/_routeService';
import Layout from './Layout'

interface AppContainerInput{
  num: number,
}

const AppContainer = ()=>{
  return(<>
        <Layout title="My app">
            <Switch>
                {routeService.map((route, key) => <Route key={key} path={`/${route.path}`} component={route.component} />)}
            </Switch>
        </Layout>
      </>)
};

export default withRouter(AppContainer);
