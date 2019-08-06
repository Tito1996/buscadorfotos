import React from 'react';
import Unsplash, {toJson} from 'unsplash-js';

class Fotos extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fotos: [],
        }
    }

    componentDidMount(){
        this.getFotos(this.props.query);
    }

    componentWillReceiveProps(nextProps){
        this.getFotos(nextProps.query);
    }

    getFotos = q => {
        const unsplash = new Unsplash({
            applicationId: "3f63e7ee01163bc132f65750d73541e9e20b6cf90801e0b4d720255387f27bf4",
            secret: "871a0579077349fc4e18d318d1a5c6071c7a387e9f6aec813b56724ec7fbd336"
        });
        unsplash.search.photos(q, 1).then(
            toJson
        ).then(json => {
            console.log(json)
            this.setState({
                fotos: json.results
            })
        });

    }

    render(){
        return (
            <div>
                {
                    this.state.fotos.map( item =>
                        <img key={item.id} src={item.urls.small} alt="{item.alt}"></img>
                    )
                }
            </div>
        )
    }
}

export default Fotos;