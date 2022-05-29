import styles from './userInfo.module.css';
import React, { useEffect, useState } from 'react';

const UserStatusWithHook = (props) => {

  let [editMode, setEditMode ] = useState(false);
  let [status, setStatus ] = useState('');

  useEffect(() => {
    setStatus(props.status)},[props.status]);

  const activateEditMode = () => {setEditMode(true)};
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status);
  };

  const onChangeStatus = (event) => {
    setStatus(event.currentTarget.value)};


     return (
      <div>
        {(!editMode)
        ? <p className={styles.status}
              onDoubleClick={activateEditMode}
          >
            {props.status}
          </p>
        : <input className={styles.input}
                 value={status}
                 type="text"
                 onBlur={deactivateEditMode}
                 onChange={onChangeStatus}
                 autoFocus
          />}
      </div>
    );
  };

export default UserStatusWithHook;
