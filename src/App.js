import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/Container.js';
import MainPage from './components/MainPage.js';
import Japan from './components/Japan.js';
import Korea from './components/Korea.js';
import China from './components/China.js';
import BookNow from './components/BookNow.js';
import NoMatch from './components/NoMatch.js';
import Navbar from './components/NavBar.js';
import Navbar2 from './components/NavBar2.js';
import Footer from './components/Footer.js';
import './components/myStyles.css';

function App() {
	const [darkMode, setDarkMode] = useState(false)
	
	const handleChange = () => {
		setDarkMode(!darkMode)
	}
	
  return (
    <div style={{backgroundColor:`${darkMode ? 'black' : 'white'}`}}>
      <React.Fragment >
        <Router>
          <Navbar darkMode={darkMode} onDarkMode={handleChange}/>
          <Navbar2 />
          <Container>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/Japan" component={Japan} />
              <Route path="/Korea" component={Korea} />
              <Route path="/China" component={China} />
              <Route path="/BookNow" component={BookNow} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
