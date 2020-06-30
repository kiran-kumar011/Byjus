import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';
import BoardDetails from './BoardDetails';

const color = [
  { status: 'on track', color: '#90d09e' },
  { status: 'delayed', color: 'red' },
  { status: 'on hold', color: 'orange' },
  { status: 'cancelled', color: 'red' },
];

class StatusCard extends Component {
  constructor() {
    super();
    this.state = {
      touched: false,
    };
  }

  capitalizeFirst() {
    const { status } = this.props;
    return status.charAt(0).toUpperCase() + status.slice(1, status.length);
  }

  render() {
    const { status, boards } = this.props;
    const borderColor = color.find((itm) => itm.status === status);
    const arr =
      boards && boards.length
        ? boards.filter((brd) => brd.status === status)
        : [];
    return (
      <div draggable>
        <div className="status-card-header flex-default-styling">
          <h2 className="status-title">{this.capitalizeFirst()}</h2>
          <div onClick={() => alert(`${status}`)}>
            <FaEllipsisH style={{ fontSize: '0.75rem' }} />
          </div>
        </div>
        <div>
          {arr.length ? (
            arr.map((itm) => {
              return (
                <div key={itm._id}>
                  <BoardDetails board={itm} borderColor={borderColor.color} />
                </div>
              );
            })
          ) : (
            <div className="item-not-available">
              <p className="board-details-paratext">Not available</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards.boards,
  };
};

StatusCard.propTypes = {
  boards: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(StatusCard);
