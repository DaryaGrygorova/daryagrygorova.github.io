import React from 'react';
import styles from './sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
       <nav>
        <ul>
          <li className={styles.item}>
              <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/profile/" >
                Profile
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/dialogs" >
                Messages
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/news" >
                News
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/music" >
                Music
              </NavLink>
            </li>
          <li className={styles.item}>
          <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/users" >
            Users
          </NavLink>
        </li>
          </ul>
        </nav>
        <div className={`${ styles.item } ${styles.settings}`}>
          <NavLink className={({isActive}) => isActive ? 'currentPage' : ''} to="/settings" >
            Settings
          </NavLink>
        </div>
      </aside>
  );
};


export default Sidebar;
