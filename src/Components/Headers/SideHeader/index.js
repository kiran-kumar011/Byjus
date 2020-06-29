import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '../../../UIComponents/Button';

// icons
import {
  FaClipboardList,
  FaFolderPlus,
  FaUsers,
  FaInbox,
} from 'react-icons/fa';
import { AiFillHome, AiOutlineFileSearch } from 'react-icons/ai';

import { BsGraphUp } from 'react-icons/bs';

class SideHeader extends Component {
  constructor() {
    super();
    this.state = {
      selectedIcon: '',
    };
  }

  render() {
    const { selectedIcon, handleIconClick } = this.props;
    return (
      <div className="side-header-container">
        <div className="side-header-wrapper">
          <Button onClick={() => handleIconClick('list')}>
            <div
              className={
                selectedIcon === 'list'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/list">
                <AiFillHome
                  style={{
                    color: selectedIcon === 'list' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>

          <Button onClick={() => handleIconClick('grantt')}>
            <div
              className={
                selectedIcon === 'grantt'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/grantt">
                <AiOutlineFileSearch
                  style={{
                    color: selectedIcon === 'grantt' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => handleIconClick('board')}>
            <div
              className={
                selectedIcon === 'board'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/board">
                <FaFolderPlus
                  style={{
                    color: selectedIcon === 'board' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => handleIconClick('calender')}>
            <div
              className={
                selectedIcon === 'calender'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/calender">
                <FaClipboardList
                  style={{
                    color: selectedIcon === 'calender' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => handleIconClick('pivot')}>
            <div
              className={
                selectedIcon === 'pivot'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/pivot">
                <FaInbox
                  style={{
                    color: selectedIcon === 'pivot' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => handleIconClick('process')}>
            <div
              className={
                selectedIcon === 'process'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/process">
                <FaUsers
                  style={{
                    color: selectedIcon === 'process' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => handleIconClick('graphs')}>
            <div
              className={
                selectedIcon === 'graphs'
                  ? 'active-icon flex-default-styling'
                  : 'inactive-icon flex-default-styling'
              }
            >
              <NavLink className="icon" to="/graphs">
                <BsGraphUp
                  style={{
                    color: selectedIcon === 'graphs' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(SideHeader);
