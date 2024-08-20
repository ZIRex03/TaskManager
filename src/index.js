import React from 'react';
import * as ReactDOMClient from 'react-dom/client'
import './css/style.css'
import App from './App';

const root = document.getElementById('root');
const app = ReactDOMClient.createRoot(root);

app.render(<App/>);


