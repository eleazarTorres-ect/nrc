import './assets/css/main.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/HomeContainer';
import Next from './containers/NextContainer';
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  AOS.init();
  return (
    <Router>
        <React.Fragment>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={Next} />
          </Switch>
        </React.Fragment>
      </Router>
  );
}

export default App;
