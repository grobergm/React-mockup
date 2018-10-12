import React from 'react';
import SideBar from './SideBar';
import Content from './Content';
class Views extends React.Component {

  constructor(props){
    super(props);
    this.appetizer=this.appetizer.bind(this);
    this.mainCourse=this.mainCourse.bind(this);
    this.dessert=this.dessert.bind(this);
    this.state=
    {tab:""};
  }
 appetizer(){this.setState({tab:"Appetizer"})}
 mainCourse(){this.setState({tab:"Main Course"})}
 dessert(){this.setState({tab:"Dessert"})}

  render() {
    return (
      <div>
        <div className="App-header">
          <SideBar mainTab={this.props.tab} 
            tab={this.state.tab}  
            appetizer={this.appetizer}
            mainCourse={this.mainCourse}
            dessert={this.dessert}
            />
        </div>
          <Content tab={this.state.tab} mainTab={this.props.tab} />
        </div>
      )
  }
}
 
export default Views;