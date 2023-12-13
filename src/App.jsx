import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/LogIn/Login';
import Newsletter from './Component/NewsLetter/NewsLetter';
import SignUp from './Component/SignUp/SignUp';
import LoggedContext from './Component/Context/LoginContext';
import { useState } from 'react';
import Blog from './Component/Blogs/Blog';
import Createblog from './Component/admin/CreateBlog';
import AllBlogs from './Component/Blogs/AllBlogs';
import ErrorNotFound from './Component/NotFound/ErrorNotFound';

function App() {
  const [LoginTrue,setLoginTrue]=useState(false)
  const adminLogged=localStorage.getItem('adminLogged')
  return (
    <>
      <LoggedContext.Provider value={{ LoginTrue, setLoginTrue }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/logIn' exact element={LoginTrue===false?<Login />:<Navigate to="/" />} />
          <Route path='/signUp' exact element={LoginTrue===false?<SignUp />:<Navigate to="/" />} />
          <Route path='/newsletter' exact element={<Newsletter />} />
          <Route path='/allblogs/:blogId' exact element={<Blog />} />
          <Route path='/allblogs/' exact element={<AllBlogs />} />
          {/* Admin Routes */}
          {}
          <Route path='admin/allblogs/create' exact element={adminLogged==='true'?<Createblog />:<ErrorNotFound/>} />
          <Route path='/*' element={<ErrorNotFound/>}/>
        </Routes>
      </LoggedContext.Provider>
    </>
  );
}

export default App;
