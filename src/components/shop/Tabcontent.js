import React, { Component } from 'react';
const API_GET_INIT_STYLE='http://localhost:3000/api1';
class Tabconter extends Component {
    constructor(props) {
        super(props);
        this.state = { data : []  }
    }
    componentDidMount() {
        fetch(API_GET_INIT_STYLE)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                data: result.ListOfItems
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
          )
      }  
    render() {
        const { data } = this.state;
          return (
             <div className="row col-sm-8 float-left">
              {data.map((item,index) => (
               <div className="col-sm-3">
                   <div className="card">
                       <img src={item.imgSrc_png} alt="" className="card-img-top" />
                       <div className="card-body">
                           <h5 className="card-title" > </h5>
                               <p className="cart-text" >{item.name}</p> 
                           <a href="true" className="btn btn-primary" ></a>
                       </div>
                   </div>
               </div>
              ))}
            </div>
          );
        }
      }
 
export default Tabconter;