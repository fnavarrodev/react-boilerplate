import { createStore, applyMiddleware} from 'redux';

// Router redux imports
import createHistory from 'history/createBrowserHistory';

// Router redux imports
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export default function configureStore() {
 return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 applyMiddleware(middleware));
}
