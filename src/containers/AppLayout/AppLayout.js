import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Home from '../../containers/Home';
import NotFound from '../../components/Pages/NotFound';
import About from './../../components/Pages/About';
import Header from '../../components/Header';
import Side from '../../components/Side';
import Footer from '../../components/Footer';

export default function AppLayout() {

  return (
    <Router>
      <Switch>
        <Fragment>
          <Header/>
          <div class = "row">
            <aside class = "col-md-2">
              <Side/>
            </aside>
            <main class = "col-md-8">
              {/* <ProtectedComponent path="/warehouses" exact component={Warehouses}/>} /> */}
              {/* <Redirect from="/" to="/warehouses" exact /> */}
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </main>
            <aside class = "col-md-2">
              <Side/>
            </aside>
          </div>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="*" component={NotFound}/>
          <Footer/>
        </Fragment>
      </Switch>
    </Router>
  );
}
