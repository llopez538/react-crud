import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RowTable extends React.Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        axios.delete('http://unefa.maxwell.com.ve/api/peliculas/'+this.props.movie.id)
        .then( console.log('deleted') )
        .catch( function(error) {
            console.log(error);
        });
    }

    render(){
        return (
            <tr>
                <td>{ this.props.movie.id }</td>
                <td>{ this.props.movie.titulo }</td>
                <td>{ this.props.movie.director }</td>
                <td>{ this.props.movie.trama }</td>
                <td>{ this.props.movie.votos }</td>
                <td>{ this.props.movie.updated_at }</td>
                <td><Link to={"/edit/"+ this.props.movie.id} className="btn btn-primary">Edit</Link></td>
                <td><button onClick={this.delete} className="btn btn-danger">Delete</button></td>
            </tr>
        );
    }
}

export default RowTable;