import React from 'react';
import styles from './profile.module.css';
import UserInfo from './userInfo/userInfo';
import MyPosts from './myPosts/myPosts';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
  let params = useParams();
  let userID = params.userID;
  if (userID !== props.UserID) {
    props.onPageChanged(userID);
  };

  return (
    <main className='content'>
      <UserInfo Profile={props.Profile} status={props.status} updateStatus={props.updateStatus} />
      <div className={styles.wrapper}>
        <MyPosts PostsData={props.PostsData} NewPostText={props.NewPostText}
                 onClick={props.addPost} />
      </div>
    </main>
  );
};

export default Profile;
