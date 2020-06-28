import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../UIComponents/Button';
import { NavLink } from 'react-router-dom';

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

  componentDidMount() {
    const { location, history } = this.props.route;

    console.log(location.pathname, 'loation');
    if (!location.pathname.split('/')[1]) {
      history.push('/boards');
      this.setState({ selectedIcon: 'boards' });
    } else {
      this.setState({ selectedIcon: location.pathname.split('/')[1] });
    }
    console.log(this.props.route, 'props');
  }

  handleIconClick = (selectedIcon) => {
    console.log('icon click', selectedIcon);
    this.setState({ selectedIcon });
  };

  render() {
    const { selectedIcon } = this.state;
    const style = { color: '#fff' };
    return (
      <div
        style={{
          backgroundColor: 'rgb(129, 53, 137)',
          width: '60px',
          paddingTop: '40px',
          height: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <Button onClick={() => this.handleIconClick('home')}>
            <div
              className={selectedIcon === 'home' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/home">
                <AiFillHome
                  style={{
                    color: selectedIcon === 'home' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>

          <Button
            // style={{ backgroundColor: '#fff' }}
            onClick={() => this.handleIconClick('search')}
          >
            <div
              className={selectedIcon === 'search' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/search">
                <AiOutlineFileSearch
                  style={{
                    color: selectedIcon === 'search' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => this.handleIconClick('boards')}>
            <div
              className={selectedIcon === 'boards' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/boards">
                <FaFolderPlus
                  style={{
                    color: selectedIcon === 'boards' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => this.handleIconClick('lists')}>
            <div
              className={selectedIcon === 'lists' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/lists">
                <FaClipboardList
                  style={{
                    color: selectedIcon === 'lists' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => this.handleIconClick('inbox')}>
            <div
              className={selectedIcon === 'inbox' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/inbox">
                <FaInbox
                  style={{
                    color: selectedIcon === 'inbox' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => this.handleIconClick('users')}>
            <div
              className={selectedIcon === 'users' ? 'active-icon' : 'inactive'}
            >
              <NavLink className="icon" to="/users">
                <FaUsers
                  style={{
                    color: selectedIcon === 'users' ? '#813589' : '#fff',
                  }}
                />
              </NavLink>
            </div>
          </Button>
          <Button onClick={() => this.handleIconClick('graphs')}>
            <div
              className={selectedIcon === 'graphs' ? 'active-icon' : 'inactive'}
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

export default connect(() => {})(SideHeader);
