import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
//components
import Gridlines from './components/gridLines/gridLines';
import Homepage from './components/pages/homePage';
import PortfolioLeft from './components/portfolioComponent/portfolioLeft';
import PortfolioRight from './components/portfolioComponent/portfolioRight';
import About from './components/pages/about';

// Includes
import './Assets/css/default.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Gridlines />
          <Homepage name={"Brynn McGarry Watson"} job={"Web Developer & Graphic Designer"} />
          <PortfolioLeft title={"CSS Solar System"} refName={"projectLeft"} img={"http://brynnmw.com/img/2017/space.jpg"} description={"An experimental use of CSS, the project uses 100% css to generate our solar system. The project is a true time scaled, which means that every object has a time relative to an Earth year."} />
          <PortfolioRight title={"Philip Spelman"} refName={"projectRight"} img={"http://brynnmw.com/img/2017/philip.jpg"} description={"Minimal and Imagary driven, the website for Philip Spelman takes his bold and colourful work and makes it a focal point for all users."}/>
          <PortfolioLeft title={"CSS Gen 1 Pokemon Badges"} refName={"projectLeft"} img={"http://brynnmw.com/img/2017/badges.jpg"} description={"100% CSS, this project takes use of clipping paths and a childhood love. The badges are based off the orginal Pokemon Gym Badges but have a modern polygraphic style to them."} />
          <PortfolioRight title={"Emanuel Solicitors"} refName={"projectRight"} img={"http://brynnmw.com/img/2017/emanuel.jpg"} description={"Emanuel Solicitors is a Canberra based Law firm looking for a minimal and modern approach to help them stand out from the crowd."}/>
          <Route exact path='/About' component={About} />

        </div>
      </Router>
    );
  }
}

export default App;
