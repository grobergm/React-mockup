import React from 'react';

const Tab=(props)=>{
	if (props.tab===props.name){
	return (<button onMouseOver={props.changeTab}
						className={props.color}>{props.name}</button>)
	}
	else return(<button onMouseOver={props.changeTab}
						className="btn btn-lg">{props.name}</button>)
}
export default Tab;