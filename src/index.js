import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// Імпортуємо 
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store";
// import { PersistGate } from 'redux-persist/integration/react';
// import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
