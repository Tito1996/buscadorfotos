import React from 'react';
import Fotos from './Fotos';
import Buscador from './Buscador'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            q: "caribe"
        }
    }

    onBuscadorChange = q => {
        this.setState(  {
            q
        })
    }

    render(){
        return (
        <div className = "app">
            <Buscador search={this.onBuscadorChange}></Buscador>
            <Fotos query={this.state.q}></Fotos>
        </div>
        )
    }
}

export default App;