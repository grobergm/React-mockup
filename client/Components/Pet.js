import React from 'react';


export default class Pet extends React.Component {
	constructor(props){
		super(props);
		this.hoverIn=this.hoverIn.bind(this);
		this.hoverOut=this.hoverOut.bind(this);
		this.state={selected:false}
	}
		hoverIn(){
			this.setState({selected:true})
		}
		hoverOut(){
			this.setState({selected:false})
		}
	render(){
		if(this.state.selected===false){
		return(
			<div className="pet" onMouseOver={this.hoverIn} onMouseOut={this.hoverOut}>
				<img className="img-fluid" src={props.photo}/>
			</div>
			)	
		}
		if(this.state.selected===true){
			return(
			<div className="card" onMouseOver={this.hoverIn} onMouseOut={this.hoverOut}>
				<img className="card-img-top" src="..." alt="Card image cap"/>
  					<div className="card-body">
   					<h5 className="card-title">{props.name}-{props.rank}</h5>
    				<p className="card-text">{props.breed}</p>
    				<div className="btn-group">
    					<a href="#" className="btn btn-primary">Rank</a>
    					<a href="#" className="btn btn-danger"><i className="fas fa-trash-alt"></i>Delete</a>
    				</div>
  					</div>
			</div>
			)
		}
	}
}