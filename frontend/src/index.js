import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { AdminPanel } from './components/Admin/AdminPanel';
import App from './components/App';


if(module.hot){
  module.hot.accept();
}


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/admin-panel">
        <AdminPanel />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

