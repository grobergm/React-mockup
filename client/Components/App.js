import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Views from './Views';
import Tab from './Tab';
import ContactTab from './ContactTab';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.text=this.text.bind(this);
    this.api=this.api.bind(this);
    this.database=this.database.bind(this);
    this.contact=this.contact.bind(this);
    this.state=
    {tab:""};
  }
  text(){this.setState({tab:"Text"})}
  apiTab(){this.setState({tab:"API"})}
  database(){this.setState({tab:"Database"})}
  contact(){this.setState({tab:"Contact"})}
  render() {
    const blue="btn btn-lg btn-primary";
    const green="btn btn-lg btn-success";
    const red="btn btn-lg btn-danger";
    const contact="blockContact btn btn-lg btn-info";
    return (
      <div className="App">
        <header className="App-header">
          <span className="contactButton"><ContactTab changeTab={this.contactTab} tab={this.state.tab}/></span>
          <h1 className="App-title">Matt Groberg</h1>
          <p className="App-intro"><span className="lineAround"><em>Web Development</em></span></p>

          <div id="tabs" className="btn-group">
            <Tab changeTab={this.text} tab={this.state.tab} name="Text" color={blue}/>
            <Tab changeTab={this.database} tab={this.state.tab} name="Database" color={green}/>
            <Tab changeTab={this.api} tab={this.state.tab} name="API" color={red}/>
          </div>
        </header>
    <Views tab={this.state.tab}/>
      </div>
    );
  }
}

export default App;
