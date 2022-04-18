
import { Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blog from './Components/Blogs/Blog';
import Cheakout from './Components/Cheakout/Cheakout';
import Footer from './Components/Footer/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Signup from './Components/Login/Signup/Signup';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

        <Route path='/cheakout' element={
          <RequireAuth>
            <Cheakout></Cheakout>
          </RequireAuth>
        }> </Route>
        <Route path='/blog' element={<Blog></Blog>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
