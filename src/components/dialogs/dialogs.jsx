import Contact from './contact/contact';
import styles from "./dialogs.module.css"
import ChatContainer from './chat/chatContainer';
import React from 'react';

const Dialogs = (props) => {
  let ContactsElements = props.ContactsData.map ( OneContact => <Contact key={OneContact.id} id={OneContact.id} name={OneContact.name} /> );

 return (
    <div className="content">
      <main className={styles.container}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Dialogs</h1>
          { ContactsElements }
        </div>
        <span className={styles.line}></span>
        <div className={styles.wrapper}>
        <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Dialogs;
