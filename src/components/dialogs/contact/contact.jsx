import React from 'react';
import styles from "./contact.module.css"
import { NavLink } from 'react-router-dom';

const Contact = React.memo((props) => {
  return (
    <NavLink className={styles.wrapper} to={`/dialogs/${props.id}`}>
      <img
        className={styles.photo}
        src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
        alt="User"
        with="40"
        height="40"
      />
        <h2 className={styles.name}>{props.name}</h2>
    </NavLink>
);
});

export default Contact;
