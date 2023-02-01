import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';
import Home from './Home';
import Users from './Users';
import About from './About';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        Learn React
      </header>
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/about' element={About} />
        <Route path='/users' element={Users} />
        <Route path='*' element={NotFoundPage} />
      </Routes>
    </div>
  );
}

export default App;
