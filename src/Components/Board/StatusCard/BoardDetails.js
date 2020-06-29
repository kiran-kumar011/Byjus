import React, { useState } from 'react';
import { FaEllipsisV, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import image from '../../../Assets/kiran.jpg';

const BoardDetails = ({ board, borderColor }) => {
  const [touched, setTouchedState] = useState(false);
  return (
    <div
      onMouseUp={() =>
        setTimeout(() => {
          setTouchedState(false);
        }, 100)
      }
      onMouseDown={() => setTouchedState(true)}
      className="board-details-wrapper"
      style={{
        opacity: touched ? '0.6' : '1',
      }}
    >
      <div
        className="board-details-top-border"
        style={{
          border: `2px solid ${borderColor}`,
        }}
      />
      <div className="board-details-body">
        <div>
          <div className="board-title-icon">
            <p className="board-title">{board.title}</p>
            <div onClick={() => alert(`${board.title}`)}>
              <FaEllipsisV style={{ fontSize: '14px' }} />
            </div>
          </div>
          <div className="board-owners-duedate-status flex-default-styling">
            <div className="board-owner-image-addowner flex-default-styling">
              <img src={image} alt="owner" className="owner-image" />
              <AiOutlinePlusCircle
                style={{
                  paddingLeft: '5px',
                }}
              />
            </div>
            <div className="board-duedate-completion-percentage-wrapper flex-default-styling">
              <div className="board-duedate flex-default-styling">
                <FaRegCalendarAlt style={{ fontSize: '14px' }} />
                <p className="duedate-para">
                  {moment(board.date).format('LL')}
                </p>
              </div>
              <div className="completion-percentage">
                <p>{board.completionStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardDetails;
