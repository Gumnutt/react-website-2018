import React, { Component } from 'react';
import $ from 'jquery'; 
import sr from './ScrollReveal';


class PortfolioLeft extends Component {

  props: Props;
  
  componentDidMount = () => {
    var config = {
        beforeReveal: function(el) {
          $('.projectLeft').addClass('blockRevealer');
          $('.projectLeft').removeClass('revealer-hidden');
        },
        afterReset: function(el){
          $('.projectLeft').addClass('blockRevealer revealer-hidden');
        },
        origin   : "left",
        distance : "0",
        duration : 1500,
        scale    : 1,
        reset    : true,
        delay    : 100,
      }

    sr.reveal(this.refs.projectLeft, config);
  }


  render() {
    return (
      <div className="inner-content left-content">
        <div className="image-container col-md-offset-2 col-md-4">
          <img src={this.props.img} />
        </div>
        <div className="project-titled col-md-4 projectLeft" id="projectLeft" ref={this.props.refName}>
          <h2 className="project-title" id="title-1">{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default PortfolioLeft;
