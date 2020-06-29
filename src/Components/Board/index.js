import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Board.scss';
// views
import SideHeader from '../Headers/SideHeader';
import BoardHeader from './BoardHeader';
import Loader from '../../UIComponents/Loader/Loader';
import StatusCard from './StatusCard';

// action
import { addNewBoards } from '../../redux-utils/actions';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      boards: [],
      isFetching: false,
      selectedIcon: '',
    };
  }

  componentDidMount = () => {
    const { location, history } = this.props.route;

    console.log(location.pathname, 'location');
    if (!location.pathname.split('/')[1]) {
      history.push('/board');
      this.setState({ selectedIcon: 'board', isFetching: true }, () => {
        this.fetchBoards();
      });
    } else {
      this.setState(
        {
          selectedIcon: location.pathname.split('/')[1],
        },
        () => {
          this.fetchBoards();
        }
      );
    }
    console.log(this.props.route, 'props');
  };

  handleIconClick = (selectedIcon) => {
    console.log('icon click', selectedIcon);
    this.setState({ selectedIcon });
  };

  fetchBoards = () => {
    console.log('getch boards');
    const production = false;
    const url = production
      ? 'https://still-sea-81590.herokuapp.com'
      : 'http://localhost:8080';
    fetch(url + '/boards')
      .then((res) => res.json())
      .then((data) => {
        const { boards, status } = data;
        this.setState({ boards: boards, isFetching: false }, () => {
          this.props.dispatchNewBoards({ params: { boards, status } });
        });
      })
      .catch((err) => {
        this.setState({ isFetching: false });
        console.log(err, 'from fetch');
      });
  };

  render() {
    const { isFetching, selectedIcon } = this.state;
    const { status } = this.props;
    const path = this.props.route.location.pathname.split('/')[1];

    return (
      <div>
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ marginTop: '60px', width: '100%' }}>
            <SideHeader
              handleIconClick={this.handleIconClick}
              selectedIcon={selectedIcon}
              route={this.props.route}
            />
            <div style={{ width: '100%' }}>
              <div>
                <BoardHeader
                  handleIconClick={this.handleIconClick}
                  selectedIcon={selectedIcon}
                />
              </div>
              {path === 'board' && (
                <div
                  style={{
                    paddingTop: '27px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <ul
                    style={{
                      display: 'flex',
                      margin: '20px 20px 20px 50px',
                      paddingLeft: '20px',
                      justifyContent: 'space-between',
                    }}
                  >
                    {!isFetching ? (
                      status.map((name) => {
                        return (
                          <div
                            draggable
                            key={name}
                            style={{
                              backgroundColor: '#6b91972e',
                              width: '26vw',
                              padding: '10px',
                              margin: '10px 10px 10px 10px',
                              borderRadius: '10px',
                            }}
                          >
                            <StatusCard status={name} />
                          </div>
                        );
                      })
                    ) : (
                      <Loader />
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Board.propTypes = {};

const mapStateToProps = (state) => {
  return {
    allBoards: state.boards.boards,
    status: state.boards.status,
  };
};

const mapDispatchToProps = {
  dispatchNewBoards: addNewBoards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
