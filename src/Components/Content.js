import React from 'react';
import Text from "./Pages/Text"
import Projects from "./Pages/Projects"
import Services from "./Pages/Services"
import Default from "./Pages/Default"
const Content=(props)=>{
	if (props.mainTab==="Text") return <Text tab={props.tab} />;
	if (props.mainTab==="Projects") return <Projects tab={props.tab}/>;
	if (props.mainTab==="Services") return <Services tab={props.tab}/>;
	else return <Default />
}

export default Content;