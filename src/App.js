import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/redux-store';
import StartPage from './components/startPage/startPage';
import Sidebar from './components/sidebar/sidebar';
// import DialogsContainer from './components/dialogs/dialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';

const DialogsContainer = lazy(() => import('./components/dialogs/dialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/profile/profileContainer'));

const App = (props) => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App-wrapper">
      <HeaderContainer />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Suspense fallback={<div className="loader">Loading...</div>}>
              <Routes>
          <Route path='/'
                 element={<StartPage />} />
          <Route path='/profile/:userID'
                 element={<ProfileContainer />} />
          <Route path='/dialogs/*'
                 element={<DialogsContainer />} />
          <Route path='/users/*'
                 element={<UsersContainer />} />
          <Route path='/login/*'
                 element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>}
                  />
        </Routes>
        </Suspense>
        </div>
      </div>
    </div>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
