import React from 'react';
import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import prettyLady from '../images/prettyLady-icon.webp';
import Logo1 from '../images/Logo1.png';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className="logo">
          <img className="logo__img" src={Logo1} alt="logo" width="40" height="40" />
          <span className="logo__text">BabaGram</span>
        </div>
        <div>
          {props.isAuth ? (
            <div className={styles.wrapper}>
              <NavLink to={'/profile/' + props.UserID}>
                <div className={styles.thumb}>
                  <img
                    className={styles.photo}
                    src={prettyLady}
                    alt="User"
                    width="40"
                    height="40"
                  />
                  <p>{props.login}</p>
                </div>
              </NavLink>
              <button className={`${styles.button} button`} onClick={props.logOut}>
                Log Out
              </button>
            </div>
          ) : (
            <NavLink to={'/login/'}>
              <button className={`${styles.button} button`}>Log In</button>
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
