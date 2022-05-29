import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { profileReducer } from './Reducers/profile-reducer';
import { dialogsReducer } from './Reducers/dialogs-reducer';
import { sidebarReducer } from './Reducers/sidebar-reducer';
import { UserReducer } from './Reducers/users-reducer';
import AuthReducer from './Reducers/auth-reducer';

let reducerStack = combineReducers({
  ProfilePage: profileReducer,
  MessagePage: dialogsReducer,
  UsersPage: UserReducer,
  Sidebar: sidebarReducer,
  AuthPage: AuthReducer,
  }
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducerStack, composeEnhancers(
   applyMiddleware(thunkMiddleware)
  ));

// let store = createStore(reducerStack, applyMiddleware(thunkMiddleware));
window.__store=store
export default store;