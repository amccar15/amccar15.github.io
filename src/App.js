import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import ThePost from './pages/ThePost';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import Login from "./pages/Login";
import {signOut} from 'firebase/auth';
import { auth } from './firebase-config';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      })
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/" class="navlink"> Home </Link>
          </li>
            {!isAuth ? (
              <Link to="/login" class="navlink"> Login </Link>
              ) : (
                <>
                  <li><Link to="/createpost" class="navlink"> Create Post </Link></li>
                  <li class="navlink" onClick={ signUserOut }> Log Out</li>
                </>
              )
            }
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/thepost' element={<ThePost />}></Route>
      </Routes>
    </Router>
  )
}

export default App;
