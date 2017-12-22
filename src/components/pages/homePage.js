import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <section className="content">
        <div className="name col-md-offset-2">
          <div className="title">
            <h1>{this.props.name}</h1>
            <h3>{this.props.job}</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default Homepage;
