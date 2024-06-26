import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './components/pages/Home'
import { Company } from './components/pages/Company'
import { Contact } from './components/pages/Contact'
import { Projects } from './components/pages/Projects'
import { NewProject } from './components/pages/NewProject'

import { Container } from './components/layout/container'
import { Navbar } from "./components/layout/navbar";
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Container>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/company">
              <Company />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/newproject">
              <NewProject />
            </Route>
          </Container>
        </Switch>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
