import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'
function App() {

  return (
    <div>

      <BrowserRouter>
        <Sidebar />
        <Route exact path='/' component={Dashboard} />

      </BrowserRouter>
    </div>
  );
}

export default App;
