import React, { Component } from 'react';
import { stringify } from 'querystring';

class Button extends Component {
    constructor(props) {
        super(props);
        this.btn = this.props.btn;
    }

    render()
     { 
        // //  console.log(this.btn ) ;
        //  let styles=this.btn;
        //  styles = {
        //     ...styles
        // }
        // // console.log(styles )
        // Object.getOwnPropertyNames(styles).map((styles, index) => {
        //     return console.log(index);
        // })
        return ( 
            <li className="nav-item">
                    <a className="nav-link active" 
                    href={`#${this.btn.tabName}` }
                    onClick={() => this.btn.changeTab(this.btn.index)}> {this.btn.showName}</a>
            </li>
         );
    }
}
 
export default Button;