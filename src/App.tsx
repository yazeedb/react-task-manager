import React, { useState, useLayoutEffect } from 'react';
import { FaCog, FaMailBulk, FaBell } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './App.scss';

function App() {
  const [themeColor, setThemeColor] = useState('#4d76fd');

  useLayoutEffect(() => {
    document.body.style.setProperty('--button-color', themeColor);
  }, [themeColor]);

  return (
    <main>
      <aside>
        <h4 className="app-title">TASK MANAGER</h4>

        <section className="profile">
          <div className="side-wrapper">
            <img
              src="logo192.png"
              alt="React Logo"
              className="profile-picture"
            />

            <h4 className="name">Yazeed Bzadough</h4>
            <h6 className="email">ybzadough@gmail.com</h6>

            <div>
              <button>
                <FaCog />
              </button>
              <button>
                <MdEmail />
              </button>
              <button>
                <FaBell />
              </button>
            </div>

            <span className="ratio">12/24</span>

            <div className="progress-bar">
              <div className="amount"></div>
            </div>

            <div className="columns">
              <div className="column">
                <h4 className="amount">12</h4>

                <span className="category">Completed</span>

                <span className="item">tasks</span>
              </div>

              <div className="column">
                <h4 className="amount">22</h4>

                <span className="category">To do</span>

                <span className="item">tasks</span>
              </div>

              <div className="column">
                <h4 className="amount">242</h4>

                <span className="category">All</span>

                <span className="item">completed</span>
              </div>
            </div>
          </div>

          <div className="side-wrapper projects">
            <h4>PROJECTS</h4>

            <ul>
              <li>Marketing</li>
              <li>Design</li>
              <li>Development</li>
              <li>Management</li>
            </ul>
          </div>

          <div className="side-wrapper team">
            <h4>TEAM</h4>

            <ul>
              <li>
                <img src="logo192.png" alt="React Logo" />
              </li>
              <li>
                <img src="logo192.png" alt="React Logo" />
              </li>
              <li>
                <img src="logo192.png" alt="React Logo" />
              </li>
              <li>
                <img src="logo192.png" alt="React Logo" />
              </li>
              <li>
                <img src="logo192.png" alt="React Logo" />
              </li>
            </ul>
          </div>
        </section>
      </aside>
      <header>
        <input type="text" placeholder="Search..." />

        <label htmlFor="switch" className="switch">
          <input type="checkbox" id="switch" />

          <div className="toggle" />

          <span className="choice">Inbox</span>
          <span className="choice">Calendar</span>
        </label>

        <div className="color-picker-wrapper">
          <label htmlFor="color-picker">Theme</label>

          <input
            type="color"
            id="color-picker"
            value={themeColor}
            onChange={(e) => setThemeColor(e.currentTarget.value)}
          />
        </div>
      </header>
    </main>
  );
}

export default App;
