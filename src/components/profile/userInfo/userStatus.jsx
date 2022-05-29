import styles from './userInfo.module.css';
import React from 'react';

class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  onChangeStatus = event => {
    this.setState({ status: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <p className={styles.status} onDoubleClick={this.activateEditMode.bind(this)}>
            {this.props.status}
          </p>
        ) : (
          <input
            className={styles.input}
            value={this.state.status}
            type="text"
            onBlur={this.deactivateEditMode.bind(this)}
            onChange={this.onChangeStatus.bind(this)}
            autoFocus
          />
        )}
      </div>
    );
  }
}
export default UserStatus;
