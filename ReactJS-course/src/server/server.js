import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../client/components/App';

import configureStore from '../client/modules/configureStore';

const app = express();
const PORT = 2048;

const staticPath = path.resolve(__dirname, '../../dist');

// All the content inside the dist folder is going to be served as-is, statically by Express.
app.use('/', express.static('dist'));

app.get('/*', (req, res) => {
  const context = {};
  const store = configureStore();
  const jsx = (
        <App
            context={context}
            location={req.url}
            Router={StaticRouter}
            store={store}
        />
  );

  const reactDom = renderToString(jsx);
  const preloadedState = store.getState();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom, preloadedState));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`); // eslint-disable-line no-console
  console.log('staticPath: ', staticPath); // eslint-disable-line no-console
});

function htmlTemplate(reactDom, preloadedState) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link href="/main.css" rel="stylesheet">
        </head>
        
        <body>
            <div id="root">${reactDom}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
            </script>
            <script src="/main.bundle.js"></script>
        </body>
        </html>
    `;
}
