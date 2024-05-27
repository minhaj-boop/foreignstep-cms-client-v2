// import logo from './logo.svg';
// import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Mails from './Pages/Mails/Mails';
import Login from './Pages/Login/Login';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <>
      <Router>
        <div className='flex flex-row'>
          <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<Contact />} />
            <Route path='/mails' element={<Mails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route exact path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
