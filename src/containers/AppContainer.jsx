import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers import
import BookIndex from '../containers/BookIndexContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: null,
    };
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path={'/'} component={BookIndex} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
