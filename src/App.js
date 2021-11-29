import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Curiosity from './pages/Curiosity'
import Spirit from './pages/Spirit'
import Opportunity from './pages/Opportunity'
import Perseverance from './pages/Perseverance'
import Navbar from './components/Navbar/Navbar'

import './app.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/curiosity" component={Curiosity} />
        <Route exact path="/spirit" component={Spirit} />
        <Route exact path="/opportunity" component={Opportunity} />
        <Route exact path="/perseverance" component={Perseverance} />
      </Switch>
    </Router>
  );
}

export default App;