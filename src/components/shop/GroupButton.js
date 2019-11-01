import React, { Component } from 'react';
import Button from "./Button/Button";
const API_GET_INIT_STYLE = 'http://localhost:3000/api3';
class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch(API_GET_INIT_STYLE)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.ListOfButton
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            let ElementButton = items.map((item, index) => {
                return <Button key={index}
                    index={index}
                    btn={item}
                    changeTab={this.changeTab}
                    class={index === this.state.id ? ' btn-primary' : ' btn-default'}></Button>
            })
            return (
                <div className="menu">
                    <ul className="nav">
                        {ElementButton}
                    </ul>
                </div>
              );
        }
        }
      }
export default ButtonGroup;