import { createStore, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import appReducer from '../../client/reducers/index.js';
import App from '../../client/containers/app/App.jsx';

const renderFullPage = (html, preloadedState) => (
  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="/dist/styles.css" rel="stylesheet">
      <title>Simple react app</title>
    </head>
    <body>
      <div class="app">${html}</div>

      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="/dist/bundle.js"></script>
    </body>
    </html>
  `
);

const handleInitialRender = (req, res) => {
  const store = createStore(appReducer);

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}

export default handleInitialRender;
