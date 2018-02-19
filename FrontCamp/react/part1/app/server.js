import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import template from './template.js';
import App from './components/App.jsx';

const port = 3000;

const app = express();
app.use(express.static('dist'));

app.get('/', function(res, req) {
  const component = renderToString(<App />);
  const indexPage = template(component);
  res.send(indexPage);
});

app.listen(3000);
