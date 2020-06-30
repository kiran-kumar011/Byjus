import React, { Component } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
// import PropTypes from 'prop-types';

import ByjusLogo from '../../Assets/byjus.png';
import Button from '../../UIComponents/Button';
import userImage from '../../Assets/kiran.jpg';

import './Header.scss';

const headerNav = ['Task', 'Conversation', 'Files', 'Resources', 'Status'];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navItem: 'Task',
      showInput: false,
    };
  }

  handleNavigation = (navItem) => this.setState({ navItem });

  render() {
    const { navItem } = this.state;
    return (
      <div className="header-container">
        <div className="header-body-wrapper flex-default-styling">
          <div className="left-header-wrapper flex-default-styling">
            <div>
              <img src={ByjusLogo} alt="Byju" className="byju-logo" />
            </div>
            <div className="header-title-icons-wrapper">
              <p>CBSE Grade 5 Maths - Algebra</p>
              <ul className="left-header-text-wrapper flex-default-styling">
                {headerNav.map((item, id) => {
                  const selected = navItem === item;
                  return (
                    <div
                      onClick={() => this.handleNavigation(item)}
                      key={id}
                      className={
                        selected
                          ? 'nav-wrapper active-nav'
                          : 'nav-wrapper inactive-nav'
                      }
                    >
                      <li>{item}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <div className="right-header-wrapper flex-default-styling">
              <Button>
                <div className="right-icon-wrapper">
                  <FaSistrix />
                </div>
              </Button>
              <Button>
                <div className="right-icon-wrapper">
                  <AiOutlinePlusCircle />
                </div>
              </Button>
              <Button>
                <div className="user-name-image-wrapper">
                  <img src={userImage} alt="user" className="user-image" />
                  <p className="user-name">Kiran kumar</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Header.propTypes = {};

export default Header;
