import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Home';
import Users from './Users';
import About from './About';
import Nav from './Nav';
import NotFoundPage from './NotFoundPage';


function App() {
  return (
    <div className="App">
     <Nav/>
      <header className="App-header">
          Learn React
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>

    </div>
  );
}

export default App;
