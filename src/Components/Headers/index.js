import React, { Component } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SideHeader from './SideHeader';

import ByjusLogo from '../../Assets/byjus.png';
import Button from '../../UIComponents/Button';
import userImage from '../../Assets/kiran.jpg';

const headerNav = ['Task', 'Conversation', 'Files', 'Resources', 'Status'];

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navItem: 'Task',
    };
  }

  handleNavigation = (navItem) => this.setState({ navItem });

  render() {
    const { navItem } = this.state;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            padding: '10px 10px 0px 10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '35%',
              justifyContent: 'space-between',
              paddingLeft: '4px',
            }}
          >
            <div>
              <img
                src={ByjusLogo}
                alt="Byju"
                style={{ width: '30px', height: '30px' }}
              />
            </div>
            <div style={{ marginLeft: '20px' }}>
              <p style={{ fontWeight: 800 }}>CBSE Grade 5 Maths - Algebra</p>
              <ul
                style={{
                  display: 'flex',
                  width: '27vw',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '5px',
                }}
              >
                {headerNav.map((item, id) => {
                  const selected = navItem === item;
                  return (
                    <div
                      onClick={() => this.handleNavigation(item)}
                      key={id}
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
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '14vw',
                paddingRight: '10px',
              }}
            >
              <Button>
                <div
                  style={{
                    padding: '4px 6px 1px 6px',
                    border: '1px solid transparent',
                    boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                  }}
                >
                  <FaSistrix style={{ color: '#813589', fontSize: '16px' }} />
                </div>
              </Button>
              <Button>
                <div
                  style={{
                    padding: '4px 6px 1px 6px',
                    border: '1px solid transparent',
                    boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.1)',
                    borderRadius: '5px',
                  }}
                >
                  <AiOutlinePlusCircle
                    style={{
                      color: '#813589',
                      fontSize: '16px',
                    }}
                  />
                </div>
              </Button>
              <Button>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '5vw',
                  }}
                >
                  <img
                    src={userImage}
                    alt="user"
                    style={{
                      width: '30px',
                      height: '30px',
                      objectFit: 'cover',
                      borderRadius: '3px',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      paddingLeft: '3px',
                    }}
                  >
                    Kiran
                  </p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
