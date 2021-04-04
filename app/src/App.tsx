import React from "react";
import {ApolloProvider} from '@apollo/client';
import client from './Apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './Containers/App';

const App = () => (
  <ApolloProvider client={client}>
      <Router >
        <AppContainer/>
      </Router>
  </ApolloProvider>  
);

export default App;