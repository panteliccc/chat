import './style.css';
import SideBar from './components/side-bar';
import Header from './components/header';
import Chat from './components/chat';
import Login from './components/login'
import Register from './components/register';

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className='col'>
        <Header />
        <Chat />
      </div>  

    </div>
  );
}

export default App;
