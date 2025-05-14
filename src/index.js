import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoadingBarContainer } from "react-top-loading-bar";

// the two imports are for bootstrap bcs nav is not working properly
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
     <LoadingBarContainer>
    <App />
    </LoadingBarContainer>
  
);

