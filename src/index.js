import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from './store/store';
import { Provider } from 'react-redux';
import Index from './pages/index/index';
import BusinessDetails from './pages/businessDetails/businessDetails';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} exact/>
          <Route path="/:id" element={<BusinessDetails/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
