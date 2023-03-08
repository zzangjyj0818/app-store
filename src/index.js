import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";
import axios from 'axios';

//API Token
clayful.config({
  client : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNhMmJiMjYzMzM3NTYwY2YyZmU2YWQ1Zjg1NmYxYWU1OGJiZDNhMWQ3NTViZWFjODFhNzBkNTgyZjM4NzdhMTkiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjc3MDc1Nzg5LCJzdG9yZSI6IkdKWkRSNktYOEVVUi5XOTJOTjJUQUJZWVoiLCJzdWIiOiJaVzhZTldQWU1FTUIifQ.RCXLJzmpKt7DRhUuyvztcgmAxCjd36rUl4_iOeOLhHc'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
