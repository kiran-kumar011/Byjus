import React, { Component, Suspense, lazy } from 'react';
import Loader from '../UIComponents/Loader';
// import Board from '../Components/Board';

// views
const Board = lazy(() => import('../Components/Board'));
const Header = lazy(() => import('../Components/Headers'));

class Main extends Component {
  render() {
    console.log(this.props, 'props from main');
    return (
      <div>
        <div>
          <Suspense fallback={<Loader />}>
            <Header route={this.props} />
          </Suspense>
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
