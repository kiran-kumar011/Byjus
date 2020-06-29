import React, { Component, Suspense, lazy } from 'react';
import Loader from '../UIComponents/Loader/Loader';
import Header from '../Components/Headers';

// views
const Board = lazy(() => import('../Components/Board'));
// const Header = lazy(() => import('../Components/Headers'));

class Main extends Component {
  render() {
    console.log(this.props, 'props from main');
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
