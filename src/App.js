import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path='/' element={< Login />}></Route>
            <Route exact path='/home' element={< Home />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
