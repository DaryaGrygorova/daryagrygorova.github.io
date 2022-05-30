import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { withAuthRedirect } from '../hoc/AuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => {
  return {
    ContactsData: state.MessagePage.ContactsData,
  };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogs);
