import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Main from '../components/Main';
import CharacterDetails from '../components/CharacterDetails';
import NotFound from '../components/Notfound';
import '../styles/App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/details/:id" component={CharacterDetails} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
