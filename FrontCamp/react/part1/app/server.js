import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import template from './template.js';
import App from './components/App.jsx';

const port = 3000;

const app = express();

app.get('/', function(res, req) {
  res.send(template(renderToString(<App />)))
});

app.listen(3000);
