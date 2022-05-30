import styles from './post.module.css';
import React from 'react';
import likeHeart from '../../../images/likeHeart.svg';
import prettyLady from '../../../images/prettyLady-icon.webp';

const Post = React.memo(props => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <img className={styles.photo} src={prettyLady} alt="User" width="40" height="40" />
        <div className={styles.about}>
          <h2 className={styles.name}>{props.name}</h2>
          <p className={styles.data}>{props.time}</p>
        </div>
      </div>
      <p className={styles.text}>{props.message}</p>
      <button className={`${styles.button} button`} type="button">
        Like<span className={styles.likeCounter}>{props.likeCounter}</span>
        <img src={likeHeart} width="25" height="25" alt="heart" />
      </button>
    </div>
  );
});

export default Post;
