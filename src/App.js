import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import Curiosity from './pages/Curiosity'
import Spirit from './pages/Spirit'
import Opportunity from './pages/Opportunity'

import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/curiosity" component={Curiosity} />
        <Route exact path="/spirit" component={Spirit} />
        <Route exact path="/opportunity" component={Opportunity} />
      </Switch>
    </Router>
  );
}

export default App;
