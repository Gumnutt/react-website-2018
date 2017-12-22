import React, { Component } from 'react';
import $ from 'jquery'; 
import sr from './ScrollReveal';

class PortfolioRight extends Component {

  props: Props;
  
  componentDidMount = () => {
    var config = {
        beforeReveal: function(el) {
          $('.projectRight').addClass('blockRevealer');
          $('.projectRight').removeClass('revealer-hidden');
        },
        afterReset: function(el){
          $('.projectRight').addClass('blockRevealer revealer-hidden');
        },
        origin   : "right",
        distance : "0",
        duration : 1500,
        scale    : 1,
        reset    : true,
        delay    : 100,
      }

    sr.reveal(this.refs.projectRight, config);
  }

  render() {
    return (
      <div className="inner-content right-content">
        <div className="image-container col-xs-12 col-md-4">
          <img src={this.props.img} />
        </div>
        <div className="project-titled col-xs-offset-0 col-md-offset-2 col-xs-12 col-md-4 projectRight" id="projectRight" ref={this.props.refName}>
          <h2 className="project-title" id="title-1">{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default PortfolioRight;