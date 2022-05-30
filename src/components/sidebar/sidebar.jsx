import React from 'react';
import styles from './sidebar.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Sidebar = React.memo(props => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li className={styles.item}>
            <NavLink
              className={({ isActive }) => (isActive ? 'currentPage' : '')}
              to={`/profile/ ${props.authorizedUserId}`}
            >
              Profile
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? 'currentPage' : '')} to="/dialogs">
              Messages
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? 'currentPage' : '')} to="/news">
              News
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? 'currentPage' : '')} to="/music">
              Music
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink className={({ isActive }) => (isActive ? 'currentPage' : '')} to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${styles.item} ${styles.settings}`}>
        <NavLink className={({ isActive }) => (isActive ? 'currentPage' : '')} to="/settings">
          Settings
        </NavLink>
      </div>
    </aside>
  );
});

let mapStateToProps = state => {
  return {
    authorizedUserId: state.AuthPage.UserID,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
