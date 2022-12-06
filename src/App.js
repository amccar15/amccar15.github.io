import React, { useState } from 'react';
import {HashRouter, Routes, Route, Link} from "react-router-dom";
import "./App.css";
import ThePost from './pages/ThePost';
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';
import Login from "./pages/Login";
import ShowSearch from './pages/showSearch.js';
import {signOut} from 'firebase/auth';
import { auth } from './firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {

  document.title = "The Agile Blog"

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [searchType, setSearchType] = useState("title");

  const [searchInput, setSearchInput] = useState("");

  const signUserOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/";
      })
  }

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div>
      <h1 className='headerTitle'>Welcome To THE Agile Blog</h1>
      <HashRouter basename='/'>
          <nav>
            <ul>
              <li>
                <Link to="/" className="navlink"> Home </Link>
              </li>
                {!isAuth ? (
                  <li>
                    <Link to="/login" className="navlink"> Login </Link>
                  </li>
                  ) : (
                    <>
                      <li><Link to="/createpost" class="navlink"> Create Post </Link></li>
                      <li class="navlink" onClick={ signUserOut }> Log Out</li>
                    </>
                  )
                }
                <li className='custom-select'>
                    <select name='searchType' onChange={(e) => handleTypeChange(e)}>
                        <option selected="selected" value={'title'}>Title</option>
                        <option value={'author'}>Author</option>
                    </select>
                    <input type={"text"} placeholder="Search" name="searchInput" value={searchInput} onChange={(e) => handleInputChange(e)}/>
                      <div className='searchButtonContainer'>
                        <Link to={{pathname: '/showSearch/'+searchType+'/'+searchInput}} >
                          <FontAwesomeIcon icon={ faMagnifyingGlass } size={"3x"} className="searchButton"/>
                        </Link>
                      </div>
                </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home isAuth={isAuth} />} />
            <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/thepost/:id' element={<ThePost isAuth={isAuth}/>} />
            <Route path='/showSearch/:type/:search' element={<ShowSearch />} />
          </Routes>
      </HashRouter>
      <footer>
        <div className='footerStyling'>
          <div className='leftSection'>
            <h1>Support</h1>
            <p>Information</p>
            <p>Terms of Service</p>
            <p>Data Policy</p>
          </div>
          <div className='middleSection'>
            <h1>Incase you missed it</h1>
            <p>Login</p>
            <p>Contact Us</p>
          </div>
          <div className='endSection'>
            <h1>Location</h1>
            <p>9201 University City Blvd, Charlotte, NC 28223</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
