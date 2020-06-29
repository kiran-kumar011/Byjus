import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Board.scss';
// views
import SideHeader from '../Headers/SideHeader';
import BoardHeader from './BoardHeader';
import Loader from '../../UIComponents/Loader/Loader';
import StatusCard from './StatusCard';

// action
import { fetchAllBoards } from '../../redux-utils/actions';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      selectedIcon: '',
    };
  }

  componentDidMount = () => {
    const { location, history } = this.props.route;

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
  };

  handleIconClick = (selectedIcon) => {
    this.setState({ selectedIcon });
  };

  fetchBoards = () => {
    this.props.dispatchFetchAllBoards();
  };

  render() {
    const { selectedIcon } = this.state;
    const { status, isFetching } = this.props;
    const path = this.props.route.location.pathname.split('/')[1];

    return (
      <div>
        <div className="board-main-container flex-default-styling">
          <div className="board-main-wrapper">
            <SideHeader
              handleIconClick={this.handleIconClick}
              selectedIcon={selectedIcon}
              route={this.props.route}
            />
            <div className="board-header-and-body-wrapper">
              <div>
                <BoardHeader
                  handleIconClick={this.handleIconClick}
                  selectedIcon={selectedIcon}
                />
              </div>
              {path === 'board' && (
                <div className="board-body-main-container flex-default-styling">
                  <ul className="board-status-card-list-wrapper">
                    {!isFetching ? (
                      status.map((name) => {
                        return (
                          <div
                            draggable
                            key={name}
                            className="board-card-item-wrapper"
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

Board.propTypes = {
  status: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.boards.isFetching,
    status: state.boards.status,
  };
};

const mapDispatchToProps = {
  dispatchFetchAllBoards: fetchAllBoards,
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
