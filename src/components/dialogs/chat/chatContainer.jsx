import { addMessActionCreator } from '../../../Redux/Reducers/dialogs-reducer';
import Chat from './chat';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    MessData: state.MessagePage.MessData,
    newMessText: state.MessagePage.newMessText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: newMessText => dispatch(addMessActionCreator(newMessText)),
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
