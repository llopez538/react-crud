import React from 'react';
import axios from 'axios';

class Edit extends React.Component {

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

    componentDidMount() {
        axios.get('http://unefa.maxwell.com.ve/api/peliculas/'+this.props.match.params.id)
        .then( response => {
            this.setState({
                titulo: response.data.titulo,
                director: response.data.director, 
                trama: response.data.trama,
                votos: response.data.votos
            });
        })
        .catch( function (error) {
           console.log(error);
        });
    }

    onChangeTitulo(event) {
        this.setState({titulo: event.target.value});
    }

    onChangeDirector(event) {
        this.setState({director: event.target.value});
    }

    onChangeTrama(event) {
        this.setState({trama: event.target.value});
    }

    onChangeVotos(event) {
        this.setState({votos: event.target.value});
    }


    handleSubmit(event){
        event.preventDefault();
        const movie = {
            titulo: this.state.titulo,
            director: this.state.director,
            trama: this.state.trama,
            votos: this.state.votos
        };

        axios.put('http://unefa.maxwell.com.ve/api/peliculas/'+this.props.match.params.id, movie)
        .then( response =>{
            console.log(response.data);
        });

        this.props.history.push('/index');
    }
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-6">
                        <h3>Updated movie</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.titulo} onChange={this.onChangeTitulo} placeholder="Titulo" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.director} onChange={this.onChangeDirector} placeholder="Director" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.trama} onChange={this.onChangeTrama} placeholder="Trama" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" value={this.state.votos} onChange={this.onChangeVotos} placeholder="Votos" />
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Updated" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}


export default Edit;