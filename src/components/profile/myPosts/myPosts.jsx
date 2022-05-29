import Post from './post/post';
import styles from '../myPosts/myPost.module.css';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { MyTextarea } from '../../../common/fornsControls/formControls';

const MyPosts = React.memo((props) => {

let Posts = props.PostsData.map ( PostItem => <Post key={PostItem.id} id={PostItem.id} name={PostItem.name} message={PostItem.message} likeCounter={PostItem.likeCounter} time={PostItem.time}/> );

return (
    <div>
      <h2 className={styles.title}>My posts</h2>
      <AddPostForm NewPostText={props.NewPostText} onClick={props.onClick}/>
      {Posts}
    </div>
  );
});

const AddPostForm = (props) => {
  const AddPostFormSubmit = (values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void}) => {
    setSubmitting(false);
    props.onClick(values.NewPostText)
  };

  return (
    <Formik
      initialValues={{ NewPostText: ''}}
      onSubmit={AddPostFormSubmit}
      validate={ values => {
      const errors = {};
        if (values.NewPostText.length >= 300) {errors.NewPostText = "Your post is very long"};
        return errors;}}
    >
      {({touched, errors, isSubmitting }) => (
        <Form className={styles.thumb}>
          <Field
                 component={MyTextarea}
                 as="textarea"
                 name="NewPostText"
                 placeholder="Enter the text..."
                 row="3"
                 required
                 value={props.NewPostText}
                 />
          <button type="submit"
                  disabled={isSubmitting}
                  className={`${styles.button} button`}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  )}


export default MyPosts;
