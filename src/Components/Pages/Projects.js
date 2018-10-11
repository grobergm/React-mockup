import React from 'react';

const Projects=(props)=>{
if (props.sideTab==="MyProjects"){
return (
<div className="view">
	<img className="img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1950&q=80"/>
		<div className="content">
			<h1>Projects</h1>
	</div>
</div>
)};
if (props.sideTab==="GroupProjects"){
return (
<div className="view">
  <img className="img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1950&q=80"/>
    <div className="content">
      <h1>Projects</h1>
  </div>
</div>
)};
if (props.sideTab==="Deployed"){
return (
<div className="view">
  <img className="img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1950&q=80"/>
    <div className="content">
      <h1>Projects</h1>
  </div>
</div>
)};

return (
<div className="view">
  <img className="img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1950&q=80"/>
    <div className="content">
      <h1>Projects</h1>
  </div>
</div>
);


}
export default Projects;



