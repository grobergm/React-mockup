import React from 'react';

const ContactTab=(props)=>{
    let thisTab="Contact";
	if (props.tab==="Contact"){
		return (<button onMouseOver={props.changeTab}
						className="blockContact btn btn-lg btn-info">Contact</button>)
	}
	else return(<button onMouseOver={props.changeTab}
						className="blockContact btn btn-lg">Contact</button>)
}
export default ContactTab;