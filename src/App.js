import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import About from './components/pages/About';
import Pricing from './components/pages/Pricing';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/pricing" component={Pricing}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
