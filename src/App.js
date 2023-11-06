import './App.css'
import LoginForm from './components/LoginForm'
import PublicHello from './components/PublicHello'
import PrivateHello from './components/PrivateHello'
import SAMLLoginForm from './components/SamlLoginForm'


function App() {
  return <div>
    <LoginForm/>
    <SAMLLoginForm/>
    <PublicHello/>
    <PrivateHello/>
  </div>
}

export default App;
