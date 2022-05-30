import React from 'react';
import styles from './profile.module.css';
import UserInfo from './userInfo/userInfo';
import MyPosts from './myPosts/myPosts';
import { useParams } from 'react-router-dom';

const Profile = props => {
  let params = useParams();
  let currentUserID = parseInt(params.id);
  let userID = props.UserID;
  if (currentUserID !== userID && currentUserID) {
    props.setUserID(currentUserID);
  }

  return (
    <main className="content">
      <UserInfo Profile={props.Profile} status={props.status} updateStatus={props.updateStatus} />
      <div className={styles.wrapper}>
        <MyPosts
          PostsData={props.PostsData}
          NewPostText={props.NewPostText}
          onClick={props.addPost}
        />
      </div>
    </main>
  );
};

export default Profile;
