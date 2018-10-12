import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AddPet from '../AddPet';
import Pet from '../Pet';


export default class Database extends React.Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount(){
    this.getData(this);
    }
    
    getData(ev){
    axios.get('/pets')
      .then((response)=> {
        ev.setState({data: response.data});
      });
    }

    render() {
        return (
            <div className="container">
                <AddPet />
                <div className="row">
                {
                    this.state.data.map((pet) => {
                        return (
                            <Pet species={pet.species} 
                                breed={pet.breed}
                                name={pet.name}
                                photo={pet.photoUrl}
                                rank={pet.rank.reduce((ac,cu)=>{ac+cu})/pet.rank.length} />
                        )
                    })
                }
                </div>
            </div>
            )
    }
}