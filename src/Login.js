import { Component } from "react";
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            message: ""
        }
    }

    render(){
        return(
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Login</h4>
                
                {/* Email starts */}
                <div className="form-group form-row m-2">
                    <label className="col-lg-9">Email:</label>
                    <input
                     type="text"
                     className="form-control"
                     value={this.state.email}
                     onChange={ (event)=> {
                        this.setState({email: event.target.value});
                        console.log(this.state.email);
                     } 
                    }
                    />
                </div>
                {/* Email ends */}

                {/* Password starts */}
                <div className="form-group form-row m-2">
                    <label className="col-lg-9">Password:</label>
                    <input
                     type="password"
                     className="form-control"
                     value={this.state.password}
                     onChange={ (event)=> {
                        this.setState({password: event.target.value});
                        console.log(this.state.password);
                     } 
                    }
                     />
                </div>
                {/* Password ends */}

                <div className="text-end">
                    {this.state.message}
                    <button className="btn btn-primary m-2" onClick={this.onLoginClick}>Login</button>
                </div>

            </div>
        )
    }

    onLoginClick= async ()=>{
        let response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, {method: "GET"});
        let body = await response.json();
        if(body.length > 0){
            this.setState({message: <span className="text-success">Login successfuly</span>})
        } else{
            this.setState({message: <span className="text-danger">Invalid Login, please try again </span>})
        }
    }

}