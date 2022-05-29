import styles from './post.module.css';
import React from 'react';

const Post = React.memo( (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.description}>
        <img
          className={styles.photo}
          src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
          alt='User'
          width="40"
          height="40"
        />
        <div className={styles.about}>
          <h2 className={styles.name}>{props.name}</h2>
          <p className={styles.data}>{props.time}</p>
        </div>
      </div>
      <p className={styles.text}>{props.message}</p>
      <button className={`${styles.button} button`} type="button">
        Like<span className={styles.likeCounter}>{props.likeCounter}</span>
        <img
          src="https://svgsilh.com/svg/1993288-673ab7.svg" width="25" height="25" alt='heart' />
      </button>
    </div>
  );
});

export default Post;
