import ContextProvider from './context/ContextProvider.jsx'
import './App.css'
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return(
    <ContextProvider>
    <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </ContextProvider>
  )
}

export default App;
