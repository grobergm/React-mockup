import React from 'react';
import Tab from './Tab';

const SideBar=(props)=>{
	const blue="btn btn-lg btn-primary";
    const green="btn btn-lg btn-success";
    const red="btn btn-lg btn-danger";
if (props.mainTab==="Text") return (
	<div className="btn-group">
		<Tab tab={props.tab} changeTab={props.appetizer} name="Appetizer" color={green}/>
		<Tab tab={props.tab} changeTab={props.mainCourse} name="Main Course" color={red}/>
		<Tab tab={props.tab} changeTab={props.dessert} name="Dessert" color={blue}/>
	</div>
	);
else return null;
};

export default SideBar;