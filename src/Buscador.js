import React from 'react';

class Buscador extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    handleBuscadorChange = event => {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.search(this.state.query);
    }

    render(){
        return (
            <div className="Search">
                <input value={this.state.query} 
                onChange={this.handleBuscadorChange}
                name="query"></input>

            </div>
        )
    }
}

export default Buscador;