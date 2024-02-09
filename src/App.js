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
				<Route exact path="/" render={()=><MainPage darkMode={darkMode}/>}/>
	            <Route path="/Japan" render={()=><Japan darkMode={darkMode}/>} />
	            <Route path="/Korea" render={()=><Korea darkMode={darkMode}/>} />
	            <Route path="/China" render={()=><China darkMode={darkMode}/>} />
	            <Route path="/BookNow" render={()=><BookNow darkMode={darkMode}/>} />
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
