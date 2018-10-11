import React, { Component } from 'react';
import Content from './Components/Content';
import Views from './Components/Views';
import Tab from './Components/Tab';
import ContactTab from './Components/ContactTab';
import './App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.text=this.text.bind(this);
    this.projectsTab=this.projectsTab.bind(this);
    this.servicesTab=this.servicesTab.bind(this);
    this.contactTab=this.contactTab.bind(this);
    this.state=
    {tab:""};
  }
  text(){this.setState({tab:"Text"})}
  projectsTab(){this.setState({tab:"Projects"})}
  servicesTab(){this.setState({tab:"Services"})}
  contactTab(){this.setState({tab:"Contact"})}
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
          <p className="App-intro"><span className="lineAround"><em>Web Developer</em></span></p>

          <div id="tabs" className="btn-group">
            <Tab changeTab={this.text} tab={this.state.tab} name="Text" color={blue}/>
            <Tab changeTab={this.servicesTab} tab={this.state.tab} name="Services" color={green}/>
            <Tab changeTab={this.projectsTab} tab={this.state.tab} name="Projects" color={red}/>
          </div>
        </header>
    <Views tab={this.state.tab}/>
      </div>
    );
  }
}

export default App;
