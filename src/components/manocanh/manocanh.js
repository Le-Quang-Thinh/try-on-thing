import React, { Component } from 'react';
import initStyle2 from "../../mock/initStyle2";
import Setmanocanh from './setmanocanh';


const API_GET_INIT_STYLE = 'http://localhost:3000/api2';
class Manocanh extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            load: true,
            styles: {}
         }
        this.loadStylesFromServer = this.loadStylesFromServer.bind(this)
    }
    loadStylesFromServer(){
        return fetch(API_GET_INIT_STYLE)
          .then(response => response.json())
          .then( (data) => {
              console.log('asasd'+ data);
              this.setState({ 
                load :false, 
                styles :{ ...data }})
        });
    }
    componentDidMount() {
        this.loadStylesFromServer();
    }
    render() { 
        console.log('initStyle1', this.state);
        const PartItems = Object.getOwnPropertyNames(this.state.styles).map((style, index) => {
            return <Setmanocanh styleInit={this.state.styles[style]}
                // items={this.props.choosenItem[style]}
                key={index} />
        });
        const { isLoaded } = this.state;

        return (
            <div className='contain'>
                <div className="background-manocanh row col-sm-2">
                    <div className="manocanh" >
                        <div className='row'>
                            {PartItems}
                            {isLoaded && <div class="loader" />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Manocanh;