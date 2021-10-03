import './App.css';
import Adduser from './Components/Adduser';
import Allusers from './Components/Allusers';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Afrozacademy from './Components/Afrozacademy';
import Notfound from './Components/Notfound';
function App() {
  return (
    <BrowserRouter>
        <Navbar className="navbar"/>
        <Switch className="App">
          <Route exact path='/' component={Afrozacademy}></Route>
          <Route exact path='/all' component={Allusers}></Route>
          <Route exact path='/add' component={Adduser}></Route>
          <Route component={Notfound}></Route>
        </Switch>
    </BrowserRouter> 
  );
}

export default App;