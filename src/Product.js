import {Component} from "react";
export default class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            product: this.props.product 
        }
    }
    render(){
        return (
            <div className="col-lg-6">
                <div className="card m-4">
                    <div className="card-body">
                        <div className="text-muted">
                       <span className="text-start">#{this.state.product.id}</span> 
                        <span onClick={()=> this.props.onDelete(this.state.product)} className="pull-right handle-icon">
                        <i className="fa fa-times"></i>
                        </span>
                        </div>
                        <h5 className="pt-5 border-top">{this.state.product.productName}</h5>
                        <p>${this.state.product.price}</p>
                    </div>
                    <div className="card-footer ">
                        <div className="float-end">
                             {this.props.children}
                        </div>
                        <div className="float-start">
                            <span className="badge text-black">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button className="btn btn-outline-success" onClick={()=> this.props.onIncrement(this.state.product, 10)}>+</button>
                                <button className="btn btn-outline-success" onClick={()=> this.props.onDecrement(this.state.product, 0)}>-</button>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}