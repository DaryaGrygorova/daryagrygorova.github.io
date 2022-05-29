import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../images/customer_person_people_man.png';
import { NavLink } from 'react-router-dom';

const User = props => {
  return (
    <div>
      <div className={styles.wrapper}>
        <NavLink to={'/profile/' + props.user.id} className={styles.description}>
          <img
            className={styles.photo}
            src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
            alt="User"
            width="40"
            height="40"
          />
          <h2 className={styles.name}>{props.user.name}</h2>
          <p className={styles.text}>{props.user.status}</p>
        </NavLink>
        <div className={styles.buttonSet}>
          {props.user.followed ? (
            <button
              className="button"
              disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.unfollow(props.user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="button"
              disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
              onClick={() => {
                props.follow(props.user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
