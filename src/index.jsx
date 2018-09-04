import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

// Router redux imports
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Translate imports
import { I18nextProvider } from 'react-i18next';

// Style imports
import './assets/styles/css/index.css';
// Components impots
import App from './containers/AppContainer';

// Store imports
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
// Import translates
import i18n from './i18n';
// Action imports

// Config store and save into window
const store = configureStore();

// Set the current language with the URL
function currentLanguage(defaultLang = '/es') {
  const path = window.location.pathname.split('/');
  if (path[1] === 'en') {
    return path[1];
  }
  return defaultLang;
}

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory({ basename: currentLanguage() });

// Init whith default languuage == es
i18n.init({ lng: currentLanguage('es') });

function Index() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route path={'/*'} component={App} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    </I18nextProvider>
  );
}

ReactDOM.render(
  <Index />, document.getElementById('root'));
registerServiceWorker();
