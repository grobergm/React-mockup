import React from 'react';
import Text from "./Pages/Text"
import Database from "./Pages/Database"
import API from "./Pages/API"
import Default from "./Pages/Default"
const Content=(props)=>{
	if (props.mainTab==="Text") return <Text tab={props.tab} />;
	if (props.mainTab==="Database") return <Database tab={props.tab}/>;
	if (props.mainTab==="API") return <API tab={props.tab}/>;
	else return <Default />
}

export default Content;