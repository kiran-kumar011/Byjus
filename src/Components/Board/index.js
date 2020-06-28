import React, { Component } from 'react';
import SideHeader from '../Headers/SideHeader';
import BoardHeader from './BoardHeader';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      boards: [],
    };
  }

  componentDidMount = () => {
    this.fetchBoards();
  };

  fetchBoards = () => {
    const production = true;
    const url = production
      ? 'https://still-sea-81590.herokuapp.com'
      : 'http://localhost:8080';
    fetch(url + '/boards')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ boards: data.boards });
      })
      .catch((err) => console.log(err, 'from fetch'));
  };

  render() {
    return (
      <div style={{ display: 'flex', width: '100%', overflow: 'scroll' }}>
        <SideHeader route={this.props.route} />
        <div style={{ width: '100%' }}>
          <BoardHeader />
          <ul>
            {this.state.boards.map((board) => {
              return (
                <div style={{ height: '25vh' }}>
                  <li key={board._id}>{board.title}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Board;
