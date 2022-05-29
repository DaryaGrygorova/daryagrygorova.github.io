import styles from "./chat.module.css"
import Message from '../message/message';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { MyTextarea } from '../../../common/fornsControls/formControls';

const Chat = (props) => {

  let MessElements = props.MessData.map ( Mess => <Message key={Mess.id} id={Mess.id} message={Mess.message} name={Mess.name} time={Mess.time}/> );

  return (
    <div className={styles.container}>
    <div className={styles.title}>
    <img
      className={styles.photo}
      src="https://us.123rf.com/450wm/naschy/naschy1601/naschy160100001/50911392-vector-illustration-of-old-woman-in-purple-dress-with-walking-stick.jpg?ver=6"
      alt="User"
      width="40"
      height="40"
    />
    <h2 className={styles.name}>ИМЯ ПОЛЬЗОВАТЕЛЯ</h2>
  </div>
  <div className={styles.wrapper}>
    { MessElements }
  </div>
      <ChatForm newMessText={props.newMessText} onClick={props.onClick}/>
    </div>
);
};

const ChatForm = (props) => {
  const chatFormSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
    setSubmitting(false);
    props.onClick(values.newMessText)
  };

  return (
  <Formik
    initialValues={{ newMessText: ''}}
    onSubmit={chatFormSubmit}
    validate={ values => {
      const errors = {};
      if (values.newMessText.length >= 300) {errors.newMessText = "Your message is very long"};
      return errors;}}
  >
    {({touched, errors, isSubmitting }) => (
      <Form className={styles.thumb}>
        <Field component={MyTextarea}
               as="textarea"
               name="newMessText"
               rows="1"
               placeholder="Введите текст..."
               required
               value={props.newMessText} />
        <button type="submit"
                disabled={isSubmitting}
                className={`${styles.button} button`}>
          Send
        </button>
      </Form>
    )}
  </Formik>

  )}

export default Chat;
