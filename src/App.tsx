import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Settings } from './components/Settings';
import { LoginProvider } from './Context/LoginContext'

function App() {

  return (
    <LoginProvider>
      <Login />
      <Home />
      <Settings />
    </LoginProvider>
  );
}

export default App;