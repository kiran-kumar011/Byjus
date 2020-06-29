import React, { Component, Suspense, lazy } from 'react';
import Loader from '../UIComponents/Loader/Loader';
import Header from '../Components/Headers';

// views
const Board = lazy(() => import('../Components/Board'));

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Header route={this.props} />
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Board route={this.props} />
          </Suspense>
        </div>
      </div>
    );
  }
}

export default Main;
