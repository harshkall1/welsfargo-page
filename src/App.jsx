import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Detailspage from './pages/Signup';
import Thankspage from './pages/Thankspage';
import Account from './pages/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Detailspage />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/thanks' element={<Thankspage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;