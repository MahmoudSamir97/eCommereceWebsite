import { Component } from "react";
import Product from "./Product.js";
export default class Cart extends Component {

    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }

    render(){
        return (
            <div className="container-fluid">
                <h4 className="mt-4">Shopping cart</h4>
                <div className="row">
                    {this.state.products.map(prod =>{
                        return <Product
                                 key={prod.id}
                                 product={prod}
                                 onIncrement={this.handleIncrement}
                                 onDecrement={this.handleDecrement}
                                 onDelete = {this.handleDelete}
                                >
                                    <button className="btn btn-primary">Buy Now</button>
                                </Product>
                    })}
                </div>
            </div>
        )
    }

    componentDidMount = async ()=>{
       let response = await fetch("http://localhost:5000/products", {method: "GET"});
       let prods = await response.json();
       this.setState({products: prods})
     
    };

    handleIncrement = (data , maxValue)=>{
        let allArray = this.state.products;
        let index = allArray.indexOf(data);

        if(allArray[index].quantity < maxValue){
            allArray[index].quantity ++;
            this.setState({products: allArray})
        }
    }
    handleDecrement = (data, minValue)=>{
        let allArray = [...this.state.products];
        let index = allArray.indexOf(data);
        if(allArray[index].quantity > minValue){
            allArray[index].quantity --;
            this.setState({products: allArray})
        }

    }

    handleDelete = (prod)=>{
        let allArray = [... this.state.products];
        let index = allArray.indexOf(prod);
        if(window.confirm("Are you sure ?")){
            allArray.splice(index, 1);
            this.setState({products: allArray});
        }
    }
}