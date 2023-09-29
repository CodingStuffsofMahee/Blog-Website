import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/LogIn/Login';
import Newsletter from './Component/NewsLetter/NewsLetter';
import SignUp from './Component/SignUp/SignUp';
import LoggedContext from './Component/Context/LoginContext';
import { useState } from 'react';

function App() {
  const [LoginTrue,setLoginTrue]=useState(false)
  return (
    <>
      <LoggedContext.Provider value={{ LoginTrue, setLoginTrue }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/logIn' exact element={<Login />} />
          <Route path='/signUp' exact element={<SignUp />} />
          <Route path='/newsletter' exact element={<Newsletter />} />
        </Routes>
      </LoggedContext.Provider>
    </>
  );
}

export default App;
