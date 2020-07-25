import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Table from './components/table/Table'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {

  return (
    <div>

      <BrowserRouter>

        <Route exact path='/' component={Table} />

      </BrowserRouter>
    </div>
  );
}

export default App;
