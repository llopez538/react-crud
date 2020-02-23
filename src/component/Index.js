import React from 'react';
import axios from 'axios';
import RowTable from './RowTable';

class Index extends React.Component {

    constructor(props){
        super(props);

        this.state = { movies: []};
    }

    componentDidMount() {
        axios.get('http://unefa.maxwell.com.ve/api/peliculas')
        .then( (response) => {
            this.setState({movies: response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    rowTable() {
        return this.state.movies.map( function (object, i) {
            return <RowTable movie={object} key={i} />
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <table className="table table-hover border">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITULO</th>
                            <th>DIRECTOR</th>
                            <th>TRAMA</th>
                            <th>VOTOS</th>
                            <th>UPDATE_AT</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.rowTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Index;