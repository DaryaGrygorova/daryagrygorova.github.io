import React from 'react';
import styles from './startPage.module.css';

const StartPage = () => {
  return (
    <main className="content">
      <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img
          className={styles.img}
          src="https://w7.pngwing.com/pngs/834/679/png-transparent-computer-icons-woman-user-old-age-grandma-purple-violet-people-thumbnail.png"
          alt="logo"
          width="160"
          height="160"
        />
        <span className={styles.text}>BabaGram</span>
      </div>
      <span className={styles.greetings}>Welcome!</span>

    </div>
</main>
  );
};


export default StartPage;
