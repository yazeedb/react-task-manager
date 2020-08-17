import React, { useState, useLayoutEffect } from 'react';
import Select from 'react-select';
import { FaCog, FaBell, FaSearch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { mockData, getTotalTasks, countCompleteTasks } from './data';
import './App.scss';

function App() {
  const [themeColor, setThemeColor] = useState('#4d76fd');

  useLayoutEffect(() => {
    document.body.style.setProperty('--button-color', themeColor);
  }, [themeColor]);

  const completedCount = countCompleteTasks(mockData.folders);
  const totalTasks = getTotalTasks(mockData.folders);

  const [activeFolder, setActiveFolder] = useState(mockData.folders[0]);

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

            <h4 className="name">
              {mockData.user.firstName} {mockData.user.lastName}
            </h4>
            <h6 className="email">{mockData.user.email}</h6>

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

            <span className="ratio">
              {completedCount}/{totalTasks}
            </span>

            <div className="progress-bar">
              <div
                className="amount"
                style={{
                  width: `${(completedCount / totalTasks) * 100}%`,
                }}
              />
            </div>

            <div className="columns">
              <div className="column">
                <h4 className="amount">{completedCount}</h4>

                <span className="category">Completed</span>

                <span className="item">tasks</span>
              </div>

              <div className="column">
                <h4 className="amount">{totalTasks - completedCount}</h4>

                <span className="category">To do</span>

                <span className="item">tasks</span>
              </div>

              <div className="column">
                <h4 className="amount">{completedCount}</h4>

                <span className="category">All</span>

                <span className="item">completed</span>
              </div>
            </div>
          </div>

          <div className="side-wrapper projects">
            <h4>PROJECTS</h4>

            <ul>
              {mockData.folders.map((f) => (
                <li key={f.name}>{f.name}</li>
              ))}
            </ul>
          </div>

          <div className="side-wrapper team">
            <h4>TEAM</h4>

            <ul>
              {mockData.team.map((u) => (
                <img src={u.profilePicture} alt="React Logo" key={u.id} />
              ))}
            </ul>
          </div>
        </section>
      </aside>

      <div style={{ width: '100%' }}>
        <header>
          <div className="flex-wrapper search">
            <FaSearch />
            <input type="text" placeholder="Search..." id="search" />
          </div>

          <div className="flex-wrapper switch">
            <label htmlFor="switch" className="switch-component">
              <input type="checkbox" id="switch" />

              <div className="toggle" />

              <span className="choice">Inbox</span>
              <span className="choice">Calendar</span>
            </label>
          </div>

          <div className="flex-wrapper color-picker">
            <label htmlFor="color-picker">Theme</label>

            <input
              type="color"
              id="color-picker"
              value={themeColor}
              onChange={(e) => setThemeColor(e.currentTarget.value)}
            />
          </div>
        </header>

        <section className="active-folder">
          <Select
            name="folders"
            id="folders"
            options={mockData.folders.map((f) => ({
              value: f.name,
              label: f.name,
            }))}
            value={{
              value: activeFolder.name,
              label: activeFolder.name,
            }}
            onChange={(option: SelectOption) => {
              const folder = mockData.folders.find(
                (f) => f.name === option.value
              );

              if (!folder) {
                return;
              }

              setActiveFolder(folder);
            }}
          />

          <ul>
            {activeFolder.tasks.map((t) => (
              <li key={t.title}>
                <input
                  type="checkbox"
                  name={t.title}
                  id={t.title}
                  checked={t.isComplete}
                  onChange={() => {}}
                />
                {t.title}
                {t.createdAt}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

interface SelectOption {
  value: string;
  label: string;
}

export default App;
