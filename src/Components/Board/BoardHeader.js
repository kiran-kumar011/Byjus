import React from 'react';
import { BsArrowUpDown, BsFunnel, BsGrid } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const arr = ['List', 'Grantt', 'Board', 'Calender', 'Pivot', 'Process'];

const BoardHeader = ({ selectedIcon, handleIconClick }) => {
  console.log(selectedIcon, 'selected icon');
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
                style={{
                  borderBottom: selected
                    ? '3px solid #813589'
                    : '1px solid transparent',
                }}
              >
                <NavLink
                  style={{ textDecoration: 'none' }}
                  to={`/${itm.toLowerCase()}`}
                >
                  <li
                    style={{
                      fontSize: '12px',
                      padding: '8px',
                      color: selected ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)',
                      fontWeight: selected ? 600 : 500,
                    }}
                  >
                    {itm}
                  </li>
                </NavLink>
              </div>
            );
          })}
        </ul>
        <div
          style={{
            display: 'flex',
            width: '18vw',
            justifyContent: 'space-between',
            paddingRight: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsGrid />
            <span style={{ fontSize: '12px', padding: '5px', fontWeight: 500 }}>
              Fields
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsArrowUpDown />
            <span style={{ fontSize: '12px', padding: '5px', fontWeight: 500 }}>
              Sort
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsFunnel />
            <span style={{ fontSize: '12px', padding: '5px', fontWeight: 500 }}>
              Filter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
