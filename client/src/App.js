import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Main from './Main'

function App() {
  return <>
  
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/main" element={<Main />} />
  </Routes>
  </BrowserRouter>  
  
  </>;
}

export default App;
