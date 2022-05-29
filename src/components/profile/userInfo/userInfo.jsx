import React from 'react';
import styles from './userInfo.module.css';
import userPhoto from '../../images/customer_person_people_man.png';
import Preloader from '../../../common/preloader/isFetching_preloader';
import Banner from '../../images/Baner.jpg';
import UserStatusWithHook from './userStatus-withHook';

const UserInfo = React.memo((props) => {

  if (!props.Profile) {
    return <Preloader />
  };

  return (
    <div>
    <div className={styles.wrapper}>
    <img
        src={Banner}
        alt="banner"
        width="1200"
        height="300"
      />
    </div>
    <div className={styles.thumb}>
      <img
        className={styles.photo}
        src={props.Profile.photos.large != null ? props.Profile.photos.large : userPhoto}
        alt="User"
        width="260"
        height="250"
      />
        <div className={styles.description}>
          <h1 className={styles.name}>{props.Profile.fullName}</h1>
          <p className={styles.about}>User ID: {props.Profile.userId}</p>
          {/*<UserStatus status={props.status} updateStatus={props.updateStatus}/>*/}
          <UserStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
</div>
  );
})

export default UserInfo;
