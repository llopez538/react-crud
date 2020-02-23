import React from 'react';
import axios from 'axios';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeTitulo = this.onChangeTitulo.bind(this);
        this.onChangeDirector = this.onChangeDirector.bind(this);
        this.onChangeTrama = this.onChangeTrama.bind(this);
        this.onChangeVotos = this.onChangeVotos.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
        
        this.state = { 
            titulo: '',
            director: '',
            trama: '',
            votos: ''
        };
    }

    onChangeTitulo(event) {
        this.setState({
            titulo: event.target.value
        });
    }

    onChangeDirector(event) {
        this.setState({
            director: event.target.value
        });
    }

    onChangeTrama(event) {
        this.setState({
            trama: event.target.value
        });
    }

    onChangeVotos(event) {
        this.setState({
            votos: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const movie = {
            titulo: this.state.titulo,
            director: this.state.director,
            trama: this.state.trama,
            votos: this.state.votos
        }
        axios.post('http://unefa.maxwell.com.ve/api/peliculas', movie)
        .then(res => console.log(res.data));
        this.setState({
            titulo: '',
            director: '',
            trama: '',
            votos: ''
        });
    }

    render() { 
        return ( 
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-6">
                        <h3>Add new movies</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" value={ this.state.titulo } onChange={ this.onChangeTitulo } className="form-control" placeholder="Title" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={ this.state.director } onChange={ this.onChangeDirector } className="form-control" placeholder="Director" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={ this.state.trama } onChange={ this.onChangeTrama } className="form-control" placeholder="Trama" />
                            </div>
                            <div className="form-group">
                                <input type="text" value={ this.state.votos } onChange={ this.onChangeVotos } className="form-control" placeholder="Votos" />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Create Movie" className="btn btn-primary" placeholder="Name" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Create;