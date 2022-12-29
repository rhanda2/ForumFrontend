import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => (

  <GoogleOAuthProvider
            clientId="541336220428-vroovc50n5jacvu7stkahmav48bcfm03.apps.googleusercontent.com" >
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

export default App;