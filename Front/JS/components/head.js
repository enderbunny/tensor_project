import React, { Component } from 'react';

export default class Hea extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }
  render(){
    return (
      <div className="Hea">
        <h1>Hallo, React!</h1>
        <div>Today: {this.state.date.toDateString()}</div>
      </div>
    )
  }
}
let Header = () => {
    return(
            <header class='header'>
        <div className="container text-center">
            <div className="row align-items-start">
              <div className="col header">
                Одна из трех колонок
              </div>
              <div className="col header">
                Одна из трех колонок
              </div>
              <div className="col header">
              </div>
              <div className="col header">
                Одна из трех колонок
              </div>
                <div className="col header">
                  Одна из трех колонок
              </div>
            </div>
          </div>
            </header>
    );
}
//export default Header;