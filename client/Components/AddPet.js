import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';

var querystring = require('querystring');
class AddPet extends React.Component {
constructor() {
      super();
this.state = {
    name:'',
	species:'',
	breed:'',
	photoUrl:'',
	rank:[],
    messageFromServer: '',
    modalIsOpen: false
      }
	this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.InsertPet = this.InsertPet.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        messageFromServer: '',
        name:'',
		    species:'',
    		breed:'',
    		photoUrl:'',
    		rank:[],
      });
    }

handleSelectChange(e) {
      if (e.target.name == 'species') {
        this.setState({
          species: e.target.value
        });
      }
    }
onClick(e) {
      this.InsertPet(this);
    }
InsertPet(e) {
      axios.post('/pets',
        querystring.stringify({
          name: e.state.name,
          species: e.state.species,
          breed: e.state.breed,
          photoUrl: e.state.photoUrl,
          rank: e.state.rank
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((response)=> {
        e.setState({
          messageFromServer: response.data
        });
      });
    }
handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

render() {
   if(this.state.messageFromServer == ''){
      return (
<div>
  <button className="btn btn-lg btn-success" onClick={this.openModal}><i className="fas fa-plus"></i></button>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Add Pet"
   		className="Modal">
	<Link to={{pathname: '/'}} style={{ textDecoration: 'none' }}>
	    <button className="btn btn-lg btn-danger" onClick={this.closeModal}><i className="fas fa-window-close"></i></button>
	</Link><br/>
	<fieldset>
	    <label for="name">Name:</label><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInputChange}></input>
	    <label for="species">species:</label>
	       <select id="species" name="species" value={this.state.species} onChange={this.handleSelectChange}>
	            <option value="dogs" id="dogs">Dog</option>
	            <option value="cats" id="cats">Cat</option>
	            <option value="fishes" id="fishes">Fish</option>  
	            <option value="birds" id="birds">Bird</option>  
	            <option value="lizards" id="lizards">Lizard</option>  
	        </select>
	    <label for="breed">Breed:</label><input type="text" id="breed" name="breed" value={this.state.breed} onChange={this.handleInputChange}></input>
	    <label for="photoUrl">Photo Url:</label><input type="text" id="photoUrl" name="photoUrl" value={this.state.photoUrl} onChange={this.handleInputChange}></input>
	    <label for="rank">Rank:</label><input type="number" min="1" max="5" id="rank" name="rank" value={this.state.rank} onChange={this.handleInputChange}></input>      
	</fieldset>
	<div className='button-center'>
		<br/>
		<button className="btn btn-lg btn-success" onClick={this.onClick}>Add New Pet</button>
	</div>
	</Modal>
</div>
      )
   }
   else{
    return (
<div>
       <button className="btn btn-lg btn-success" onClick={this.openModal}><i className="fas fa-plus"></i></button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add Pet"
        className="Modal">
	<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/'}} style={{ textDecoration: 'none' }}>
         <button className="btn btn-lg btn-danger" onClick={this.closeModal}><i className="fas fa-window-close"></i></button>
        </Link>
    </div>
      </Modal>
</div>
     )
    }
   }
}
export default AddPet;