import React from 'react';
import { BsArrowUpDown, BsFunnel, BsGrid } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '../../UIComponents/Button';

const arr = ['List', 'Grantt', 'Board', 'Calender', 'Pivot', 'Process'];

const BoardHeader = ({ selectedIcon, handleIconClick }) => {
  return (
    <div>
      <div className="board-header-container flex-default-styling">
        <ul className="board-header-text-wrapper flex-default-styling">
          {arr.map((itm, ind) => {
            const selected = selectedIcon.toLowerCase() === itm.toLowerCase();
            return (
              <div
                key={ind}
                onClick={() => handleIconClick(itm.toLowerCase())}
                className={
                  selected
                    ? 'board-header-nav-text-item-active'
                    : 'board-header-nav-text-item-inactive'
                }
              >
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={`/${itm.toLowerCase()}`}
                >
                  <li>{itm}</li>
                </NavLink>
              </div>
            );
          })}
        </ul>
        <div className="board-header-right-section flex-default-styling">
          <Button>
            <div className="flex-default-styling">
              <BsGrid />
              <span className="board-right-header-text">Fields</span>
            </div>
          </Button>
          <Button>
            <div className="flex-default-styling">
              <BsArrowUpDown />
              <span className="board-right-header-text">Sort</span>
            </div>
          </Button>
          <Button>
            <div className="flex-default-styling">
              <BsFunnel />
              <span className="board-right-header-text">Filter</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

BoardHeader.propTypes = {
  selectedIcon: PropTypes.string.isRequired,
  handleIconClick: PropTypes.func.isRequired,
};

export default BoardHeader;
