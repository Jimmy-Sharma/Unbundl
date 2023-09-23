import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <Toaster/>
    </div>
  );
}

export default App;
