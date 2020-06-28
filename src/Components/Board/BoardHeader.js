import React, { useState } from 'react';
import { BsArrowUpDown, BsFunnel, BsGrid, BsInbox } from 'react-icons/bs';
// import { FaFileAlt } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import Button from '../../UIComponents/Button';

const arr = ['List', 'Grantt', 'Board', 'Calender', 'Pivot', 'Process'];

const BoardHeader = (props) => {
  const [navItem, setSelectedNav] = useState('List');
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: '10px',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
        }}
      >
        <ul
          style={{
            display: 'flex',
            width: '30vw',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5px',
            marginLeft: '50px',
          }}
        >
          {arr.map((itm, ind) => {
            const selected = navItem === itm;
            return (
              <div
                onClick={() => setSelectedNav(itm)}
                style={{
                  borderBottom: selected
                    ? '3px solid #813589'
                    : '1px solid transparent',
                }}
              >
                <li
                  style={{
                    fontSize: '12px',
                    padding: '8px',
                    color: selected ? 'rgba(0,0,0,1)' : 'rgba(0,0,0,0.3)',
                    fontWeight: selected ? 600 : 400,
                  }}
                >
                  {itm}
                </li>
              </div>
            );
          })}
        </ul>
        <div
          style={{
            display: 'flex',
            width: '18vw',
            justifyContent: 'space-between',
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
